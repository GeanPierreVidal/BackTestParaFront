var jwt = require('jsonwebtoken');
// obtenemos la variable seed del archivo config
var SEED = require('../config/config').SEED;
const ResponseFormat = require("../core").ResponseFormat;
const operationsJson = require("../core").operationsJson;

// ===================================
// MIDDLEWARE VERIFICAR TOKEN
// ===================================

exports.verificaToken = function(req, res, next) {

    var token = req.headers['x-access-token'] || req.headers['authorization'];
    if(token==null|| token==undefined||token==''){
        return res.status(401).json({
            ok: false,
            mensaje: 'Token inválido'
        });
    }
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    // var token = req.query.token;

    jwt.verify(token, SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                mensaje: 'Token inválido',
                errors: err
            });
        }
        
        req.usuario = decoded.usuario;
        //return false;
        next();
        //return res.status(200).json({
        //    ok: true,
        //    decoded: decoded
        //});
    });
}

// ===================================