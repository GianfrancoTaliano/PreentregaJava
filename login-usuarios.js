
// Bucle para agregar nuevos usuarios
let continuar = true;
while (continuar) {
    if (!logIn()) continue;

    obtenerInfo();
    let nuevoUsuario = prompt("Desea ingresar otro usuario s/n");
    if (nuevoUsuario === "n") {
        continuar = false;
    } else if (nuevoUsuario === "s") {
        continue;
    } else {
        alert("El valor ingresado no es el correcto");
        break;
    }
}
