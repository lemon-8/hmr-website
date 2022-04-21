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

export default function Checkout() {
	const route = useRouter();
	const { order_id, redirect_url } = route.query;
	const [redirectURL, setRedicrectURL] = useState(null);
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
				setRedicrectURL(hmr);
				buttonRef.current.click();
			},
		};
		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}

	useEffect(() => {
		if (order_id && redirect_url) displayRazorpay(order_id, redirect_url);
	}, [order_id, redirect_url]);

	return (
		<Center className="checkout" h="100vh">
			<VStack spacing="12">
				<Heading>HMR Hostels</Heading>
				<Link href={redirectURL ?? ''} passHref>
					<Button disabled={!redirectURL} ref={buttonRef}>
						Go Back to App
					</Button>
				</Link>
			</VStack>
		</Center>
	);
}
