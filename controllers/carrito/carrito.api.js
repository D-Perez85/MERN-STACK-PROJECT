const Contenedor = require('../../models/productos');
const ordenes =  new Contenedor('./data/ordenes.json');

//Crear Carro de compras
const crearCarro = (req, res) => {
    const productos = req.body;
	if (!productos) return ordenes.guardar([]);
	ordenes.guardar(productos);
    res.status(201).json({message: `CARRO creado exitosamente`}); 
}

//Borrar un producto de un carro
const eliminarCarro = (req, res) => {
    const id = Number(req.params.id);
	if (isNaN(id)) return res.status(400).send({ message: 'Ingresa el ID de la orden que desea eliminar' });
	const ordenSeleccionada= ordenes.eliminar(id);
	if (ordenSeleccionada=== -1) return res.status(404).json({ message: `El ID ${id} no existe` });
    res.status(200).json({message: `CARRO eliminado exitosamente`}); 
}
//Obtener todos los productos de un carro especifico
const obtenerProductos = (req, res) => {
    res.status(200).json({message: `ORDEN de productos BY ID`}); 
}

//Agregar un producto a un carro
const addProducto = (req, res) => {
	res.status(201).json({message: `PRODUCTO agregado al carro exitosamente`})
}

//Eliminar un carro
const borrarProducto = (req, res) => {
    res.status(200).json({message: `PRODUCTO eliminado del carro exitosamente`})
}

module.exports = { crearCarro, obtenerProductos, eliminarCarro, addProducto, borrarProducto};