const mysql = require("mysql");
const conect = require("../Config/Connect");

const productos = (req,res) => {
    /*res.send("get productos")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "SELECT * FROM Productos",
      
      function (error, results, fields) {
        if (error) throw error;
        res.json(results); 
         }
    );
}

const productosid = (req,res) => {
   
   /*res.send("get empleados/:id")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "SELECT pf.id,p.nombre,pf.cantidad,pf.subtotal,pf.creado_por FROM facturas AS f JOIN productos_facturas AS pf ON f.id=pf.factura_id JOIN productos AS p ON p.id=pf.producto_id WHERE f.id= ?",
      [req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json(results); 
         }
    );
}

const proInsert = (req,res) => {
    /*res.send("Post productos")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "INSERT INTO Productos (nombre,precio,creado_por) VALUES (?,?,?)",
      [body.nombre,body.precio,body.creado_por],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se creo el producto" }); 
         }
    );
}

const proUpdate = (req,res) =>{
    /*res.send("Put productos/:id")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "UPDATE Productos SET nombre=?,codigo=?,salario=? WHERE id= ?",
      [body.nombre,body.codigo,body.salario,req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se actualizo el producto" }); 
         }
    );
}

const proDelete = (req,res) => {
   /* res.send("Delete productos/:id")*/
   var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "DELETE FROM productos_facturas WHERE id= ?",
      [req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se borro el producto"}); 
         }
    );
}


module.exports = {
    productosid,
    productos,
    proDelete,
    proInsert,
    proUpdate
}