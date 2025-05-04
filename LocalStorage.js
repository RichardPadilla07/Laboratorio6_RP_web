// Richard Padilla - Laboratorio 6
// lINK: https://www.amazon.com/ref=nav_logo

// LOCAL STORAGE

fetch("https://fakestoreapi.com/products") // API falsa utilizada
    .then(r => r.json())
    .then(data => {
        const producto20 = data[19];
        console.log(producto20);
        guardarLocalStorage(producto20);
    })
    .catch(e => console.log(e));

// Función para guardar en el localStorage
const guardarLocalStorage = (data) => {
    localStorage.setItem("Producto N°20", JSON.stringify(data));
}

// TODO ESTO SE PEGA EN LA CONSOLA DEL NAVEGADOR Y VISUALIZAR SU CONTENIDO EN LA PARTE DE APLICACION - LOCAL STORAGE



// Aqui importamos la funcion login de otro archivo
import login from './Autenticar.js' // importar la funcion login de otro archivo
login("Richard", "9597") 
