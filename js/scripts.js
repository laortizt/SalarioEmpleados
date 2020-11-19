let salarioMinimo = 877803;
let auxilioTransporte = 102854;

function procesarFormulario(evento) {
    evento.preventDefault();
    calcularSalario();
}

function calcularSalario(){     
    let sueldo = parseInt(document.getElementById('sueldo').value);
    let fechaIn = document.getElementById('fechaIn').value;
    let fechaFin = document.getElementById('fechaFin').value;


    let diasLaborados = calcularDiasLaborados(fechaIn, fechaFin);

    // Sueldo neto, por días laborados
    let salarioNeto = calcularSalarioNeto(sueldo, diasLaborados);

    // Auxilio de transporte: Se paga si está por debajo del tope
    let auxilio = calcularAuxilioTransporte(sueldo, diasLaborados);

    // Aporte salud: 4% del neto
    let aporteSalud = calcularAporteSalud(salarioNeto);

    // Pensión obligatoria: 4% del neto
    let aportePension = calcularAportePension(salarioNeto);

    let pagoTotal = salarioNeto + auxilio - aporteSalud - aportePension;

    mostrarResultados(diasLaborados, salarioNeto, auxilio, aporteSalud, aportePension, pagoTotal);
}

function calcularDiasLaborados(fechaInicio, fechaFin) {
    console.log(fechaInicio);
    console.log(fechaFin);
    console.log(fechaInicio - fechaInicio);

    let dias = 30;

    if (dias > 30) {
        dias = 30;
    }

    return dias;
}

function calcularSalarioNeto(sueldo, dias) {
    // Pago proporcional al número de días
    return (sueldo / 30) * dias;
}

function calcularAuxilioTransporte(sueldo, dias) {
    // Merece auxilio si devenga máximo dos salarios mínimos
    if (sueldo <= 2 * salarioMinimo) {
        return (auxilioTransporte / 30) * dias;
    }

    return 0;
}

function calcularAporteSalud(salarioNeto) {
    return salarioNeto * 0.04;
}

function calcularAportePension(salarioNeto) {
    return salarioNeto * 0.04;
}

function mostrarResultados(diasLaborados, salarioNeto, auxilioTransporte, aporteSalud, aportePension, pagoTotal) {
    let diasLaboradosCampo = document.getElementById('diasLaborados');
    diasLaboradosCampo.innerText = diasLaborados;
    
    let salarioNetoCampo = document.getElementById('salarioNeto');
    salarioNetoCampo.innerText = "$ " + salarioNeto + " pesos";

    let auxilioTransporteCampo = document.getElementById('auxilioTransporte');
    auxilioTransporteCampo.innerText = auxilioTransporte;

    let aporteSaludCampo = document.getElementById('aporteSalud');
    aporteSaludCampo.innerText = aporteSalud;

    let aportePensionCampo = document.getElementById('aportePension');
    aportePensionCampo.innerText = aportePension;

    let pagoTotalCampo = document.getElementById('pagoTotal');
    pagoTotalCampo.innerText = pagoTotal;
}

    // var fechaIn = moment('');
    // var fechaFin = moment('');
    // console.log(fecha2.diff(fecha1, 'days'), ' dias de diferencia');  


// Para evitar que el submit cambie la página detenemos el evento y llamamos a la función que calcula los valores
document.getElementById('form').addEventListener('submit', procesarFormulario)
