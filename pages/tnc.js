/* eslint-disable react/no-unescaped-entities */
import { Box } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function TnC() {
	const router = useRouter();
	useEffect(() => {
		window.open('./agreement.pdf');
	}, []);
	return (
		<Box>
			<Box
				position={{ base: '', lg: 'fixed', xl: 'fixed' }}
				mt={{ base: '5' }}
				ml={{ base: '10', lg: '10', xl: '12' }}
			>
				<Button color="#282B2F" onClick={() => router.push('/')}>
					<IoMdArrowRoundBack />
				</Button>
			</Box>
			<Box
				mx={{ base: '10', lg: '44', xl: '80' }}
				my={{ base: '5', lg: '10', xl: '12' }}
			>
				<Button onPress={window.open('./agreement.pdf')}>
					Download Agreement
				</Button>
			</Box>
		</Box>
	);
}
