// Variables & Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');



// Creamos la variable global presupuesto que luego vamos a 
// convertir en objeto de la clase Presupuesto
let presupuesto;


// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}


// Clases
class Presupuesto {
    constructor(presupuesto) {
        // La funcion Number() basicamente espera un numero 
        // y el mismo se va a encargar de asignarle el tipo, 
        // ya sea un integer o float...
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        const {presupuesto, restante} = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }
}

const ui = new UI();

// Funciones

function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('Presupuesto:');

    // Validamos el presupuesto.
    // Nota: la funcion isNaN() devuelve true si no es 
    // un numero o false si es un numero por lo tanto nos 
    // sirve para validar que realmente sea un numero lo 
    // que ingresa el usuario.
    if (presupuestoUsuario === "" || preguntarPresupuesto === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        // Recarga la ventana actual.
        window.location.reload();
    }

    // Instanciamos el objeto de Presupuesto a nuestra 
    // variable global.
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}