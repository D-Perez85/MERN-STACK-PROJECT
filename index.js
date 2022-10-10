/** Express config */
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const apiRoutes = require('./routers/app.router');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', apiRoutes); 

/** Conexion a Server */
const connectedServer = app.listen(PORT, () => console.log(`Servidor activo y escuchando en el puerto ${PORT}`));
connectedServer.on(`error`, (error) => console.log(error.message));