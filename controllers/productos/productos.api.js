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
	if (req.params.id == undefined) return res.send(productos.obtener());
	const id = Number(req.params.id);
	const producto = productos.obtenerPorID(id);
	if (!producto) return res.status(404).send({ message: `El ID ${id} no existe` });
	res.status(200).json(producto); 
}
//Editar un producto
const editarProducto = (req, res) => {
	const id = Number(req.params.id);
	if (id < 0 || id > productos.objetos.length) return res.status(400).send({ message: `El ID ${id} no existe` });
	if (isNaN(id)) return res.status(400).send({ message: `El ID ${id} no existe` });
	productos.editar(id, req.body);
	res.status(200).json(`Producto editado`); 
}
//Eliminar un producto
const eliminarProducto = (req, res) => {
    res.status(200).json(`Producto eliminado`); 
}

module.exports = {crearProducto, obtenerProductos, editarProducto, eliminarProducto};