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
	const [isLoading, setIsLoading] = useState();
	const [filters, setFilters] = useState({});
	const doFilter = () => {
		let res = countries;
		if (Object.keys(filters).every(key => filters[key] == null)) return res;
		for (const key in filters) {
			if (key == "name" && filters[key]) {
				res = res.filter(c =>
					c.name.toLowerCase().includes(filters[key].toLowerCase())
				);
			} else if (key == "region" && filters[key]) {
				res = countries.filter(c => c.region == filters[key]);
			}
		}
		return res;
	};
	const renderCountries = doFilter();
	console.log(renderCountries);
	const onSearch = searchText => {
		setFilters({ ...filters, name: searchText == "" ? null : searchText });
	};
	const onFilterByRegion = region => {
		setFilters({ ...filters, region: region == "All" ? null : region });
	};
	useEffect(() => {
		setIsLoading(true);
		getAll()
			.then(data => {
				setCountries(data);
			})
			.finally(() => setIsLoading(false));
	}, []);
	const onCardClick = country => {
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
							<Filter regions={regions} onSelect={onFilterByRegion} />
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
						{renderCountries.map(c => (
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
