import { Box, Heading, Text, Stack, HStack } from "@chakra-ui/layout";

import { ListItem, UnorderedList } from "@chakra-ui/react";

import Link from "next/link";

export default function Footer() {
	return (
		<Box
			mt={{ base: "20", lg: "52" }}
			bg="hmrblue.500"
			height={{ base: "65vh", lg: "96" }}
			padding={{ base: "10", lg: "28" }}
		>
			<Stack
				direction={["column", "row"]}
				justifyContent={{ base: "left", lg: "center" }}
			>
				<Box>
					<Heading fontSize="xl" color="white" fontWeight="medium">
						Contact Us
					</Heading>
					<UnorderedList
						listStyleType="none"
						margin="0"
						pt="3"
						color="white"
						fontWeight="thin"
						lineHeight="9"
					>
						<ListItem>
							<Link href="tel:91 98103-06346">
								+91 98103-06346
							</Link>
						</ListItem>
						<ListItem>
							<Link href="mailto:hi@hmrhostels.com">
								hi@hmrhostels.com
							</Link>
						</ListItem>
					</UnorderedList>
				</Box>
				<Box pl={{ base: "0", lg: "16" }}>
					<Heading fontSize="xl" color="white" fontWeight="medium">
						HMR Hostels
					</Heading>
					<UnorderedList
						listStyleType="none"
						margin="0"
						pt="3"
						color="white"
						fontWeight="thin"
						lineHeight="9"
					>
						<HStack>
							<u>
								<Link href="/privacy">Privacy Policy</Link>
							</u>
							{/* <u>
								<Link href="/refunds">
									Cancellation and Refunds
								</Link>
							</u> */}
							<u>
								<Link href="/hmr-notice.pdf">Notice</Link>
							</u>
							<u>
								<Link href="/pricing">Pricing</Link>
							</u>
							<u>
								<Link href="/terms">Terms and Conditions</Link>
							</u>
						</HStack>
						<ListItem>
							Plot no 40B, Knowledge Park-III, Opposite Metro
							College,
						</ListItem>
						<ListItem>
							Greater Noida, Uttar Pradesh- 201310
						</ListItem>
					</UnorderedList>
				</Box>
			</Stack>
			<Text
				textAlign="center"
				color="gray.400"
				marginTop={{ base: "12", lg: "16" }}
			>
				Developed and Designed by{" "}
				<Text as="span" color="#FCE100">
					<Link href="https://lemon8.in/">🍋Lemon8.in</Link>
				</Text>
			</Text>
		</Box>
	);
}
