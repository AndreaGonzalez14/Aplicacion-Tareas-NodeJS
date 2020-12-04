const fs = require('fs');

let tareasPorHacer = [];

const guardarDatos = () => {
    let data = JSON.stringify(tareasPorHacer)
    fs.writeFile('./modelo/data.json', data, (err) => {
        if (err) {
            throw new Error('No se ha podido guardar la data')
        }
    })
}

//Funcion para leer si existen datos en data.json y no se vayan reemplazando
const leerDatos = () => {
    try {
        tareasPorHacer = require('../modelo/data.json');
    } catch (err) {
        tareasPorHacer = []
    }

}

const crear = (descripcion) => {
    leerDatos();
    let tarea = {
        descripcion,
        completado: false
    }
    tareasPorHacer.push(tarea);
    guardarDatos();
    return tarea;
}

//Listar las tarear
const getlistar = () => {
    leerDatos();
    return tareasPorHacer;
}

//Actualizar las tareas
const actualizar = (descripcion, completado = true) => {
    leerDatos();
    let indice = tareasPorHacer.findIndex(tarea => tarea.descripcion == descripcion);
    if (indice >= 0) {
        tareasPorHacer[indice].completado = completado;
        guardarDatos();
        return true;
    }
    return false;
}

//Eliminar tarea

const eliminar = (descripcion) => {
    leerDatos();
    let nuevolistado = tareasPorHacer.filter(tarea => tarea.descripcion != descripcion);
    if (nuevolistado.length === tareasPorHacer.length) {
        return false;
    }
    tareasPorHacer = nuevolistado
    guardarDatos();
    return true

}
module.exports = {
    crear,
    getlistar,
    actualizar,
    eliminar
}