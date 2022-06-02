import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");
  const [show, setShow] = useState(false);
  const [showedCountry, setShowedCountry] = useState();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data), []);
  }, []);

  const showButtonHandler = (country) => {
    setShow(true);
    setShowedCountry(country);
  };

  const searchCountryHandler = (event) => {
    setShow(false);
    setShowedCountry(null);
    setSearchTerms(event.target.value.toLowerCase());
  };

  let searchedCountries = !searchTerms
    ? countries
    : countries.filter((country) =>
        country.name.common.toLowerCase().match(searchTerms)
      );

  return (
    <div className="App">
      <Filter searchTerms={searchTerms} searchCountry={searchCountryHandler} />
      <Countries
        countries={searchedCountries}
        showButtonHandler={showButtonHandler}
        show={show}
        showedCountry={showedCountry}
      />
    </div>
  );
};

export default App;
