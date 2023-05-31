// api/server.js

import express from 'express';


// Crea una instancia de Express
const app = express();
// Configura el puerto
const port = 3000;

// Configura las rutas
// ...


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});



