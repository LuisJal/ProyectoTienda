const express = require("express");
const hbs = require("hbs");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./db");
const ObjectId = db.ObjectId;
const app = express();

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "./views")));

app.use(
  express.static(__dirname + "/amigos", {
    setHeaders: function (res, path, stat) {
      if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/eliminacion/:id", async (req, res) => {
  const database = await db.initDatabase();
  const collection = database.collection("articulos");
  const id = req.params.id;
  console.log(id);
  await collection.deleteOne({ _id: new ObjectId(id) });
  console.log(`Artículo eliminado con éxito: ${id}`);
  res.redirect("/consulta");
});

app.get("/eliminacion", async (req, res) => {
  const database = await db.initDatabase();
  const collection = database.collection("articulos");
  const articulos = await collection.find().toArray();
  res.render("eliminacion", { articulos });
});

app.get("/", async (req, res) => {
  const database = await db.initDatabase();
  const collection = database.collection("articulos");
  const articulos = await collection.find().toArray();
  res.render("index", { articulos });
});

app.post("/alta", async (req, res) => {
  const database = await db.initDatabase();
  const collection = database.collection("articulos");
  const articulo = {
    descripcion: req.body.descripcion,
    precio: req.body.precio,
  };
  await collection.insertOne(articulo);
  console.log(`Artículo agregado con éxito: ${articulo.descripcion}`);
  res.redirect("/");
});

app.get("/alta", (req, res) => {
  res.render("alta");
});

app.get("/consulta", async (req, res) => {
  const database = await db.initDatabase();
  const collection = database.collection("articulos");
  const articulos = await collection.find().toArray();
  res.render("consulta", { articulos });
});

app.get("/modificacion", async (req, res) => {
  const database = await db.initDatabase();
  const collection = database.collection("articulos");
  const articulos = await collection.find().toArray();
  res.render("modificacion", { articulos });
});

app.post("/modificacion/:id", async (req, res) => {
  const database = await db.initDatabase();
  const collection = database.collection("articulos");
  const id = req.params.id;
  const articulo = {
    descripcion: req.body.descripcion,
    precio: req.body.precio,
  };
  await collection.updateOne({ _id: new ObjectId(id) }, { $set: articulo });
  console.log(`Artículo editado con éxito: ${id}`);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Servidor iniciado en http://localhost:3000");
});
