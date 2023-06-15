//Definimos la lista con los contactos existentes.
let listaDeContactos = [];

//funcion para crear un nuevo contacto
function crearContacto(id, nombres, apellidos, telefono, ciudad, direccion) {
  const contacto = {
    id: id,
    nombres: nombres,
    apellidos: apellidos,
    telefono: telefono,
    location: {
      ciudad: ciudad,
      direccion: direccion,
    },
  };
  listaDeContactos.push(contacto);
  console.log(`Se creo el contacto ${nombres} ${apellidos} con ID ${id}`);
}

//funcion para eliminar el contacto con id
function eliminarContacto(id) {
  const indice = listaDeContactos.findIndex((contacto) => contacto.id === id);
  if (indice !== -1) {
    const contactoEliminado = listaDeContactos.splice(indice, 1)[0];
    console.log(
      `El contacto ${contactoEliminado.nombres} ${contactoEliminado.apellidos} con ID: ${contactoEliminado.id} se ha eliminado exitosamente.`
    );
  } else {
    console.log(`El contacto no se encuentra en la lista.`);
  }
}

crearContacto(
    1,
  "Mario Joliser",
  "Betancourth Trejo",
  87913451,
  "Tegucigalpa",
  "Altos del Trapiche"
);
crearContacto(
    2,
  "Mario Joliser",
  "Betancourth Trejo",
  87913451,
  "Tegucigalpa",
  "Altos del Trapiche"
);

console.log(listaDeContactos);
