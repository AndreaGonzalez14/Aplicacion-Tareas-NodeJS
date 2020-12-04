const argv = require('./config/yargs').argv;
const tareas = require('./controlador/tareas');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log("----------------------------");
        console.log("----TAREAS POR HACER-----");
        console.log("----------------------------");
        let lista = tareas.getlistar();
        for (let tarea of lista) {
            if (tarea.completado == true) {
                var color = colors.green

            } else {
                color = colors.red
            }
            console.log(color(`Descripcion: ${tarea.descripcion}`));
            console.log(color(`Completado: ${tarea.completado}`));
            console.log("---------------");

        }
        break;
    case 'actualizar':
        let respuesta1 = tareas.actualizar(argv.descripcion, argv.completado);
        if (respuesta1 == true) {
            console.log("Actualizacion exitosa".green);
        } else {
            console.log("Error en la actualizacion".red);
        }
        break;
    case 'eliminar':
        let respuesta = tareas.eliminar(argv.descripcion);
        if (respuesta == true) {
            console.log("Eliminacion exitosa".green);
        } else {
            console.log("Error en la eliminacion".red);
        }
        break;
    default:
        console.log("Comando no reconocido");
        break;
}