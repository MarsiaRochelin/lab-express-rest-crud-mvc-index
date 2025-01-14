//DEPENDENCIES
const express = require("express");

//CONFIGURATION
const persons = express();
const personsArray = require("../models/person.model");

//GET ROUTES
persons.get("/", (req, res) => {
  res.json(personsArray);
});

module.exports = persons;
