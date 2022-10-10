const fs = require('fs');

class Contenedor {
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
        this.objetos = this.readData();

    }

    //Guarda un objeto
    async guardar(objeto) {
        try {
            objeto.id = await this.nuevoId();
            objeto.timestamp = Date.now();
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
       // TO DO
    }

    //Devuelve el objeto con el ID solicitado
    obtenerPorID(id) {
        // TO DO
    }

    //Edita el objeto deseado con el ID solicitado
    editar() {
            // TO DO 
    }

    //Elimina el objeto deseado con el ID solicitado
    eliminar() {
            // TO DO 
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
}

module.exports = Contenedor;