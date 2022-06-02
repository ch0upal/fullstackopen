import Weather from "./Weather";

const Country = ({ country }) => {
  return (
    <>
      <h2>{country.name.common}</h2>
      <p>{`capital ${country.capital}`}</p>
      <p>{`area ${country.area}`}</p>
      <h3>languages:</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="flag" />
      <Weather country={country} />
    </>
  );
};

export default Country;
