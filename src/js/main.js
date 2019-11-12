
let datos = [];

let id = 0;
window.onload = () => {
    
    const btnGuardar = document.getElementById('btn-guardar');
    if(btnGuardar){
        btnGuardar.addEventListener('click', guardarDatos);
    }

}

function guardarDatos(){
    id++;
    obtenerDatos();
    pintarDatos();

}

function obtenerDatos(){
    

    //Obtiene datos del DOM
      let info = {
        id:id,
        concepto: document.getElementById('concepto').value,
        tipo: document.getElementById('tipo').value,
        monto: document.getElementById('monto').value,
        fecha: document.getElementById('fecha').value,
        comentarios: document.getElementById('comentarios').value
    };

    datos.push(info);


    limpiarCampos();
    
}

function pintarDatos(){

    //Creaciòn de elementos para colocarles datos
    tbody = document.querySelector("#tabla tbody");
    tbody.innerHTML = '';

    datos.forEach(element => {
        let fila = document.createElement('tr');

        //Pintar datos
        let colId = document.createElement('td');
        colId.innerHTML = element.id;
        fila.appendChild(colId);

        let colConcepto = document.createElement('td');
        colConcepto.innerHTML = element.concepto;
        fila.appendChild(colConcepto);

        let colTipo = document.createElement('td');
        colTipo.innerHTML = element.tipo;
        fila.appendChild(colTipo);

        let colMonto = document.createElement('td');
        colMonto.innerHTML = element.monto;
        fila.appendChild(colMonto);

        let colFecha = document.createElement('td');
        colFecha.innerHTML = element.fecha;
        fila.appendChild(colFecha);

        let colComentarios = document.createElement('td');
        colComentarios.innerHTML = element.comentarios;
        fila.appendChild(colComentarios);

        //Pintar iconos editar y eliminar
        let acciones = document.createElement('td');
        acciones.innerHTML = `<button type="button" class="btn btn-success"><i class="material-icons">edit</i></button><button type="button" class="btn btn-danger" onclick="borrar(${element.id})"><i class="material-icons">delete</i></button>`;
        fila.appendChild(acciones);

         //Pintar en tabla los datos
         tbody.appendChild(fila);
    })    

    
}

function limpiarCampos(){
    
    //Colocar en blanco los campos
    document.getElementById('concepto').value = '';
    document.getElementById('tipo').value = '';
    document.getElementById('monto').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('comentarios').value = '';
}

function borrar(id){
    // preguntamos si desea eliminarlo
    const value = confirm('¿Deseas eliminarlo?');

    if(value){
        // eliminar fila
        //document.querySelector("#fila_" + id).remove();
        datos = eliminarDato(datos, id);
        pintarDatos();
    }else{
        // no hacer nada
    }
}

/*function borrar(arre, ide){
    eliminarDato(arre, ide);
    pintarDatos
}*/

function eliminarDato(arre, value){
    return arre.filter(function(ele){
        return ele.id != value;
    });
    
}   








//Este es del primer código que hice

// let id = 0;

// window.onload = function(){

//     let btn = document.getElementById('btn-guardar');
//     if(btn){
//         btn.addEventListener('click', comprobar);
//     }else{
//         alert('Error en el boton');
//     }

// }

// const arreG = [];
// let datos = [];

// function comprobar(){


//     let concepto = document.getElementById('concepto').value;
//     let tipo = document.getElementById('tipo').value;
//     let monto = document.getElementById('monto').value;
//     let fecha = document.getElementById('fecha').value;
//     let comentarios = document.getElementById('comentarios').value;

//     datos = {
//         "concepto": concepto,
//         "tipo": tipo,
//         "monto": monto,
//         "fecha": fecha,
//         "comentarios": comentarios
//     };

//     if(concepto === "" || tipo === "" || monto === "" || fecha === "" || comentarios === ""){
//         alert('Algun elemento está vacio');
//     }
//     else{
//         guardar(datos);
//     }

// }
// let sizeTd = document.getElementsByTagName('tr');

// function limpiarFormulario(){
//     document.getElementById("concepto").value = "";
//     document.getElementById("tipo").value = "";
//     document.getElementById("monto").value = "";
//     document.getElementById("fecha").value = "";
//     document.getElementById("comentarios").value = "";
// }


// function guardar(data){

//     let c = sizeTd.length;
    
//     limpiarFormulario();

//     arreG.push(data);
//     let divTabla = document.getElementById('datos');
//     let tabla = document.getElementById('tabla');
//     let fila = document.createElement('tr');
//     fila.id = 'fila' +c;

//     let colConcepto = document.createElement('td');
//     let colTipo = document.createElement('td');
//     let colMonto = document.createElement('td');
//     let colFecha = document.createElement('td');
//     let colComentarios = document.createElement('td');

//     let colEditar = document.createElement('td');
//     let colEliminar = document.createElement('td');

//     let iconEditar = document.createElement('i');
//     iconEditar.id = 'fila' +c;
//     iconEditar.className = 'material-icons colorEdit';
//     iconEditar.innerHTML = 'edit';
//     iconEditar.setAttribute("onClick", "editar(event)");

//     let iconEliminar = document.createElement('i');
//     iconEliminar.id = c;
//     iconEliminar.className = 'material-icons colorElim';
//     iconEliminar.innerHTML = 'delete_forever';
//     iconEliminar.setAttribute("onClick", "eliminar(event)");

//     colEditar.appendChild(iconEditar);
//     colEliminar.appendChild(iconEliminar);

//     colConcepto.appendChild(document.createTextNode(data.concepto));
//     colTipo.appendChild(document.createTextNode(data.tipo));
//     colMonto.appendChild(document.createTextNode(data.monto));
//     colFecha.appendChild(document.createTextNode(data.fecha));
//     colComentarios.appendChild(document.createTextNode(data.comentarios));
    

//     fila.appendChild(colConcepto);
//     fila.appendChild(colTipo);
//     fila.appendChild(colMonto);
//     fila.appendChild(colFecha);
//     fila.appendChild(colComentarios);
//     fila.appendChild(colEditar);
//     fila.appendChild(colEliminar);
    
    
//     tabla.appendChild(fila);
//     divTabla.appendChild(tabla);
    


// }

// function editar(event){

//     console.log(event.target.id);
//     let identify = event.target.id;
//     let overlay = document.getElementById('overlay');
//     overlay.classList.add('active');

//     let btnCerrar = document.getElementById('btn-cerrar-popup');
//     btnCerrar.addEventListener('click', function(){
//         overlay.classList.remove('active'); 
//     });

//     let row = document.getElementById(identify);

//     let columna = document.getElementById(identify).innerHTML;
//     console.log(columna);

//     document.getElementById('editConcepto').value = "";
//     document.getElementById('editTipo').value = "";
//     document.getElementById('editMonto').value = "";
//     document.getElementById('editFecha').value = "";
//     document.getElementById('editComentarios').value = "";

//     let btnEdit = document.getElementById('btnEditar');
//     if(btnEdit){
//         btnEdit.addEventListener('click', actualizarDatos(identify));
//     }    
// }

// let arreEdit = [];

// function actualizarDatos(identify){

    
//     let editConcepto = document.getElementById('editConcepto').value;
//     let editTipo = document.getElementById('editTipo').value;
//     let editMonto = document.getElementById('editMonto').value;
//     let editFecha = document.getElementById('editFecha').value;
//     let editComentarios = document.getElementById('editComentarios').value;


//     arreEdit = {
//         "concepto": editConcepto,
//         "tipo": editTipo,
//         "monto": editMonto,
//         "fecha": editFecha,
//         "comentarios": editComentarios
//     };

//     let filaEdit = document.getElementById(identify); 


    
// }




// function eliminar(event){
//     let identificador = event.target.id;
//     let confirmacion = confirm('¿Estás seguro?');
    
//     if(confirmacion == true){
//         let tabla = document.getElementById("tabla");
//         tabla.deleteRow(identificador);
//     }
// }