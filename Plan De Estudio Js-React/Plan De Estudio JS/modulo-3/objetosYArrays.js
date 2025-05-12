// Objetos 

// 1. Crear y acceder a objetos
// let persona = {
//     nombre: "Sam",
//     edad: 25,
//     pais: "Colombia"
// };

// console.log(persona.nombre);    
// console.log(persona["edad"]);   

/*
🧠 Reto 1:
Crea un objeto pelicula con estas propiedades:

titulo, director, anio, genero.

Muestra por consola cada propiedad de dos formas: con . y con [].
*/

// let pelicula = {
//     titulo: "La oreja de vangob",
//     director: "Samyr Pérez",
//     anio: 2023,
//     genero: "Acción"
// }

// console.log(pelicula.titulo);
// console.log(pelicula.director);
// console.log(pelicula["anio"]);

// 🔁 Paso 2: Modificar y eliminar propiedades

// pelicula.anio = 2024; // Modificar
// pelicula.duracion = "2h 15m"; // Agregar nueva propiedad
// delete pelicula.genero; // Eliminar

// console.log(pelicula);

// pelicula.anio = 2024;
// pelicula.idioma = "Español";
// delete pelicula.genero; // Eliminar
// console.log(pelicula)

// ✅ Paso 3: métodos dentro de objetos
// Puedes añadir funciones dentro de un objeto para que se comporten como métodos.
// Ejemplo básico:

// let persona = {
//     nombre: "Sam",
//     saludar: function() {
//         console.log("Hola, soy " + this.nombre);
//     }
// };

// 🧠 Reto 3:
// Agrega al objeto pelicula un método llamado describir() que muestre un mensaje como:

// "La película 'La oreja de vangob', dirigida por Samyr Pérez, fue lanzada en 2024."

// 💡 Usa this para acceder a las propiedades dentro del método.

// persona.saludar(); // Hola, soy Sam

// pelicula.describir = function() {
//     console.log(`La pelicula ${this.titulo}, dirigida por ${this.director}, fue lanzada el año ${this.anio}.`)
// }

// pelicula.describir();

// pelicula.disponible = true;
// pelicula.cambiarDisponibilidad = function() {
//     this.displonible = !this.disponible;
//     console.log(`La disponiblidad de la pelicula ${this.titulo} es : ${this.disponible}`);
// }

// pelicula.cambiarDisponibilidad(); // False
// pelicula.cambiarDisponibilidad(); // true





// 🔹 Acceso dinámico a claves en objetos

// 🧱 ¿Qué es una clave en un objeto?
// En JavaScript, un objeto es una colección de pares clave: valor.

// Ejemplo:
// let persona = {
//     nombre: "Samyr",
//     edad: 25,
//     ciudad: "Medellín"
// }
// Aquí:

// "nombre" es una clave, su valor es "Samyr"

// "edad" es otra clave, su valor es 25

// "ciudad" es otra clave, su valor es "Medellín"


// Normalmente accedes a una propiedad así:
// persona.nombre  // "Samyr"

// Pero, ¿qué pasa si no sabes el nombre exacto de la propiedad que quieres usar y lo tienes en una variable?
// let clave = "ciudad";
// console.log(persona[clave]); // "Medellín"

// Esto se llama acceso dinámico: estás usando una variable que contiene el nombre de la propiedad. No puedes hacer persona.clave, porque buscaría literalmente una propiedad llamada "clave".

/*
🤔 ¿Por qué es útil?
Cuando estás trabajando con:

- Formularios dinámicos

- Tablas de datos

- Objetos que no conoces totalmente al inicio

- Automatización de lectura o modificación de datos

Por ejemplo, si estás leyendo claves desde un array:
*/

// let propiedades = ["nombre", "edad", "ciudad"];

// for (let i = 0; i < propiedades.length; i++) {
//     console.log(persona[propiedades[i]]);
// }
// Aquí no puedes hacer persona.propiedades[i] porque propiedades[i] es una variable, no una clave literal.
/*

| Término             | Significado                                                                 |
| ------------------- | --------------------------------------------------------------------------- |
| **Clave**           | El nombre de una propiedad dentro de un objeto (`"nombre"`, `"edad"`, etc.) |
| **Valor**           | Lo que está asignado a esa clave (`"Samyr"`, `25`, etc.)                    |
| **Acceso dinámico** | Usar una variable para acceder a una propiedad del objeto: `objeto[clave]`  |
*/

/*
🧠 Reto 1: Mostrar valor por clave dinámica
Crea una función que reciba dos parámetros: un objeto y una clave (string).
Debe devolver el valor asociado a esa clave en el objeto.
*/
// function obtenerValor(objeto, clave) {
//     return console.log(objeto[clave]);
// }
// obtenerValor(persona, "nombre");
// obtenerValor(persona, "edad");
// obtenerValor(persona, "ciudad");

// const libro = {
//     titulo: "1984",
//     autor: "George Orwell",
//     paginas: 328,
//     disponible: true
// };


// 🧠 Reto 2: Leer propiedad de un objeto
// Tienes un objeto libro con varias propiedades. Crea una función que reciba el objeto y una clave (como string), y devuelva el valor de esa propiedad si existe, o un mensaje de error si no existe.


// function leerPropiedad(objeto, clave){
//     if (objeto[clave] !== undefined) {
//         console.log(`El valor de la propiedad ${clave} es: ${objeto[clave]}`)
//     } else {
//         console.log(`La propiedad ${clave} no existe en el objeto.`)
//     }
// }
// leerPropiedad(libro, "titulo");
// leerPropiedad(libro, "autor");

// console.log(libro)


/*
🧠 Reto: Crear un perfil de usuario dinámico
Crea una función crearPerfil que reciba dos arrays:

Uno con nombres de propiedades (claves),

Y otro con valores correspondientes.
*/

function crearPerfil(claves, valores) {
    let perfil = {};
    for (let i = 0; i < claves.length; i++) {
        perfil[claves[i]] = valores[i];
    }
    return perfil;
}

let claves = ["nombre", "edad", "ciudad"];
let valores = ["Samyr", 31, "Medellín"];
console.log(crearPerfil(claves, valores));

/*
:

🧠 Reto: Crear un objeto de configuración de usuario
Crea una función crearConfiguracion que reciba los arrays opciones y configuraciones, y retorne un objeto con esa configuración.
{
    tema: "oscuro",
    idioma: "español",
    notificaciones: true,
    modoOscuro: true
}

*/
// function configurarInformacion(claves, valores) {
//     let informacion = {};
//     for (let i = 0; i < claves.length; i++){
//         informacion[claves[i]] = valores[i];
//     }
//     return informacion;
// }
// let opciones = ["tema", "idioma", "notificaciones", "modoOscuro"];
// let configuraciones = ["oscuro", "español", true, true];
// console.log(configurarInformacion(opciones, configuraciones));


/*
🧠 Reto desafiante: Agrupador de configuraciones por tipo
Tienes dos arrays:
let opciones = ["tema", "idioma", "notificaciones", "modoOscuro", "volumen"];
let configuraciones = ["oscuro", "español", true, true, 85];

🎯 Tu misión:
Crea una función llamada agruparPorTipo que:

1. Genere un objeto principal con 3 claves:

-"booleanos" → donde se agrupan todas las propiedades cuyo valor es true o false.

-"numeros" → donde se agrupan las que tengan valores numéricos.

-"textos" → donde se agrupan las que sean cadenas (string).

2. Dentro de cada clave, se deben guardar las propiedades (clave: valor) que correspondan.
📝 Ejemplo del resultado esperado:
{
    booleanos: {
    notificaciones: true,
    modoOscuro: true
    },
    numeros: {
    volumen: 85
    },
    textos: {
    tema: "oscuro",
    idioma: "español"
    }
}

*/
// let opciones = ["tema", "idioma", "notificaciones", "modoOscuro", "volumen"];
// let configuraciones = ["oscuro", "español", true, true, 85];

// function clasificarDatos(opciones, configuraciones) {
//     let resultado = {
//         booleanos: {},
//         numeros: {},
//         textos: {}
//     };
//     for (let i = 0; i < opciones.length; i++){
//         let clave = opciones[i];
//         let valor = configuraciones[i];

//         if (typeof valor ===  "boolean" ) {
//             resultado.booleanos[clave] = valor;
//         } else if (typeof valor===  "string" ) {
//             resultado.textos[clave] = valor;
//         } else if (typeof valor===  "number" ) {
//             resultado.numeros[clave] = valor;
//         }

//     } 
//     return resultado;
// }



// console.log(clasificarDatos(opciones, configuraciones));


/*
Crea una función llamada clasificarConfiguraciones que:

1. Cree un objeto resultado con 4 claves principales:

- "booleanos" → para los valores true o false.

-"numerosEnteros" → para valores numéricos enteros.

-"numerosDecimales" → para valores numéricos con decimales.

-"textos" → para valores tipo string.

2. Clasifique cada par clave/valor según su tipo y lo almacene correctamente.
*/

let opciones = ["tema", "idioma", "notificaciones", "modoOscuro", "volumen", "vibración", "brillo", "formatoFecha"];
let configuraciones = ["oscuro", "español", true, false, 85, true, 0.75, "DD/MM/YYYY"];

function clasificarConfiguraciones(opciones, configuraciones) {
    let resultado = {
        booleanos: {},
        numerosEnteros: {},
        numerosDecimales: {},
        textos: {}
    }
    for (let i = 0; i < opciones.length; i++) {
        let clave = opciones[i];
        let valor = configuraciones[i];

        if (typeof valor === "boolean") {
            resultado.booleanos[clave] = valor;
        } else if (typeof valor === "number") {
            if (Number.isInteger(valor)) {
                resultado.numerosEnteros[clave] = valor;
            } else {
                resultado.numerosDecimales[clave] = valor;
            }
        } else if (typeof valor === "string") {
            resultado.textos[clave] = valor;
        }

    }
    return resultado;
}

console.log(clasificarConfiguraciones(opciones, configuraciones))


/*
🔥 Reto: Clasificador de Propiedades
Crea una función llamada clasificarPropiedades(objeto) que:

1. Recorra todas las propiedades del objeto.

2. Clasifique las claves en 3 grupos según el tipo de su valor:

"strings"

"numbers"

"booleans"

3. Almacene estas claves dentro de un nuevo objeto con esta estructura:
{
    strings: {},
    numbers: {},
    booleans: {}
}

4. El valor debe ser el original que tenía en el objeto inicial.
*/

let producto = {
    nombre: "Laptop",
    precio: 2500,
    disponible: true,
    descripcion: "Alta gama",
    garantia: false,
    stock: 15
};

function clasificarPropiedades(objeto) {
    let resultado =
    {
        strings: {},
        numbers: {},
        booleans: {}
    }
    
    for (let clave in objeto) {
        let valor = objeto[clave];

        if (typeof valor === "string") {
            resultado.strings[clave] = valor;
        } else if( typeof valor === "number") {
            resultado.numbers[clave] = valor;
        } else if(typeof valor === "boolean") {
            resultado.booleans[clave] = valor;
        }

    }

    return resultado;

}

console.log(clasificarPropiedades(producto));