import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "yup-phone";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Textarea,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Box, Heading, HStack, Text, Stack, VStack } from "@chakra-ui/layout";
import { MdCall, MdMail } from "react-icons/md";
import { Button, Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export default function HmrForm() {
	const schema = Yup.object().shape({
		name: Yup.string()
			.matches(/^[A-Za-z ]*$/, "Please enter valid name")
			.min(6, "Please enter your full name")
			.required("Name is required"),
		email: Yup.string().email("Invalid email"),
		phone: Yup.string()
			.required("You cannot procceed without a valid phone number")
			.phone("IN", false, "Please enter a valid phone number"),
		description: Yup.string(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onBlur",
	});

	const onSubmit = (data) => {
		console.log(data, "data");
		const dictMapping = {
			name: "entry.1965918628",
			email: "entry.1322283561",
			phone: "entry.1002340236",
			description: "entry.509553721",
		};

		let baseUrl =
			"https://docs.google.com/forms/d/e/1FAIpQLSeJHzc7FMxGuJjQzVFW6hGd8MyUpjGbIDNacuqZgvFDnQlmEw/formResponse?usp=pp_url&submit=Submit";

		// Iterate over dictMapping and check if key exists in values
		Object.keys(dictMapping).forEach((key) => {
			baseUrl += "&" + dictMapping[key] + "=";
			if (data[key]) {
				// If key exists, add to the form values
				baseUrl += data[key].replace("+", "%2B").replace(" ", "+");
			}
		});

		console.log(baseUrl);
		fetch(baseUrl)
			.then((response) => console.log(response))
			.catch((e) => console.log("Form Error", e));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box
				className="hmrForm"
				padding={{ base: "5", xl: "9" }}
				mx={{ base: "10", lg: "44", xl: "80" }}
				mt={{ base: "5", lg: "20", xl: "32" }}
				borderWidth="thin"
				borderRadius={{ base: "2xl", xl: "2xl" }}
			>
				<Heading fontWeight="semibold" color="hmrblack.500">
					Interested?
				</Heading>
				<Text fontWeight="500" color="hmrgray.500">
					Fill the form below to know more or you can contact us on
					the mentioned phone number
				</Text>
				<Stack direction={["column", "row"]}>
					<Box w={{ base: "l", lg: "96", xl: "2xl" }}>
						<FormControl isInvalid={errors.name} isRequired>
							<FormLabel marginTop={{ base: "5", xl: "9" }}>
								Your Name
							</FormLabel>
							<Input
								placeholder="Full Name"
								{...register("name")}
							/>
							<FormErrorMessage>
								{errors.name && errors.name.message}
							</FormErrorMessage>
						</FormControl>
						<FormControl isInvalid={errors.email}>
							<FormLabel marginTop={{ base: "5", xl: "9" }}>
								Email ID
							</FormLabel>
							<Input
								placeholder="Email ID"
								type="email"
								{...register("email")}
							/>
							<FormErrorMessage>
								{errors.email && errors.email.message}
							</FormErrorMessage>
						</FormControl>
						<FormControl isInvalid={errors.phone} isRequired>
							<FormLabel marginTop={{ base: "5", xl: "9" }}>
								Phone Number
							</FormLabel>
							<Input
								placeholder="Phone Number"
								type="tel"
								{...register("phone")}
							/>
							<FormErrorMessage>
								{errors.phone && errors.phone.message}
							</FormErrorMessage>
						</FormControl>
						<FormControl>
							<FormLabel marginTop={{ base: "5", xl: "9" }}>
								What can we help you with?
							</FormLabel>
							<Textarea
								placeholder="Description"
								{...register("description")}
							/>
						</FormControl>
					</Box>
					<Box
						color="hmrblack.500"
						paddingTop={{ base: "0", xl: "12" }}
						paddingLeft={{ base: "0", lg: "10", xl: "10" }}
						fontSize={{ base: "l", xl: "l" }}
					>
						<VStack alignItems="start" mt={{ base: "10", xl: "0" }}>
							<HStack alignItems="flex-start">
								<MdCall
									color="#01CFE7"
									style={{
										marginTop: 4,
									}}
								/>
								<Text>
									<VStack>
										<Link href="tel:91 93105-38576">
											+91 93105-38576
										</Link>
										<Link href="tel:91 87663-34708">
											+91 87663-34708
										</Link>
									</VStack>
								</Text>
							</HStack>
							<HStack marginTop={{ base: "0", xl: "7" }}>
								<MdMail color="#01CFE7" />
								<Text>
									<Link href="mailto:hi@hmrhostels.com">
										hi@hmrhostels.com
									</Link>
								</Text>
							</HStack>
						</VStack>
						<Image
							display={{ base: "none", xl: "initial" }}
							src="thumbsup.png"
							alt="thumbsup"
						/>
					</Box>
				</Stack>
				<Button
					colorScheme="hmrblack"
					borderRadius="xl"
					px="5"
					fontSize={{ base: "l", md: "14", xl: "16" }}
					marginTop={{ base: "5", xl: "9" }}
					fontWeight="normal"
					width={{ base: "100%", lg: "initial", xl: "initial" }}
					type="submit"
					isLoading={isSubmitting}
				>
					Submit
				</Button>
			</Box>
		</form>
	);
}
