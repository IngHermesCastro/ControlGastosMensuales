let listaNombresGastos = [];
let listaValoresGastos = [];

function clickBoton() {
    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = Number(document.getElementById("valorGasto").value);
    //console.log(nombreGasto);
    //console.log(valorGasto);

    ///Push en los arreglos
    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    //console.log(listaNombresGastos);
    //console.log(listaValoresGastos);
    actualizarListaGastos();

    

}

function actualizarListaGastos() {

    let html = '';
    let total = 0;
    listaNombresGastos.forEach((Elemento, posicion) => {
        valorg = listaValoresGastos[posicion];
        html += `<li>${Elemento} - USD ${valorg.toFixed(2)}
        <button onclick="eliminarGasto(${posicion})" >Eliminar</button><li>`;
        total += Number(valorg); 
    });
    const ListaConGastos = document.getElementById("listaDeGastos");
    const gastos = document.getElementById("totalGastos");

    gastos.innerHTML = total.toFixed(2);
    ListaConGastos.innerHTML = html;

    limpiar();

}
function limpiar() {
    document.getElementById("nombreGasto").value = '';
    document.getElementById("valorGasto").value = '';

}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();

}