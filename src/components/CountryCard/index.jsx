import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import React, { memo } from "react";
import { simpleFormat } from "../../util/number-formatter";

function CountryCard({ country, onClick }) {
  return (
    <Box
      maxW="200px"
      shadow="md"
      rounded="md"
      onClick={() => onClick(country)}
      cursor="pointer"
    >
      <Image roundedTop="md" src={country.flag} alt="flag" objectFit="cover" />
      <Box p="4">
        <Heading pb="2" as="h6" size="sm">
          {country.name}
        </Heading>
        <List spacing="1" fontSize="xs">
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            <b>Population: </b>
            {simpleFormat(country.population)}
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            <b>Region: </b>
            {country.region}
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            <b>Capital: </b>
            {country.capital}
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
export default memo(CountryCard, (pre, next) => pre.country == next.country);
