//Se toman los valores del formulario
const nombre = document.getElementById('nombre').value;
const apellido = document.getElementById('apellido').value;
const fechaNacimiento = document.getElementById('fecha').value;

//Se almacenan para convertirlos a objeto json
const datos = {
  nombre: nombre,
  apellido: apellido,
  fechaNacimiento: fecha
};

//Se crea el fetch con la url a la que debe enviarse los datos
fetch('https://jsonplaceholder.typicode.com/users', {

  method: 'POST',  //se indica el método que se utilizará
  headers: {
    'Content-Type': 'application/json'  //se indica que se están enviando datos en formato json
  },
  body: JSON.stringify(datos)  //se utiliza para convertir el objeto json a una cadena json para poder ser enviado
})

  .then(response => response.json()) //se convierte la respuesta en json
  .then(data => {
    console.log('Respuesta del servidor:', data);
  })

  .catch(error => {  //por si llega a haber un error
    console.error('Error de envio:', error);
  });
