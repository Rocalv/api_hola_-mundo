const http = require('http');                   // Modulo que permite gestionar el protocolo http

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {                            // Funcion creada. Se va a ejecutar cada vez que haya
    res.statusCode = 200;                                                   // una peticion al puerto de escucha
    res.setHeader('Content-Type', 'application/json');
    res.end('{ "mensaje": "Hola Mundo!!"}');
});

server.listen(port, hostname, () => {                                       // Pone a "escuchar" en el puerto y hostname indicado
    console.log(`Server running at http://${hostname}:${port}/`);           // el servicio http creado
});


/* 1. Probar ejecucion:
   Puede abrirse el link creado e indicado por consola en el navegador
   o ingresarla en Postman: GET > http://127.0.0.1:3000/ > Send 
   
   2. Publicar en Github */

