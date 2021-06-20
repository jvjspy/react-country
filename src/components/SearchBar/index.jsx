import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

export default function SearchBar({ onSearch }) {
	return (
		<InputGroup>
			<InputLeftElement pointerEvents="none">
				<SearchIcon color="gray.500" />
			</InputLeftElement>
			<Input
				onChange={evt => onSearch(evt.target.value)}
				type="text"
				placeholder="Search for a country..."
			/>
		</InputGroup>
	);
}
