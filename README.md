# PROYECTO FINAL - MERN STACK

Este proyecto representa el desarrollo backend de una aplicación de e-commerce para poder vender productos de un rubro en particular

### User story/brief (puntos a incluir): 

      o	Rutas necesarias que permitan listar los productos existentes, ingresar productos nuevos, borrar y modificar detalles, interactuar con el carrito de compras.
      o	Inplementar una API RESTful con los verbos get, post, put y delete para cumplir con las acciones necesarias.
      o	Debe brindar al frontend un mecanismo de ingreso autorizado al sistema basado en JWT (Json Web Token). 
      o	Los productos ingresados se almacenarán en una base de datos MongoDB. 
      o	El usuario podrá registrar sus credenciales de acceso (email y password) para luego poder ingresar a su cuenta. Estas credenciales serán guardadas en la base de datos MongoDB encriptando la contraseña.
      o	El cliente tendrá una sesión activa de usuario con tiempo de expiración configurable.
      o	Implementar un canal de chat basado en websockets, el cual permita atender las consultas del cliente.
      o	Basar la arquitectura del servidor en capas (MVC).
      o	El servidor podrá tomar configuraciones desde un archivo externo.
      o	Disponer de una vista creada con pug, que permita ver la configuración del servidor.
      o	Por cada registro nuevo de usuario y con cada orden de compra generada se enviará un mail a una casilla configurable.
      o	En caso de detectar algún error, el servidor enviará una vista implementada con ejs, que contenga el id y el detalle completo


>#### Piezas sugeridas:              
             ●	Node.js -  MongoDB
             ●	Passport JWT  -  Mongoose
             ●	Bcrypt  -  Websocket
             ●	Dotenv  -  Handlebars, Pug, Ejs
             ●	Nodemailer



>#### Requisitos base: 
>#### 1) Inicio - Al momento de requerir la ruta base ‘/’:

        ○	  Permitir un menú de ingreso al sistema con email y password así como también la posibilidad de registro de un nuevo usuario.
        ○	  El menú de registro consta del nombre completo del cliente, número telefónico, email y campo de password duplicado para verificar coincidencia.
        ○	  Si un usuario se loguea exitosamente o está en sesión activa, la ruta ‘/’ hará una re dirección a la ruta del carrito /productos 
        ○	  La ruta /productos devolverá el listado de todos los productos disponibles para la compra.
        ○	  La ruta /productos/: categoría devolverá los productos por la categoría requerida.
        ○	  Los ítems podrán ser agregados al carrito de compras y listados a través de la ruta /carrito.
        ○	  Se podrán modificar y borrar por su id a través de la ruta /carrito: id.
        

>#### 2) Flow:

        ○	  Se puede solicitar un producto específico con la ruta /productos/: id, donde id es el id del ítem generado por MongoDB y devolver la descripción del producto (foto, precio, selector de cantidad).        
        ○	  Si se ingresa a /productos/: id y el producto no existe en MongoDB, debemos responder un mensaje adecuado que indique algo relacionado a que el producto no existe.
     
     
>#### 3) MongoDB 
>#### Implementar estas colecciones:
        ○	usuarios: clientes registrados
        ○	productos: catálogo completo
            -	Link para foto (puede almacenarse de modo estático en la página en una subruta /images/:productoid )        ○	  La ruta /productos devolverá el listado de todos los productos disponibles para la compra.
            -	Precio unitario        
            -	Descripción
            -	Categoría
        
        
        ○	mensajes: chat del usuario (preguntas y respuestas)
            -	Email: del usuario que pregunta o al que se responde
            -	Tipo (‘usuario’ para preguntas ó ‘sistema’ para respuestas)
            -	Fecha y hora
            -	Cuerpo del mensaje
            
        ○	carrito: orden temporal de compra
            -	Email
            -	Items con sus cantidades
            -	Fecha y hora
            -	Dirección de entrega
       
        ○	ordenes: las órdenes generadas, que deben incluir los productos, descripciones y los precios al momento de la compra. 
            -	Ítems: las órdenes deben poder tener productos surtidos, cada uno con su cantidad. Por ejemplo: remeras x 2 y gorra x 1
            -	Número de orden: Se extrae de la cantidad de órdenes almacenadas
            -	Fecha y hora
            -	estado ( por defecto en ‘generada’)
            -	Email de quién realizó la orden

   

>#### 3) Fin de Orden
        ○	  Finalizada la orden, enviar un mail a la dirección de mi cuenta con los detalles de la orden.
        ○	  Se dispondrá de un archivo de configuración externo con opciones para desarrollo y otras para producción, que serán visualizadas a través de una vista construida con Handlebars. Como parámetros de configuración estará el puerto de escucha del servidor, la url de la base de datos, el mail que recibirá notificaciones del backend, tiempo de expiración de sesión y los que sea necesario incluir.
        ○	  Vamos a contar con un canal de chat general donde el usuario enviará los mensajes en la ruta /chat y en /chat/: email podrá ver sólo los suyos. Se utilizará la colección mensajes en MongoDB.  La tecnología de comunicación a utilizar será Websockets. El servidor implementará una vista, utilizando Handlebars, para visualizar todos los mensajes y poder responder individualmente a ellos, eligiendo el email de respuesta.



## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.


### Instalación 🔧

### `Clonar` 
Clonar el proyecto utilizando git clone  dentro de tu entorno local para poder obtener el codigo fuente. 
```
git clone https://github.com/D-Perez85/MERN-STACK-PROJECT.git

```
### `Instalar Dependencias`
Instala las dependencias necesarias para poder correr la App...
```
npm install
```
### `Run`
Una vez instaladas las dependencias podras correr la App en el directorio del proyecto con cualquiera de los comandos descriptos. 

```
 nodemon index.js  /   npm run start-dev
```
Una vez compilado podras ver el resultado en http://localhost:8080/

Made with ❤️ by [Damian Perez](https://github.com/D-Perez85) 😊
