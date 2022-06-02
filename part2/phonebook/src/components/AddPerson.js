const AddPerson = (props) => {
  return (
    <>
      <h2>Add a new</h2>
      <form onSubmit={props.addPerson}>
        <div>
          name: <input value={props.newName} onChange={props.newNameHandler} />
        </div>
        <div>
          number:{" "}
          <input value={props.newNumber} onChange={props.newNumberHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default AddPerson;
