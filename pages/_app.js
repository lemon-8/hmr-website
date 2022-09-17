import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Script from 'next/script';
import Head from 'next/head';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
import '../styles/slideshow.css';

function MyApp({ Component, pageProps }) {
	const theme = extendTheme({
		colors: {
			hmrblack: {
				50: '#fff',
				100: '#fff',
				200: '#fff',
				300: '#fff',
				400: '#fff',
				500: '#282B2F',
				600: '#131416',
				700: '#fff',
				800: '#fff',
				900: '#fff',
			},
			hmrcyan: {
				500: '#01CFE7',
			},
			hmrblue: {
				500: '#282B2F',
			},
			hmrgray: {
				500: '#8A8682',
			},
		},
		fonts: {
			heading: 'Poppins',
			body: 'Inter',
		},
	});
	return (
		<>
		<Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

            <Script strategy="lazyOnload" id="ga">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            
			<Head>
				<title>HMR Hostel</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width, user-scalable=no"
				/>
			</Head>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}

export default MyApp;
