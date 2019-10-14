const { Diagnosis } = require('../models');

module.exports = {
  async getAll(req, res){
    const diagnosis = await Diagnosis.findAll();
    res.json(diagnosis);
  },

  async store(req, res){
    if (JSON.stringify(req.body) == "{}"){
      return res.status(400).json({Error: "Register request body isn't in the correct format."});
    }
    await Diagnosis.create(req.body)
    .then(function(diagnosis){
      return res.status(200).json(diagnosis);
    }).catch(function (err){
      return res.status(500).json({error: "Issue trying insert the record "+err});
    })
  },

  async index(req, res){
    await Diagnosis.findByPk(req.params.id)
    .then(function(diagnosis){
      return res.status(200).json(diagnosis);
    }).catch(function(){
      return res.status(500).json({error: "An error has ocurred, please try again later."});
    });
  },

  async update(req, res){
    await Diagnosis.update(req.body, {where:{id: req.params.id}})
    .catch(function(){
      return res.status(500).json({error: "An error has ocurred, please try again later."});
    });
  
    await Diagnosis.findByPk(req.params.id)
    .then(function(diagnosis){
      return res.status(200).json(diagnosis);
    }).catch(function(){
      return res.status(500).json({error: "An error has ocurred, please try again later."});
    });
  },

  async delete(req, res){
    await Diagnosis.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(qtdElemDeleted){
      if (qtdElemDeleted > 0)
        return res.status(200).json({message: qtdElemDeleted + " record(s) deleted."})
      
      return res.status(200).json({message: "No records found."})
    }).catch(function(){
      return res.status(500).json({error: "An error has ocurred, please try again later."});
    });
  }
}
