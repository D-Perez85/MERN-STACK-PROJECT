const Contenedor = require('../../models/productos');
const productos =  new Contenedor('./data/products.json')

//Crear Producto
const crearProducto = (req, res) => {
	const { nombre, descripcion, codigo, foto, precio, stock } = req.body;
	productos.guardar({ nombre, descripcion, codigo, foto, precio, stock });
	res.status(201).json(`Producto creado`); 
}

//Obtener uno o todos los productos
const obtenerProductos = (req, res) => {
	res.status(200).json(`Lista de Productos / Producto by ID...`); 
}

//Editar un producto
const editarProducto = (req, res) => {
	res.status(200).json(`Producto editado`); 
}

//Eliminar un producto
const eliminarProducto = (req, res) => {
    res.status(200).json(`Producto eliminado`); 

}

module.exports = {crearProducto, obtenerProductos, editarProducto, eliminarProducto};