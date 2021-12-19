import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

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
				let a = document.createElement('a');
				a.target = '_blank';
				a.href = hmr;
				a.innerText = 'HMR';
				a.id = 'hmr';
				let container = document.getElementsByClassName('checkout')[0];
				container.appendChild(a);
			},
		};
		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}

	useEffect(() => {
		if (order_id && redirect_url) displayRazorpay(order_id, redirect_url);
	}, [order_id, redirect_url]);

	return (
		<div className="checkout">
			<h1>Checkout</h1>
		</div>
	);
}
