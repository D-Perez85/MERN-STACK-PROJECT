const fs = require('fs');
const {productos} = require('../controllers/productos/productos.api');

class ContenedorCarrito {
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
        this.objetos = this.readData();
    }

    //Guarda un objeto
    async guardar(objeto) {
        try {
            objeto.id = await this.nuevoId();
            objeto.timestamp = Date.now();
            objeto.productos = [];
            this.objetos.push(objeto);
            this.writeData();
            return objeto.id;
        } catch (err) {
            console.log(err);
        }
    }
    //Genera un ID
    nuevoId() {
        try {
            if (this.objetos.length === 0) return 1;
            return this.objetos[this.objetos.length - 1].id + 1;
        } catch (err) {
            console.log(err);
        }
    }
    //Devuelve los objetos del archivo en un arreglo
    obtener() {
        try {
            return this.objetos;
        } catch {
            return [];
        }
    }
    //Devuelve el objeto con el ID solicitado
    obtenerPorID(id) {
        try {
            const objeto = this.objetos.find(objetoActual => objetoActual.id === id);
            return objeto ? objeto : null;
        } catch (err) {
            console.log(err);
        }
    }
    //Edita el objeto deseado con el ID solicitado
    editar(id, data) {
        const objetoAEditar = this.obtenerPorID(id);
        const index = this.objetos.findIndex(objetoActual => objetoActual.id === objetoAEditar.id);
        this.objetos[index] = {
            ...this.objetos[index],
            ...data
        };
        this.writeData();
    }
    //Elimina el objeto deseado con el ID solicitado
    eliminar(id) {
        try {
            let indexObj = this.objetos.findIndex(obj => obj.id === id);
            if (indexObj === -1) return indexObj;
            this.objetos.splice(indexObj, 1);
            this.writeData();
        } catch (err) {
            console.log(err);
        }
    }

    readData() {
        try {
            return JSON.parse(fs.readFileSync(this.nombreArchivo, 'utf-8'));
        } catch (error) {
            console.log(error);
            if (error.message.includes('no such file or directory')) return [];
        }
    }

    async writeData() {
        await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(this.objetos, null, 2));
    }
    //Guarda un producto en un carrito
    saveProduct = (idCarrito, idProducto) => {
        let producto = productos.obtenerPorID(idProducto);
        let carrito = this.obtenerPorID(idCarrito);
        carrito.productos.push(producto);
        this.writeData();
        return idProducto;
    };

}

module.exports = ContenedorCarrito;