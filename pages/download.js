import React from 'react';
import { getSelectorsByUserAgent } from 'react-device-detect';

export async function getServerSideProps({ req }) {
	let userAgent;
	if (req) {
		// if you are on the server and you get a 'req' property from your context
		userAgent = req.headers['user-agent']; // get the user-agent from the headers
	} else {
		userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object
	}
	const { isIOS } = getSelectorsByUserAgent(userAgent);
	const downloadURL = isIOS
		? 'https://apps.apple.com/us/app/hostelworld-hostel-travel-app/id348890820'
		: 'https://play.google.com/store/apps/details?id=com.lemon8.hmrhostels';
	return {
		redirect: {
			permanent: false,
			destination: downloadURL,
		},
		props: {},
	};
}

export default function Download() {
	return <>Download HMR Hostels app</>;
}
