// Funcion enviar datos
function crearObjeto() {
    var documento = document.getElementById("documento").value;
    var nombres = document.getElementById("nombres").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;
    var rol = document.getElementById("rol").value;

    // Verificar si el documento ya existe en la tabla
    if (documentorepedito(documento)) {
        alert("¡La persona con el documento " + documento + " ya existe!");
    } else {
        // Si no existe, agregar la nueva fila a la tabla
        document.getElementById("tablejei").innerHTML += "<tr><td>" + documento + "</td><td>" + nombres + "</td><td>" + email + "</td><td>" + contraseña + "</td><td>" + rol + "</td></tr>";
    }
}

// Funcion para verificar si el documento ya existe en la tabla
function documentorepedito(documento) {
    var table = document.getElementById("tablejei");
    for (var i = 1; i < table.rows.length; i++) { // Comienza desde 1 para omitir el encabezado
        var existingDocumento = table.rows[i].cells[0].innerHTML;
        if (existingDocumento === documento) {
            return true; // Documento ya existe
        }
    }
    return false; // Documento no existe
}
