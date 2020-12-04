const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Descripcion de la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('listar', 'Listar una tarea')
    .command('actualizar', 'Actualizar una tarea', {
        descripcion,
        completado
    })
    .command('eliminar', 'Eliminar una tarea', {
        descripcion
    })
    .argv;

module.exports = {
    argv
}