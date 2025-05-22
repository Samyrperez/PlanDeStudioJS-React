

// Bloque 1: Selección de elementos y lectura de valores
// Seleccion de elementos

const inputNombre = document.querySelector('#nombre-1');
const inputApellido = document.querySelector('#apellido')
const botonEnviar = document.querySelector('#enviar');
const parrafoResultado = document.querySelector('#resultado');

// Evento click

botonEnviar.addEventListener('click', () => {
    const nombreIngrasado = inputNombre.value; // leer el valor
    const apellidoIngresado = inputApellido.value;
    parrafoResultado.textContent = `Hola , ${nombreIngrasado} ${apellidoIngresado}`;
})

// 🔹 Qué estás aprendiendo aquí:
/*
| Concepto                        | Qué hace     |
| ------------------------------- | ----------------------------|
| `querySelector()`|Selecciona elementos por ID, clase o etiqueta|
| `.value`    | Toma el valor actual de un input |
| `.textContent` | Cambia el texto de un párrafo o div  |
| `addEventListener('click',...)`| Ejecuta algo cuando haces clic  |
*/



// ✅ Bloque 2: Validar campos vacíos en un formulario

const formulario = document.querySelector('#formulario');
const correo = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que se recargue la pagina

    if(correo.value.trim() === '') {
        mensaje.textContent = 'Por favor ingresa tu correo';
        mensaje.style.color = 'red';
        console.log("Correo no enviado, ingresa un dato valido")
    } else {
        mensaje.textContent = `Correo Enviado a ${correo}`;
        mensaje.style.color = 'green';
        console.log("Correo  enviado")
    }
});

/*
| Concepto            | Qué hace                 |
| ------------------- | ------------------------------- |
| `.preventDefault()` | Detiene el envío del formulario automático |
| `.trim()`           | Elimina espacios innecesarios              |
| `.style.color`      | Cambia estilo desde JS                     |

*/


// 🔹  Parte 1:Crear una lista dinámica (ul/li)
// 🧪 HTML base:

const inputTarea = document.querySelector('#tarea');
const botonAgregar = document.querySelector('#agregar');
const listaTarea =  document.querySelector('#lista-tareas');

botonAgregar.addEventListener('click', ()=> {
    const textoTarea = inputTarea.value.trim();

    if(textoTarea !== '') {
        const li = document.createElement('li'); // Crear <li>
        li.textContent = textoTarea; // Asignar texto
        listaTarea.appendChild(li); // Agregarlo al <ul>
        inputTarea.value = ''; // Limpiar el input
    }
})





  // 🔹 Parte 2: Crear una tabla dinámica

document.addEventListener('DOMContentLoaded' , () => {

const inputNombre2 = document.querySelector('#nombre');
const inputEdad = document.querySelector('#edad');
const botonRegistrar = document.querySelector('#registrar');
const cuerpoTabla = document.querySelector('#cuerpo-tabla');

botonRegistrar.addEventListener('click', () => {
    console.log("Botón clickeado");

    const nombre = inputNombre2.value.trim();
    const edad = inputEdad.value.trim();

    if (nombre !== '' && edad !== '') {
        const fila = document.createElement('tr');

        const celdaNombre = document.createElement('td');
        const celdaEdad = document.createElement('td');
        const celdaAccion = document.createElement('td');
        const botonEliminar = document.createElement('button');

        celdaNombre.textContent = nombre;
        celdaEdad.textContent = edad;
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn-eliminar');

        // Evento eliminar la fila
        botonEliminar.addEventListener('click', () => {
            fila.remove();
        });

        celdaAccion.appendChild(botonEliminar);


        

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaEdad);
        fila.appendChild(celdaAccion);

        cuerpoTabla.appendChild(fila);

        // Limpiar inputs
        inputNombre2.value = '';
        inputEdad.value = '';
    }
});

})


/*
| Función DOM                | Propósito                  |
| -------------------------- | ------------------------------- |

| `document.createElement()` | Crea elementos HTML (como `<tr>`, `<td>`, `<li>`, etc.) |
| `.appendChild()`           | Inserta un nodo hijo dentro de otro                     |
| `.textContent`             | Inserta texto dentro del elemento                       |
| `.trim()`                  | Elimina espacios en blanco del input                    |

*/