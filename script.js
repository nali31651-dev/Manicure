function confirmarCita() {
    let cliente = document.getElementById("cliente").value;
    let manicure  = document.getElementById("manicure").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    let servicio = document.getElementById("servicio").value;

    document.getElementById("resultado").innerHTML = `
        <strong>Cita registrada:</strong><br>
        Cliente: ${cliente}<br>
        manicure: ${manicure}<br>
        Fecha: ${fecha}<br>
        Hora: ${hora}<br>
        Servicio: ${servicio}
    `;
}
