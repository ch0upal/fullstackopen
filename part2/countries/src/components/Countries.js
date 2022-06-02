import Country from "./Country";

const Countries = (props) => {
  if (props.countries.length > 10) {
    return <p>Too many matches, specify another filter.</p>;
  } else if (props.countries.length === 1) {
    return <Country country={props.countries[0]} />;
  } else if (props.show) {
    return <Country country={props.showedCountry} />;
  } else {
    return props.countries.map((country) => (
      <div key={country.ccn3}>
        <p>
          {country.name.common}
          <button onClick={() => props.showButtonHandler(country)}>show</button>
        </p>
      </div>
    ));
  }
};

export default Countries;
