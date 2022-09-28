const express = require('express')
const routes = express.Router()
 /* routes.get('/', (req, res)=>{
    res.send('testing a la api')
})  esto se crea para en primera instancia ver la conexion = localhost:9000/api = "testing a la api"*/


// se declara una primera consulta donde se solicita con express consultar directo al servidor
//exportandolo en json
routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=> {
    if(err) return res.send(err)
       conn.query('SELECT * FROM profesores', (err, rows)=> {
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        //console.log(req.body)
        conn.query('INSERT INTO profesores set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Dato profesor Ingresado!')
        })
    })
})
    
routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM profesores WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Dato profesor Eliminado!')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE profesores set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Datos modificado de profesor!')
        })
    })
})

module.exports = routes
