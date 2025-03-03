var routerPruebas = require('./rutas/pruebaRouter')
var autentificador = require('./rutas/authRouter')

module.exports = function(app) {
    app.use('/TestFrontEnd', routerPruebas)
    app.use('/Auth', autentificador)
}