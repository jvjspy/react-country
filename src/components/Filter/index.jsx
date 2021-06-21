import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

export default function Filter({ regions, onSelect }) {
	const [selectedRegion, setSelectedRegion] = useState("All");
	const onClick = r => {
		setSelectedRegion(r);
		onSelect(r);
	};
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="outline">
				{selectedRegion == "All" ? "Filter by region" : selectedRegion}
			</MenuButton>
			<MenuList>
				<>
					<MenuItem onClick={() => onClick("All")}>All regions</MenuItem>
					{regions.map(r => (
						<MenuItem key={r} onClick={() => onClick(r)}>
							{r}
						</MenuItem>
					))}
				</>
			</MenuList>
		</Menu>
	);
}
