import axios from "axios";
const url = "http://localhost:3001/persons";

const getPersons = () => {
  return axios.get(url);
};

const addPerson = (newObject) => {
  return axios.post(url, newObject);
};

const deletePerson = (id) => {
  return axios.delete(`${url}/${id}`);
};

const updatePerson = (id, updatedPerson) => {
  return axios.put(`${url}/${id}`, updatedPerson);
};

export default {
  getPersons,
  addPerson,
  deletePerson,
  updatePerson,
};
