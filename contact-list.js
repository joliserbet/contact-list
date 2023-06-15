//Definimos la lista con los contactos existentes.
listaDeContactos = ["Mario Betancourth", "Jorge Trejo", "Linneth Cruz"];


//Creamos funcion para agregar un nuevo contacto a la lista
function aggContacto(nuevoContacto) {
  listaDeContactos.push(nuevoContacto);
}

//Creamos funcion para eliminar un contacto de la lista
function eliminarContacto(contacto) {
  const indice = listaDeContactos.findIndex((c) => c === contacto);
  if (indice !== -1) {
    listaDeContactos.splice(indice, 1);
    console.log(`Se eliminó el contacto "${contacto}" de la lista.`);
  } else {
    console.log(`El contacto "${contacto}" no existe en la lista.`);
  }
}

//Creamos funcion para mostrar todos los contactos de la lista
function mostrarContactos(){
    console.log(listaDeContactos);  
}

//llamando a la funcion para agregar contacto
aggContacto("Nicolle Sandoval");

//llamando a la funcion para eliminar un contacto
eliminarContacto("Mario Betancourth");

//llamando a la funcion para mostra los contactos
mostrarContactos();
