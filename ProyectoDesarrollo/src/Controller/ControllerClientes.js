const mysql = require("mysql");
const conect = require("../Config/Connect");

const clientes = (req,res) => {
    /*res.send("get clientes")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "SELECT * FROM clientes",
      
      function (error, results, fields) {
        if (error) throw error;
        res.json(results); 
         }
    );
}

const clientesid = (req,res) => {
    /*res.send("get clientes/:id")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "SELECT * FROM clientes WHERE id= ?",
      [req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json(results); 
         }
    );
  }

const CliInsert = (req,res) => {
   /* res.send("Post clientes")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "INSERT INTO clientes (nombre,direccion,nit,creado_por) VALUES (?,?,?,?)",
      [body.nombre,body.direccion,body.nit,body.creado_por],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se creo un cliente" }); 
         }
    );
}

const CliUpdate = (req,res) =>{
   /* res.send("Put clientes/:id")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "UPDATE clientes SET nombre=?,direccion=?,nit=? WHERE id= ?",
      [body.nombre,body.direccion,body.nit,req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se actualizo el cliente" }); 
         }
    );
}

const CliDelete = (req,res) => {
    /*res.send("Delete clientes/:id")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "DELETE FROM clientes WHERE id= ?",
      [req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se borro el cliente"}); 
         }
    );
}


module.exports = {
    clientesid,
    clientes,
    CliDelete,
    CliInsert,
    CliUpdate
}