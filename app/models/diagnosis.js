module.exports = (sequelize, DataTypes) => {
  const Diagnosis = sequelize.define('Diagnosis', {
    name: DataTypes.STRING,
  });

  return Diagnosis;
} 
 