const Empleados = require("../models/empleados");

//Crea un empleado de una empresa
exports.crearEmpleado = async(req, res) => {


    try {

        //crea el nuevo usuario
        empleado = new Empleados(req.body);

        //guardar el usuario
        await empleado.save();

        //Mensaje de confirmación
        res.status(200).json({ ok: true, msg: 'Se agrego un nuevo empleado', empleado });


    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}