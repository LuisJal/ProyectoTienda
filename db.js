const { MongoClient, ObjectId } = require("mongodb");

// URL de conexión a la base de datos, reemplaza <user> y <password> con tus credenciales
const url = "mongodb://127.0.0.1:27017";

// Función para inicializar la conexión a la base de datos
async function initDatabase() {
  try {
    // Conectar al servidor de MongoDB
    const client = new MongoClient(url);
    await client.connect();
    console.log("Conectado a la base de datos");

    // Obtener la referencia a la base de datos "myTienda"
    const db = client.db("myTienda");

    // Retornar la referencia a la base de datos
    return db;
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  initDatabase,
  ObjectId,
};
