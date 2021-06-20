import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { format } from "../../util/number-formatter";

export default function CountryModal({ country, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack alignItems="center" direction={["column", "row"]} spacing="8">
            <Image maxW="200px" src={country.flag} alt="flag" />
            <Box flexGrow="1">
              <Heading as="h5" fontSize="xl" pb="4">
                {country.name}
              </Heading>
              <Flex justifyContent="space-between">
                <Box>
                  <Text fontSize="sm">
                    <b>Native Name: </b>
                    {country.nativeName}
                  </Text>
                  <Text fontSize="sm">
                    <b>Population: </b>
                    {format(country.population)}
                  </Text>
                  <Text fontSize="sm">
                    <b>Region: </b>
                    {country.region}
                  </Text>
                  <Text fontSize="sm">
                    <b>Subregion: </b>
                    {country.subregion}
                  </Text>
                  <Text fontSize="sm">
                    <b>Capital: </b>
                    {country.capital}
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="sm">
                    <b>Top Level Domain: </b>
                    {country.topLevelDomain}
                  </Text>
                  <Text fontSize="sm">
                    <b>Currencies: </b>
                    {country.currencies.map((cur) => cur.name).join(", ")}
                  </Text>
                  <Text fontSize="sm">
                    <b>Laguages: </b>
                    {country.languages.map((lan) => lan.name).join(", ")}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
