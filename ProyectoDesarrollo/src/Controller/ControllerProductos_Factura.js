const mysql = require("mysql");
const conect = require("../Config/Connect");

const productos_factura = (req,res) => {
    /*res.send("get facturas/:id/productos")*/
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

const pfacInsert = (req,res) => {
   // res.send("Post facturas/:id/detalles")
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "INSERT INTO productos_facturas (producto_id,factura_id,cantidad,subtotal,creado_por) VALUES (?,?,?,?,?)",
      [body.productos_id,body.factura_id,body.subtotal,body.creado_por,req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se creo un producto" }); 
         }
    );
}

const pfacDelete = (req,res) => {
    //res.send("Delete facturas/:id/detalle")
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
    productos_factura,
    pfacDelete,
    pfacInsert
    
}