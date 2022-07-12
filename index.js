require('dotenv').config()

const mongoose = require('mongoose');
const app = require('./app');
const registroAdmin = require('./src/controllers/usuario.controller')


// BASE DE DATOS 
mongoose.Promise = global.Promise;                                                                
mongoose.connect(process.env.DATABASE_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Se encuentra conectado a la base de datos.");

    app.listen(process.env.PORT || 3000, function () {
        console.log('El servidor corre sin problemas')
    })

    registroAdmin.registrarAdmin();


}).catch(error => console.log(error));


