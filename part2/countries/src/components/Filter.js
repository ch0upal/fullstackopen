const Filter = ({ searchTerms, searchCountry }) => {
  return (
    <div>
      find countries
      <input value={searchTerms} onChange={searchCountry} />
    </div>
  );
};

export default Filter;
