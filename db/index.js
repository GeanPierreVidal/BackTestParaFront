let Sequelize = require('sequelize')




let AuthModel = require("./models/AuthModel")();


let BD = {
  AuthModel,

};

//db.sequelize = sequelize;
//db.Sequelize = Sequelize;

module.exports = BD;
