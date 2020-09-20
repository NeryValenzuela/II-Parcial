const mysql = require("mysql");
const conect = require("../Config/Connect");

const facturas = (req, res) => {
  /* res.send("get clientes/:id/facturas")*/
  var body = req.body;
  var connection = mysql.createConnection(conect.Connect);
  connection.connect();
  connection.query(
    "SELECT f.id,DATE_FORMAT(f.creado, '%d/%m/%Y') as creado,SUM(pf.subtotal) AS total,e.nombre AS empleado,f.estado FROM facturas AS f JOIN productos_facturas AS pf ON f.id=pf.factura_id JOIN productos AS p ON p.id=pf.producto_id JOIN empleados AS e ON e.id=f.empleado_id where f.cliente_id = ? group by f.id,f.creado,e.nombre, f.estado",
    [req.params.id],
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
};

const facturasem = (req, res) => {
  /*res.send("get empleados/:id/facturas")  */
  var body = req.body;
  var connection = mysql.createConnection(conect.Connect);
  connection.connect();
  connection.query(
    "SELECT * FROM facturas WHERE empleado_id= ?",
    [req.params.id],
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
};

const facturasid = (req, res) => {
  /*res.send("get facturas/:id")  */
  var body = req.body;
  var connection = mysql.createConnection(conect.Connect);
  connection.connect();
  connection.query(
    "SELECT * FROM facturas WHERE id= ?",
    [req.params.id],
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
};

const facInsert = (req, res) => {
  /*res.send("Post facturas")*/
  var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "INSERT INTO facturas (cliente_id,empleado_id,creado,estado) VALUES (?,?,CURDATE(),?)",
      [body.cliente_id,body.empleado_id,body.creado,body.estado],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se creo una factura" }); 
         }
    );
};

const facUpdate = (req, res) => {
  /*res.send("Put facturas/:id")*/
  var body = req.body;
  var connection = mysql.createConnection(conect.Connect);
    connection.connect();
    connection.query(
    "UPDATE facturas SET cliente_id=?,empleado_id=? WHERE id= ?",
    [body.cliente_id,body.empleado_id,req.params.id],
    function (error, results, fields) {
      if (error) throw error;
      res.json({ Mensaje: "Se actualizo el empleado" }); 
       }
  );
};

const facturaspat = (req, res) => {
  /*  res.send("patch facturas/:id")  */
  var body = req.body;
  var connection = mysql.createConnection(conect.Connect);
    connection.connect();
    connection.query(
    "UPDATE facturas SET estado=? WHERE id= ?",
    [body.estado,req.params.id],
    function (error, results, fields) {
      if (error) throw error;
      res.json({ Mensaje: "actualizado" }); 
       }
  );
};

const facDelete = (req, res) => {
  /* res.send("Delete facturas/:id")*/
  var body = req.body;
  var connection = mysql.createConnection(conect.Connect);
    connection.connect();
    connection.query(
    "UPDATE facturas SET estado='ANULADA' WHERE id= ?",
    [req.params.id],
    function (error, results, fields) {
      if (error) throw error;
      res.json({ Mensaje: "Se borro la factura"}); 
       }
  );
};

module.exports = {
  facturas,
  facturasem,
  facturasid,
  facDelete,
  facInsert,
  facturaspat,
  facUpdate,
};
