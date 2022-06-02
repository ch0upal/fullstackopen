import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import AddPerson from "./components/AddPerson";
import Persons from "./components/Persons";
import services from "./services";
import Notifications from "./components/Notifications";
import Error from "./components/Error";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    services.getPersons().then((response) => setPersons(response.data));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one ?`
        )
      ) {
        const foundPerson = persons.find((person) => person.name === newName);
        const updatedPerson = { ...foundPerson, number: newNumber };
        services
          .updatePerson(updatedPerson.id, updatedPerson)
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.id !== updatedPerson.id ? person : response.data
              )
            );
            setNewName("");
            setNewNumber("");
            setMessage(`Updated ${updatedPerson.name}`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch((error) => {
            console.log(error);
            setPersons(
              persons.filter((person) => person.id !== updatedPerson.id)
            );
            setError(
              `Informations of ${updatedPerson.name} has already been removed from the server`
            );
            setTimeout(() => {
              setError(null);
            }, 5000);
          });
      }
    } else {
      const person = { name: newName, number: newNumber };
      services.addPerson(person).then((response) => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewNumber("");
        setMessage(`Added ${person.name}`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
    }
  };

  const newNameHandler = (event) => {
    setNewName(event.target.value);
  };

  const newNumberHandler = (event) => {
    setNewNumber(event.target.value);
  };

  const deleteHandler = (deletedPerson) => {
    if (window.confirm(`Delete ${deletedPerson.name} ?`)) {
      services.deletePerson(deletedPerson.id);
      setPersons(persons.filter((person) => person.id !== deletedPerson.id));
    }
  };

  const filterNamesHandler = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  let filteredPersons = !filter
    ? persons
    : persons.filter((person) => person.name.toLowerCase().match(filter));

  return (
    <div>
      <h2>Phonebook</h2>
      <Notifications message={message} />
      <Error error={error} />
      <Filter filter={filter} filterNamesHandler={filterNamesHandler} />
      <AddPerson
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        newNameHandler={newNameHandler}
        newNumberHandler={newNumberHandler}
      />
      <Persons
        filteredPersons={filteredPersons}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};

export default App;
