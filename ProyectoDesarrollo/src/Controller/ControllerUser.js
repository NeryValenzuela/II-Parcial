const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const conect = require("../Config/Connect");
const Login = (req, res) => {
  var body = req.body;
  var connection = mysql.createConnection(conect.Connect);

  connection.connect();

  connection.query(
    "SELECT * FROM usuarios WHERE nombre= ?",
    [body.nombre],
    function (error, results, fields) {
      if (error) throw error;
      if (body.password == results[0].password) {
        connection.end();
        let token = jwt.sign({ body }, "nery");
        res.json({ token });
      } else {
        connection.end();
        res.json({ Mensaje: "Sin autorizacion" });
      }
    }
  );
};

module.exports = {
  Login,
};
