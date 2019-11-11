window.onload = function(){

    let btn = document.getElementById('btn-guardar');
    if(btn){
        btn.addEventListener('click', comprobar);
    }else{
        alert('Error en el boton');
    }

}

const arreG = [];
let datos = [];

function comprobar(){


    let concepto = document.getElementById('concepto').value;
    let tipo = document.getElementById('tipo').value;
    let monto = document.getElementById('monto').value;
    let fecha = document.getElementById('fecha').value;
    let comentarios = document.getElementById('comentarios').value;

    datos = {
        "concepto": concepto,
        "tipo": tipo,
        "monto": monto,
        "fecha": fecha,
        "comentarios": comentarios
    };

    if(concepto === "" || tipo === "" || monto === "" || fecha === "" || comentarios === ""){
        alert('Algun elemento está vacio');
    }
    else{
        guardar(datos);
    }

}
let sizeTd = document.getElementsByTagName('tr');
function guardar(data){

    let c = sizeTd.length;
    
    document.getElementById("concepto").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("monto").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("comentarios").value = "";

    arreG.push(data);
    let divTabla = document.getElementById('datos');
    let tabla = document.getElementById('tabla');
    let fila = document.createElement('tr');
    fila.id = 'fila' +c;

    let colConcepto = document.createElement('td');
    let colTipo = document.createElement('td');
    let colMonto = document.createElement('td');
    let colFecha = document.createElement('td');
    let colComentarios = document.createElement('td');

    let colEditar = document.createElement('td');
    let colEliminar = document.createElement('td');

    let iconEditar = document.createElement('i');
    iconEditar.id = c;
    iconEditar.className = 'material-icons colorEdit';
    iconEditar.innerHTML = 'edit';
    iconEditar.setAttribute("onClick", "editar(event)")

    let iconEliminar = document.createElement('i');
    iconEliminar.id = c;
    iconEliminar.className = 'material-icons colorElim';
    iconEliminar.innerHTML = 'delete_forever';
    iconEliminar.setAttribute("onClick", "eliminar(event)")

    colEditar.appendChild(iconEditar);
    colEliminar.appendChild(iconEliminar);

    colConcepto.appendChild(document.createTextNode(data.concepto));
    colTipo.appendChild(document.createTextNode(data.tipo));
    colMonto.appendChild(document.createTextNode(data.monto));
    colFecha.appendChild(document.createTextNode(data.fecha));
    colComentarios.appendChild(document.createTextNode(data.comentarios));
    

    fila.appendChild(colConcepto);
    fila.appendChild(colTipo);
    fila.appendChild(colMonto);
    fila.appendChild(colFecha);
    fila.appendChild(colComentarios);
    fila.appendChild(colEditar);
    fila.appendChild(colEliminar);
    
    
    tabla.appendChild(fila);
    divTabla.appendChild(tabla);
    


}

function editar(event){
    let identificador = event.target.id;
    alert('Editar: '+identificador);

    


}

function eliminar(event){
    let identificador = event.target.id;
    let confirmacion = confirm('¿Estás seguro?');
    
    if(confirmacion == true){
        let tabla = document.getElementById("tabla");
        tabla.deleteRow(identificador);
    }
}