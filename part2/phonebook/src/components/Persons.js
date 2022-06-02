import Person from "./Person";

const Persons = ({ filteredPersons, deleteHandler }) => {
  return (
    <>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <Person
          key={person.name}
          person={person}
          deleteHandler={deleteHandler}
        />
      ))}
    </>
  );
};

export default Persons;
