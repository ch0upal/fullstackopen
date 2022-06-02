const Filter = ({ filter, filterNamesHandler }) => {
  return (
    <form>
      <div>
        filter shown with <input value={filter} onChange={filterNamesHandler} />
      </div>
    </form>
  );
};

export default Filter;
