function agregarPantalla(valor) {
    document.getElementById('pantalla').value += valor;
}

function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
}

function calcular() {
    try {
        const resultado = eval(document.getElementById('pantalla').value);
        document.getElementById('pantalla').value = resultado;
    } catch (error) {
        document.getElementById('pantalla').value = 'Error';
    }
}