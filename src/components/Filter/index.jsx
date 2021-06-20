import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

export default function Filter({ regions, onSelect, selectedRegion }) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="outline">
        {selectedRegion == "All" ? "Filter by region" : selectedRegion}
      </MenuButton>
      <MenuList>
        <>
          <MenuItem onClick={() => onSelect("All")}>All regions</MenuItem>
          {regions.map((r) => (
            <MenuItem key={r} onClick={() => onSelect(r)}>
              {r}
            </MenuItem>
          ))}
        </>
      </MenuList>
    </Menu>
  );
}
