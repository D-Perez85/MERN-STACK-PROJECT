const {Router} = require('express'); 
const { crearCarro, eliminarCarro, borrarProducto, obtenerProductos, addProducto } = require('../../controllers/carrito/carrito.api');
const router = Router(); 

/** Rutas parciales */

router.post('/', crearCarro); 
router.get('/:id/productos', obtenerProductos); 
router.delete('/:id', eliminarCarro); 
router.post('/:id/productos', addProducto); 
router.delete('/:id/productos/:idProducto', borrarProducto);


module.exports = router;