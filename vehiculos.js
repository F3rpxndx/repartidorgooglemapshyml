document.addEventListener('DOMContentLoaded', function() {
    let formVehiculo = document.getElementById('form-vehiculo');
    inputs = formVehiculo.getElementsByTagName('input');

    inputs[0].value = 'Lamborghini Veneno';
    inputs[1].value = '2014';
    inputs[2].value = '91232-3213';
    inputs[3].value = '#909090';
}, false);

function activarEditarVehiculo() {
    [...inputs].forEach(element => {
        // Hacer que el button haga un toggle del estado para ver la funcionalidad
        // TODO: solo deberia cambiar el estado a false i.e. element.disabled = false;
        element.disabled = !element.disabled;
    });
}