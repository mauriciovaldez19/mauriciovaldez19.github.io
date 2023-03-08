// Varibles para combinar datos Random
const foto = document.getElementById('foto');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const edad = document.getElementById('edad');
const nacionalidad = document.getElementById('nacionalidad');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const calle = document.getElementById('calle');
const numero = document.getElementById('numero');
const ciudad = document.getElementById('ciudad');
const pais = document.getElementById('pais');
const postcode = document.getElementById('postcode');
const celular = document.getElementById('celular');

// Función importa datos random
const generarUsuario = async()=>{
    try {
        const url = 'https://randomuser.me/api/?gender=male';
        const respuesta = await fetch(url);
        const { results } = await respuesta.json();
        const datos = results [0];
        
        foto.src = datos.picture.large;
        nombre.textContent = datos.name.first;
        apellido.textContent = datos.name.last;
        edad.textContent =datos.dob.age;
        nacionalidad.textContent = datos.nat;
        email.textContent = datos.email;
        telefono.textContent = datos.phone;
        celular.textContent = datos.cell;
        calle.textContent = datos.location.street.name;
        numero.textContent = datos.location.street.number;
        ciudad.textContent = datos.location.city;
        pais.textContent = datos.location.country;
        postcode.textContent = datos.location.postcode;

        

    } catch (error) {
        console.log(error)
    }
} 

// al momento de cargar la pagina, llama a la funcion generadora
document.addEventListener('DOMContentLoaded',generarUsuario);

// variables y funcion para el boton muestra más
function muestra_mas() {
    let muestra = document.getElementById("muestra");
    let btn = document.getElementById("btn");
  
    if (muestra.style.display === "none") {
      btn.innerHTML = "Ver menos";
      muestra.style.display = "block";
    } else {
     btn.innerHTML = "Ver más";
      muestra.style.display = "none";
    }
  }
  document.addEventListener('DOMContentLoaded',muestra_mas);