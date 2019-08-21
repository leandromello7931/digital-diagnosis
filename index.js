const express = require('express');
const bodyParser = require('body-parser');
const { Diagnosis } = require('./app/models');
const app = express();

app.use(bodyParser.json());

app.get('/diagnoses', async (req, res) => {
  const diagnosis = await Diagnosis.findAll();
  res.json(diagnosis);
}); //Listar todos

app.post('/diagnoses', async (req, res) => {
  if (JSON.stringify(req.body) == "{}"){
    return res.status(400).json({Error: "Register request body isn't in the correct format"});
  }

  await Diagnosis.create(req.body)
  .then(function(diagnosis){
    return res.status(200).json(diagnosis);
  }).catch(function (err){
    return res.status(500).json({error: "Issue trying insert the record"+err});
  })
}); // Create

app.get('/diagnoses/:id', async (req, res) => {
  await Diagnosis.findByPk(req.params.id)
  .then(function(diagnosis){
    return res.status(200).json(diagnosis);
  }).catch(function(){
    return res.status(500).json({error: "An error has ocurred, please try again later"});
  });
}); //Find

app.put('/diagnoses/:id', async (req, res) => {
  await Diagnosis.update(req.body, {where:{id: req.params.id}})
  .catch(function(){
    return res.status(500).json({error: "An error has ocurred, please try again later"});
  });
  
  await Diagnosis.findByPk(req.params.id)
  .then(function(diagnosis){
    return res.status(200).json(diagnosis);
  }).catch(function(){
    return res.status(500).json({error: "An error has ocurred, please try again later"});
  });
  
}); //Update

app.delete('/diagnoses/:id', (req, res) => {

}); //Deletar


app.listen(3000);
