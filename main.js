
const turnos = []


let paciente = {}


function obtenerDatosPaciente() {
  paciente.nombre = prompt("Ingrese el nombre del paciente:");
  paciente.apellido = prompt("Ingrese el apellido del paciente:");
  paciente.documento = prompt("Ingrese el número de documento del paciente:");
  paciente.obraSocial = prompt("Ingrese el nombre de la obra social (si corresponde):");
  if (paciente.obraSocial === "") {
    paciente.obraSocial = "Sin obra social";
  }
}

function agregarTurno() {
  let especialidad = prompt("Ingrese la especialidad del médico:");
  let diaTurno = prompt("Ingrese el día del turno:");
  let horaTurno = prompt("Ingrese la hora del turno:");
  let turno = {
    paciente: paciente,
    especialidad: especialidad,
    diaTurno: diaTurno,
    horaTurno: horaTurno
  };
  turnos.push(turno);
  prompt("Turno agregado con éxito.");
}


function mostrarTurnos() {
  prompt("Turnos:");
  for (let i = 0; i < turnos.length; i++) {
    prompt(`${i+1}. ${turnos[i].paciente.nombre} ${turnos[i].paciente.apellido} - DNI: ${turnos[i].paciente.documento} - Obra Social: ${turnos[i].paciente.obraSocial} - Especialidad: ${turnos[i].especialidad} - Día del turno: ${turnos[i].diaTurno} - Hora del turno: ${turnos[i].horaTurno}`);
  }
}

// Función para eliminar un turno
function cancelarTurno() {
  let index = parseInt(prompt("Ingrese el índice del turno a eliminar:"));
  if (isNaN(index)) {
    prompt("Error: El índice debe ser un número.");
    return;
  }
  if (index < 0 || index >= turnos.length) {
    prompt("Error: Índice inválido.");
    return;
  }
  prompt(`Turno a eliminar: ${turnos[index].paciente.nombre} ${turnos[index].paciente.apellido}`);
  turnos.splice(index, 1);
  prompt(`Turno eliminado: ${turnos.length} turnos restantes`);
  //prompt(turnos);
}


function buscarTurno() {
  let nombreBuscar = prompt("Ingrese el nombre del paciente a buscar:");
  for (let i = 0; i < turnos.length; i++) {
    if (turnos[i].paciente.nombre.toLowerCase() === nombreBuscar.toLowerCase()) {
      prompt(`Turno encontrado: ${turnos[i].paciente.nombre} ${turnos[i].paciente.apellido} - DNI: ${turnos[i].paciente.documento} - Obra Social: ${turnos[i].paciente.obraSocial} - Especialidad: ${turnos[i].especialidad} - Día del turno: ${turnos[i].diaTurno} - Hora del turno: ${turnos[i].horaTurno}`);
      return;
    }
  }
  prompt("Turno no encontrado.")
}


function menu() {
  let bandera = true;
  while (bandera) {
    let opcion = Number (prompt(`Bienvenido Sistema de turnos FonoVida \n
1. Agregar turno\n
2. Mostrar turnos\n
3. Eliminar turno\n
4. Buscar turno\n
5. Salir\n
Ingrese su opción:`))
    switch (opcion) {
      case 0:
        return
      case 1:
        agregarTurno()
        break;
      case 2:
        mostrarTurnos()
        break;
      case 3:
        cancelarTurno()
        break;
      case 4:
        buscarTurno()
        break;
      case 5:
        Prompt("Gracias por utilizar el sistema de turnos.")
        bandera = false;
        break;
      default:
        prompt("Opción inválida. Por favor, ingrese una opción válida.")
    }
  }
}


obtenerDatosPaciente()
menu()
