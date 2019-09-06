'use strict';

const modelo_citas = require('./citas.model');

module.exports.registrar = function (req, res) {
    let nueva_cita = new modelo_citas(
        {
            primer_nombre : req.body.primer_nombre,
            segundo_nombre : req.body.segundo_nombre,
            primer_apellido : req.body.primer_apellido,
            segundo_apellido : req.body.segundo_apellido,
            fecha_cita : req.body.fecha_cita,
            motivo_cita : req.body.motivo_cita,
            nombre_completo_del_alumno : req.body.nombre_completo_del_alumno,
            estado : 'Activo'
        }
    );
    nueva_cita.save(
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo registrar la cita' });
            } else {
                res.json({ success: true, msg: 'Cita registrada exitosamente' });
            }
        }
    );
};

module.exports.listar = function (req, res) {
    modelo_citas.find().then(
        function (citas) {
            if (citas.length > 0) {
                res.json({ success: true, lista_citas: citas });
            } else {
                res.json({ success: false, lista_citas: citas });
            }
        }

    );
};


module.exports.buscar_por_id = function (req, res) {
    modelo_citas.find({ _id: req.body.id_cita }).then(
        function (cita) {
            if (cita) {
                res.json({ success: true, cita : cita });
            } else {
                res.json({ success: false, cita : cita });
            }
        }

    );

};

module.exports.actualizar = function (req, res) {
    console.log(req.body.id);
    modelo_citas.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo actualizar la cita' });
            } else {
                res.json({ success: true, msg: 'Cita se actualizó con éxito' });
            }
        }

    );
}




















