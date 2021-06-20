import React from "react";
import {
	Container,
	Flex,
	Heading,
	Button,
	Spacer,
	Center,
	useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDarkMode = colorMode == "dark";
	return (
		<Center shadow="md">
			<Container maxW="container.xl">
				<Flex alignItems="center" pt="2" pb="2">
					<Heading fontSize={["md", "xl"]}>Where in the world?</Heading>
					<Spacer />
					<Button
						variant="ghost"
						aria-label="Dark mode toggle"
						leftIcon={isDarkMode ? <SunIcon /> : <MoonIcon />}
						fontWeight="light"
						fontSize={["sm", "md"]}
						onClick={toggleColorMode}
					>
						{isDarkMode ? "Light mode" : "Dark mode"}
					</Button>
				</Flex>
			</Container>
		</Center>
	);
}
