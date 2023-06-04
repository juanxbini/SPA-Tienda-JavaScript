import mysql from 'mysql';

// Configurar la conexión con la base de datos
const connection = mysql.createConnection({
    host: 'localhost', // Cambia esto si tu base de datos está alojada en un servidor diferente
    user: 'root', // Cambia el nombre de usuario si es necesario
    password: 'juanbini', // Cambia la contraseña según tu configuración
    database: 'test', // Cambia el nombre de la base de datos
});


// Verificar la conexión a la base de datos
connection.connect((error) => {
    if (error) {
      console.error('Error al conectar a la base de datos:', error);
      throw error; // Lanza el error para que sea manejado en un nivel superior
    }
    console.log('Conexión exitosa a la base de datos');
  });
  
export default connection;