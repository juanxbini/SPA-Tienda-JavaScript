import mysql from 'mysql';

// Configurar la conexión con la base de datos
const connection = mysql.createConnection({
    host: 'localhost', // Cambia esto si tu base de datos está alojada en un servidor diferente
    user: 'root', // Cambia el nombre de usuario si es necesario
    password: 'tu_password', // Cambia la contraseña según tu configuración
    database: 'test', // Cambia el nombre de la base de datos
});

export default connection;