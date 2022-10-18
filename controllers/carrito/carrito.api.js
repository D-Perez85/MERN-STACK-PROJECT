const Contenedor = require('../../models/carrito');
const { productos } = require('../productos/productos.api');
const ordenes =  new Contenedor('./data/ordenes.json');

//Crear Carro de compras
const crearCarro = (req, res) => {
    const productos = req.body;
	ordenes.guardar(productos);
    res.status(201).json({message: `CARRO creado exitosamente`}); 
}
//Borrar un carro
const eliminarCarro = (req, res) => {
    const id = Number(req.params.id);
	if (isNaN(id)) return res.status(400).send({ message: `Ingresa el ID de la orden que desea eliminar`});
	const ordenSeleccionada= ordenes.eliminar(id);
	if (ordenSeleccionada=== -1) return res.status(404).json({ message: `El ID ${id} no existe` });
    res.status(200).json({message: `CARRO eliminado exitosamente`}); 
}
//Obtener todos los productos de un carro especifico
const obtenerProductos = (req, res) => {
	if (req.params.id == undefined) return res.send(ordenes.obtener());
	const id = Number(req.params.id);
	if (isNaN(id)) return res.status(400).send({ message: `Ingresa el ID de una orden existente` });
	const ordenSeleccionada = ordenes.obtenerPorID(id);
	if (ordenSeleccionada == null) return res.status(404).send({ message: `Ingresa el ID de una orden existente` });
    res.json({ 'Orden': ordenSeleccionada});
}

//Agregar un producto a un carro
const addProducto = (req, res) => {
    const idCartSelected = Number(req.params.id);
	if (isNaN(idCartSelected)) return res.status(400).send({ message: 'Ingresa un valor numerico para listar el ID de un carrito' });
	const idProduct = req.body.id;
	ordenes.saveProduct(idCartSelected, idProduct);
	const producto = productos.obtenerPorID(idProduct);
	res.status(201).json({message: `PRODUCTO agregado al carro exitosamente`, producto})
}

//Eliminar un producto del carro
const borrarProducto = (req, res) => {
	const idCartSelected = Number(req.params.id);
	const idProduct = Number(req.params.idProducto);
	ordenes.deleteProduct(idCartSelected, idProduct);
	const producto = productos.obtenerPorID(idProduct);
	res.status(201).json({message: `PRODUCTO eliminado del carro exitosamente`, producto})
}
module.exports = { crearCarro, obtenerProductos, eliminarCarro, addProducto, borrarProducto};


