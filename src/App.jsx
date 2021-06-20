import {
  Box,
  Center,
  ChakraProvider,
  CircularProgress,
  Container,
  Flex,
  SimpleGrid,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAll } from "./api/country-api";
import CountryModal from "./components/CountryModal";
import Filter from "./components/Filter";
import CountryCard from "./components/CountryCard";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentCountry, setCurrentCountry] = useState();
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [selectedFilter, setSelectedFilter] = useState("All");
  const onSearch = (searchText) => {
    if (searchText == "") {
      setFilterCountries(countries);
    } else {
      setFilterCountries(
        countries.filter((c) =>
          c.name.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  };
  const onFilter = (region) => {
    setSelectedFilter(region);
    if (region == "All") {
      setFilterCountries(countries);
    } else {
      setFilterCountries(countries.filter((c) => c.region == region));
    }
  };
  useEffect(() => {
    setIsLoading(true);
    getAll()
      .then((data) => {
        setCountries(data);
        setFilterCountries(data);
      })
      .finally(() => setIsLoading(false));
  }, []);
  const onCardClick = (country) => {
    onOpen();
    setCurrentCountry(country);
  };
  return (
    <ChakraProvider>
      <Header />
      <Center mt="8">
        <Container maxW="container.xl">
          <Flex direction={["column", "row"]}>
            <Box width={["100%", "40%"]}>
              <SearchBar onSearch={onSearch} />
            </Box>
            <Spacer />
            <Box mt={["8", "unset"]} width={["50%", "auto"]}>
              <Filter
                selectedRegion={selectedFilter}
                regions={regions}
                onSelect={onFilter}
              />
            </Box>
          </Flex>
        </Container>
      </Center>
      <Container maxW="container.xl" mt="8">
        {isLoading ? (
          <Flex justifyContent="center" alignItems="center" height="80vh">
            <CircularProgress isIndeterminate color="teal.500" size="100px" />
          </Flex>
        ) : (
          <SimpleGrid
            columns={[1, 2, null, 4]}
            alignItems="center"
            justifyItems="center"
            spacingY="8"
          >
            {filterCountries.map((c) => (
              <CountryCard
                onClick={onCardClick}
                country={c}
                key={c.numericCode}
              />
            ))}
          </SimpleGrid>
        )}
      </Container>
      {currentCountry && (
        <CountryModal
          isOpen={isOpen}
          onClose={onClose}
          country={currentCountry}
        />
      )}
    </ChakraProvider>
  );
}

export default App;
