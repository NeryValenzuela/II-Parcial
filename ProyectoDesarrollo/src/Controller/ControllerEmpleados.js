const mysql = require("mysql");
const conect = require("../Config/Connect");

const empleados = (req,res) => {
    /*res.send("get empleados")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "SELECT * FROM empleados",
      
      function (error, results, fields) {
        if (error) throw error;
        res.json(results); 
         }
    );
}

const empleadosid = (req,res) => {
    res.send("get empleados/:id")  
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "SELECT * FROM empleados WHERE id= ?",
      [req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json(results); 
         }
    );
}

const empInsert = (req,res) => {
    /*res.send("Post empleados")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "INSERT INTO empleados (nombre,codigo,salario,creado_por) VALUES (?,?,?,?)",
      [body.nombre,body.codigo,body.salario,body.creado_por],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se creo un empleado" }); 
         }
    );
}

const empUpdate = (req,res) =>{
    /*res.send("Put empleados/:id")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "UPDATE empleados SET nombre=?,codigo=?,salario=? WHERE id= ?",
      [body.nombre,body.codigo,body.salario,req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se actualizo el empleado" }); 
         }
    );
}

const empDelete = (req,res) => {
   /*res.send("Delete empleados/:id")*/
    var body = req.body;
    var connection = mysql.createConnection(conect.Connect);
      connection.connect();
      connection.query(
      "DELETE FROM empleados WHERE id= ?",
      [req.params.id],
      function (error, results, fields) {
        if (error) throw error;
        res.json({ Mensaje: "Se borro el empleado"}); 
         }
    );
}


module.exports = {
    empleadosid,
    empleados,
    empDelete,
    empInsert,
    empUpdate
}