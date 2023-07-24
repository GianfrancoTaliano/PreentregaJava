/**
 * Función para obtener un dato ingresado por el usuario
 * @param {string} cadena - El mensaje para el prompt
 * @returns {string} El dato ingresado por el usuario
 */
function obtenerDato(cadena) {
    const dato = prompt(cadena);
    console.log(cadena, ":", dato);
    return dato;
}

/**
 * Función para comprobar si el usuario es mayor de edad
 * @param {number} edad - La edad del usuario
 * @returns {boolean} Retorna true si el usuario es mayor de edad, de lo contrario false
 */
function comprobarEdad(edad) {
    let respuesta = true;
    if (isNaN(edad) || edad < 0) {
        alert("Edad inválida. Ingresa una edad válida.");
        respuesta = false;
    } else if (edad <= 16) {
        alert("Lo siento, no puedes acceder.");
        respuesta = false;
    } else if (edad === 17) {
        const consulta = prompt("¿Estás en compañía de un adulto s/n?").toLowerCase();
        if (consulta === "n") {
            respuesta = false;
        } else {
            const nombreAdulto = obtenerDato("Nombre del adulto");
            const apellidoAdulto = obtenerDato("Apellido del adulto");
            const edadAdulto = obtenerDato("Edad del adulto");

            if (comprobarDatos(nombreAdulto) && comprobarDatos(apellidoAdulto) && comprobarDatos(edadAdulto)) {
                alert("Bienvenido a la tienda " + nombreAdulto);
            } else {
                respuesta = false;
                alert("Datos ingresados incompletos");
            }
        }
    }
    return respuesta;
}

/**
 * Función para comprobar si un dato tiene contenido
 * @param {string} dato - El dato a comprobar
 * @returns {boolean} Retorna true si el dato tiene contenido, de lo contrario false
 */
const comprobarDatos = (dato) => dato !== "";

/**
 * Función para realizar el inicio de sesión
 * @returns {boolean} Retorna true si el inicio de sesión es exitoso, de lo contrario false
 */
function logIn() {
    const user = "Gian1234";
    const pass = "1234";
    let inputUser = prompt("Ingresa tu usuario");
    let inputPass = prompt("Ingresa tu Password");
    if (inputUser === user && inputPass === pass) {
        alert("Login satisfactorio");
        console.log("Usuario " + user);
        console.log("Password " + "****");
        return true;
    } else {
        alert("Datos incorrectos");
        return false;
    }
}

/**
 * Función principal para obtener los datos del usuario y realizar la compra
 */
function obtenerInfo() {
    // Solicitar información del usuario
    let nombre = obtenerDato("Nombre");
    const apellido = obtenerDato("Apellido");

    // Verificar si los datos ingresados son correctos
    if (comprobarDatos(nombre) && comprobarDatos(apellido)) {
        alert("Datos Correctos");
    } else {
        alert("Datos ingresados incorrectamente");
        return;
    }

    // Obtener la edad y comprobar si es mayor de edad
    const edad = parseInt(obtenerDato("Edad"));
    const mayorEdad = comprobarEdad(edad);

    // Si no es mayor de edad, finalizar
    if (!mayorEdad) {
        return;
    }

    // Obtener el email y mostrar un mensaje de bienvenida
    const email = obtenerDato("email");
    alert("Bienvenido a la tienda " + nombre + " " + apellido);
}
