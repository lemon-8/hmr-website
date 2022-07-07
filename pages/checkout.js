import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { Button, Center, Heading, VStack } from '@chakra-ui/react';
import Link from 'next/link';

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script');
		script.src = src;
		script.onload = () => {
			resolve(true);
		};
		script.onerror = () => {
			resolve(false);
		};
		document.body.appendChild(script);
	});
}

async function postPaymentData(response, token) {
	const {
		razorpay_order_id: orderId,
		razorpay_payment_id: paymentId,
		razorpay_signature: signature,
	} = response;

	const res = await fetch(
		'https://api.hmrhostels.com/payment/verifyPayment',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				token: token,
			},
			body: JSON.stringify({
				orderId,
				paymentId,
				signature,
			}),
		}
	);
}

export default function Checkout({ order_id, redirect_url, token }) {
	const route = useRouter();
	// const { order_id, redirect_url, token } = route.query;
	const [redirectURL, setRedirectURL] = useState('/');
	const buttonRef = useRef(null);

	async function displayRazorpay(order_id, redirect_url) {
		const res = await loadScript(
			'https://checkout.razorpay.com/v1/checkout.js'
		);
		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?');
			return;
		}

		const options = {
			key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
			order_id: order_id,
			theme: {
				color: '#242535',
			},
			name: 'HMR Hostels',
			send_sms_hash: 'true',
			handler: function (response) {
				const hmr = `${redirect_url}/?orderId=${response.razorpay_order_id}&paymentId=${response.razorpay_payment_id}&signature=${response.razorpay_signature}/`;
				postPaymentData(response, token);
				setRedirectURL(hmr);
				// router.replace(hmr);
				// buttonRef.current.click();
			},
		};
		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}

	useEffect(() => {
		if (order_id) displayRazorpay(order_id, redirect_url);
		if(!token) alert('Unable to push payment data. Please verify from admin.');

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [order_id, redirect_url, token]);

	return (
		<Center className="checkout" h="100vh">
			<VStack spacing="12">
				<Heading>HMR Hostels</Heading>
				<Link href={redirectURL} passHref>
					<Button disabled={!redirectURL} ref={buttonRef}>
						Go Back to App
					</Button>
				</Link>
			</VStack>
		</Center>
	);
}

export async function getServerSideProps(context) {
	const { order_id = '', redirect_url = '/', token = '' } = context.query;
	return {
		props: { order_id, redirect_url, token },
	};
}
