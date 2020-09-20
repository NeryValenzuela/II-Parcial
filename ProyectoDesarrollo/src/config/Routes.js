const express = require('express')
const ControllerUser = require('../controller/ControllerUser')
const ControllerClientes = require('../controller/ControllerClientes')
const ControllerEmpleados = require('../controller/ControllerEmpleados')
const ControllerProductos = require('../controller/ControllerProductos')
const ControllerFacturas = require('../controller/ControllerFacturas')
const ControllerProductos_Factura = require('../controller/ControllerProductos_Factura')
const jwt = require('jsonwebtoken')

const acces = (req,res,next) => {
    let token = req.headers["access-token"]
    
    if ( typeof token === 'undefined'){
        res.send("sin acceso") 
        return next ()
    }
    else {
        const divid = token.split(" ")
        if (typeof divid [0] !== 'undefined' && typeof divid [1] !== 'undefined'){
            jwt.verify(divid[1],'nery',(err,data)=>{
                if (err){
                    res.send("Sin acceso")
                }
                else {
                    return next () 
                }
            })
        }
    }
}
var Routes = express.Router()

Routes.post('/login',ControllerUser.Login)

Routes.get('/clientes',acces,ControllerClientes.clientes)
Routes.get('/clientes/:id',acces,ControllerClientes.clientesid)
Routes.post('/clientes',acces, ControllerClientes.CliInsert)
Routes.put('/clientes/:id',acces, ControllerClientes.CliUpdate)
Routes.delete('/clientes/:id',acces,ControllerClientes.CliDelete)

Routes.get('/empleados',acces,ControllerEmpleados.empleados)
Routes.get('/empleados/:id',acces,ControllerEmpleados.empleadosid)
Routes.post('/empleados',acces, ControllerEmpleados.empInsert)
Routes.put('/empleados/:id',acces, ControllerEmpleados.empUpdate)
Routes.delete('/empleados/:id',acces,ControllerEmpleados.empDelete)

Routes.get('/productos',acces,ControllerProductos.productos)
Routes.get('/productos/:id',acces,ControllerProductos.productosid)
Routes.post('/productos',acces, ControllerProductos.proInsert)
Routes.put('/productos/:id', acces,ControllerProductos.proUpdate)
Routes.delete('/productos/:id',acces,ControllerProductos.proDelete)

Routes.get('/clientes/:id/facturas',acces,ControllerFacturas.facturas)
Routes.get('/empleados/:id/facturas',acces,ControllerFacturas.facturasem)
Routes.get('/facturas/:id',acces,ControllerFacturas.facturasid)
Routes.post('/facturas', acces,ControllerFacturas.facInsert)
Routes.put('/facturas/:id', acces,ControllerFacturas.facUpdate)
Routes.patch('/facturas/:id',acces,ControllerFacturas.facturaspat)
Routes.delete('/facturas/:id',acces,ControllerFacturas.facDelete)

Routes.get('/facturas/:id/productos',acces,ControllerProductos_Factura.productos_factura)
Routes.post('/facturas/:id/detalle',acces,ControllerProductos_Factura.pfacInsert)
Routes.delete('/facturas/:id/detalle',acces,ControllerProductos_Factura.pfacDelete)

module.exports = {
    Routes
}

