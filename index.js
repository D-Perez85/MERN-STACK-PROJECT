/** Express config */
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

/** Rutas iniciales */
app.get('/api/productos', (req, res)=>{
    res.status(200).json(`GET ALL Success`); 
})

app.get('/api/productos/:id', (req, res)=>{
    res.status(200).json(`GET BY ID Success`); 
})

app.post('/api/productos', (req, res)=>{
    res.status(200).json(`POST Success`); 
})

app.put('/api/productos/:id', (req, res)=>{
    res.status(200).json(`PUT Success`); 
})

app.delete('/api/productos/:id', (req, res)=>{
    res.status(200).json(`DELETE Success`); 
})

/** Conexion a Server */
const connectedServer = app.listen(PORT, () => console.log(`Servidor activo y escuchando en el puerto ${PORT}`));
connectedServer.on(`error`, (error) => console.log(error.message));