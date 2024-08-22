
function encriptarTexto() {
    let textUsuario = document.getElementById('textUsuario').value;
    asignarTextoElemento('#textResult', cifrar(textUsuario, 5));
    console.log(cifrar(textUsuario, 5));
}

function desencriptarTexto() {
    let textUsuario = document.getElementById('textUsuario').value;
    asignarTextoElemento('#textResult', descifrar(textUsuario, 5));
    console.log(descifrar(textUsuario, 5));
}


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    
    if (elementoHTML) {  // Verifica que el elemento existe
        elementoHTML.innerHTML = texto;
    } else {
        console.error(`El elemento "${elemento}" no fue encontrado.`);
    }
}

function cifrar(texto, desplazamiento = 5) {
    const alfabetoMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alfabetoMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    let textoCifrado = '';

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        
        // Cifra letras mayúsculas
        if (alfabetoMayusculas.includes(caracter)) {
            let indice = alfabetoMayusculas.indexOf(caracter);
            let nuevoIndice = (indice + desplazamiento) % 26;
            nuevoIndice = nuevoIndice < 0 ? nuevoIndice + 26 : nuevoIndice; // Maneja desplazamientos negativos
            textoCifrado += alfabetoMayusculas[nuevoIndice];
        }
        // Cifra letras minúsculas
        else if (alfabetoMinusculas.includes(caracter)) {
            let indice = alfabetoMinusculas.indexOf(caracter);
            let nuevoIndice = (indice + desplazamiento) % 26;
            nuevoIndice = nuevoIndice < 0 ? nuevoIndice + 26 : nuevoIndice; // Maneja desplazamientos negativos
            textoCifrado += alfabetoMinusculas[nuevoIndice];
        } 
        // Agrega otros caracteres sin cifrar
        else {
            textoCifrado += caracter;
        }
    }

    return textoCifrado;
}

function descifrar(texto, desplazamiento = 5) {
    return cifrar(texto, -desplazamiento); // Revertir el desplazamiento
}


