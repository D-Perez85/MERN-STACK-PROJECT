const Contenedor = require('../../models/productos');

//Crear Producto
const crearProducto = (req, res) => {
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