// se crea npm init -y luego crear server.js
// npm i nodemon --save-dev  = para facilitar las actualizaciones mientras se programa
/*  luego de instalar eso modificar package.json =  "start": "nodemon server.js"  
                                                     "main": "server.js", */
// ejecutar node server.js

// se crea la constante para conexión
const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')
// la que fue exportada desde routes
const routes = require('./routes')

const app = express()
// podemos setear para que de este lado la modificamos y no en cada archivo que requiera de la conexion
// es en caso que el proyecto creciera
app.set('port', process.env.PORT || 9000)

// creacion de la constante con los datos de la base de datos
const dbOptions = {
    host: '127.0.0.1',
    port: 3307,
    user: 'hanz2',
    password: 'hanz12345',
    database: 'proyecttesting1'
}
//midlewares----
app.use(myconn (mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

// routes------
app.get('/', (req, res)=>{
    res.send('bienvenido a la api creada')
})

// se suma esta ruta para tomar las consultas a la bd
app.use('/api', routes)



// ver en pagina si conecta se vera por consola
// server runing -----
app.listen(app.get('port'), ()=>{
    console.log('server runnint en puerto', app.get('port'))
}
)

/* ya con script realizado ejecutar en consola
npm run start
ver en localhost:9000 = "bienvenido api creada"
npm i mysql express-myconnection
*/


