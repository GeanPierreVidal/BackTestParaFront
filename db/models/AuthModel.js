const ResponseFormat = require("../../core").ResponseFormat;
var moment = require('moment');

// =====================================
// Json Web Token (paquete que permite la generación de jwt)
// URL: https://www.npmjs.com/package/jsonwebtoken
// Instalación: $ sudo npm install jsonwebtoken --save
// =====================================
var jwt = require('jsonwebtoken');
// =====================================
var SEED = require('../../config/config').SEED;

module.exports = function() {
  var methods = {};
  
  /*
   * Metodo: getToken
   * Descripciob: Obtiene el token de usuario
   * Params: @usuario: usuario desde el login
   *         @perfil: pefil desde el login
   */
  methods.getToken = async function(req, res) {
    var data = [];
    let params = req.body;
    let usuarioDB = {
      usuario: params.usuario,
      perfil: params.perfil
    }

    // ***********
    // CREAR TOKEN
    // al ejecutar e imprimir el token lo pegamos en https://jwt.io/, en la caja de texto ENCODED
    // y en la caja de texto VERIFY SIGNATURE la semilla seed en nuetro caso el string "@este-es-un-seed-dificil"
    // de la variable seed
    // en PAYLOAD aparecera todos los datos y en la parte de abajo saldrá Signature Verified.
    var token = jwt.sign({ usuario: usuarioDB }, SEED, { expiresIn: 14400 }); //4 horas


    // ***********

    data = {
      token: token
    }

    return res
            .status(200)
            .json(
              ResponseFormat.build(data, "Operación completada", 200, "success")
            );
  };

  return methods;
};
