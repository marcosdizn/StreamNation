const Usuario = require("../models/usuario");
const SessionState = require("../models/session-state")


exports.registrarUsuario = async (req, res) => {
    try {

        const usuario = new Usuario(req.body);
        const usuarioDB = await Usuario.find({ nombre: usuario.nombre });

        if (usuarioDB.length == 0) {
            await usuario.save();
            const sessionState = new SessionState({
                userName: usuario.nombre,
                loggedIn: true
            });
            res.json(sessionState).send
        } else
            res.status(409).send('Ya existe el usuario')

    } catch (error) {
        res.status(400).send(error);
    }
}

exports.loginUsuario = async (req, res) => {
    try {
        let usuario = new Usuario(req.body);
        let usuarioDB = await Usuario.find({ nombre: usuario.nombre, contrasena: usuario.contrasena });
        if (usuarioDB.length != 0) {
            const sessionState = new SessionState({
                userName: usuario.nombre,
                loggedIn: true
            })
            res.json(sessionState).send
        } else
            res.status(404).send('Usuario y/o contraseña incorrecto')
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.logoutUsuario = async (req, res) => {
    try {
        let usuario = new SessionState(req.body);
        let usuarioDB = await Usuario.find({ nombre: usuario.userName });
        if (usuarioDB.length != 0) {
            const sessionState = new SessionState({
                userName: "",
                loggedIn: false
            })
            res.json(sessionState).send
        } else
            res.status(404).send('Usuario incorrecto')
    } catch (error) {
        res.status(400).send(error);
    }
}
