const express = require('express');
const Diagnoses = require('./controllers/Diagnoses');

const routes = express.Router();

routes.get('/diagnoses',Diagnoses.getAll); //Listar todos
routes.post('/diagnoses', Diagnoses.store);
routes.get('/diagnoses/:id', Diagnoses.index); //Find
routes.put('/diagnoses/:id', Diagnoses.update);
routes.delete('/diagnoses/:id', Diagnoses.delete);

module.exports = routes;
