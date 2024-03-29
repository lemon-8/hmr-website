import { Box, Heading, HStack, Text, Stack, VStack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';

export default function GetStarted() {
	const router = useRouter();
	return (
		<Box
			justifyContent="center"
			alignContent="center"
			borderWidth="thin"
			borderRadius={{ base: '6', xl: '14' }}
			mx={{ base: '10', lg: '44', xl: '80' }}
			mt={{ base: '5', xl: '32' }}
		>
			<Stack direction={['column', 'row']}>
				<Box
					padding={{ base: '6', xl: '14' }}
					w={{ base: '100%', xl: '70%' }}
				>
					<VStack alignItems="start">
						<HStack>
							<Heading
								fontWeight="500"
								fontSize={{ base: '3xl', xl: '6xl' }}
							>
								So lets get
								<Text color="hmrcyan.500"> started!</Text>
							</Heading>
						</HStack>
						<Text
							fontWeight="500"
							fontSize={{ base: 'xl', xl: '2xl' }}
							color="hmrgray.500"
						>
							This hostel is located nearby all the major hubs and
							connectivity.
						</Text>

						<Stack
							direction={['column', 'row']}
							width="100%"
							py={{ base: '5', xl: '14' }}
							spacing="4"
						>
							<Button
								colorScheme="hmrblack"
								variant="outline"
								borderRadius="full"
								width={{ base: '100%', xl: '30%' }}
								px={{ base: '3', xl: '14' }}
								fontSize={{ base: '14', xl: '16' }}
								fontWeight="normal"
								onClick={() => router.push('/download')}
							>
								Download App
							</Button>
							<Button
								onClick={hmrForm}
								colorScheme="hmrblack"
								borderRadius="full"
								width={{ base: '100%', xl: '30%' }}
								px={{ base: '5', xl: '14' }}
								fontSize={{ base: 'sm', xl: '16' }}
								fontWeight="normal"
							>
								Book a Visit
							</Button>
						</Stack>
					</VStack>
				</Box>
				<Box bg="green.100" w={{ base: '100%', xl: '30%' }}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3514599621067!2d77.48089941414015!3d28.468960398218037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea08ea433ac9%3A0x29277c182508d9ce!2sHMR%20BOYS%20HOSTEL!5e0!3m2!1sen!2sin!4v1639940908894!5m2!1sen!2sin"
						alt="demo"
						allowFullScreen
					/>
				</Box>
			</Stack>
		</Box>
	);
}

const hmrForm = () => {
	scroller.scrollTo('hmrForm', {
		duration: 800,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};
