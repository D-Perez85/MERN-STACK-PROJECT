const {Router} = require('express'); 
const { crearProducto, obtenerProductos, editarProducto, eliminarProducto } = require('../../controllers/productos/productos.api');
const router = Router(); 

/** Rutas parciales */

router.get('/:id?', obtenerProductos);
router.post('/', crearProducto); 
router.put('/:id', editarProducto); 
router.delete('/:id', eliminarProducto); 

module.exports = router;
