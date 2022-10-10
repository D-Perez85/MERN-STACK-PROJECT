const {Router} = require('express'); 
const { crearCarro, eliminarCarro, borrarProducto, obtenerProductos, addProducto } = require('../../controllers/carrito/carrito.api');
const router = Router(); 

/** Rutas iniciales */

router.post('/', crearCarro); 
router.delete('/:id', eliminarCarro);
router.get('/:id/productos', obtenerProductos);
router.post('/:id/productos', addProducto); 
router.delete('/:id/productos/:id', borrarProducto);

module.exports = router;