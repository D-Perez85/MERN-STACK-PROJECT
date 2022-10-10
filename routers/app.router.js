const express = require('express');
const productosRoutes = require('./productos/productos');
const carritoRoutes = require('./carrito/carrito'); 

const router = express.Router();
router.use('/productos', productosRoutes);
router.use('/carrito', carritoRoutes)

module.exports = router;