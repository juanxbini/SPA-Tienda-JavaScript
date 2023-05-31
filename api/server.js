// api/server.js

import express from 'express';
import mysql from 'mysql';

// Crea una instancia de Express
const app = express();
// Configura el puerto
const port = 3000;

// Configura las rutas
// ...


// Configurar la conexión con la base de datos
const connection = mysql.createConnection({
    host: 'localhost', // Cambia esto si tu base de datos está alojada en un servidor diferente
    user: 'root', // Cambia el nombre de usuario si es necesario
    password: 'tu_password', // Cambia la contraseña según tu configuración
    database: 'test', // Cambia el nombre de la base de datos
});

// Conectar a la base de datos
connection.connect((error) => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});
// Cierra la conexión cuando el servidor se detiene
process.on('SIGINT', () => {
    connection.end();
    process.exit();
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});


