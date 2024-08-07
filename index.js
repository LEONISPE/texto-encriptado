function encriptar(){
let texto = document.getElementById("texto").value;
let titulomensaje = document.getElementById("titulomensaje");
let parrafo = document.getElementById("parrafo");
let muñeco = document.getElementById("muñeco");
/** esta funcion sirve para remplazar las letras que dijite el usuario*/

let textoCifrado = texto
                .replace(/e/gi,"enter")
                .replace(/i/gi, "imes")
                .replace(/a/gi,"ai")
                .replace(/o/gi, "over")
                .replace(/u/gi,"ufat");


                if(texto.length !=0){
                    document.getElementById("texto").value = textoCifrado;
                    titulomensaje.textContent = "texto encriptado con exito";
                    parrafo.textContent= "";
                   muñeco.src = "./imagenes/desencriptado.jpg";
                }else{
                    parrafo.textContent = " ingresa el texto que deseas encriptar o desencriptar";
                    titulomensaje.textContent = "ningun mensaje fue encontrado";
                    muñeco.src = "./imagenes/images.jpeg";
                    alert("debes ingresar algun texto");
                }
                
}
function desencriptar(){
 let texto = document.getElementById("texto").value;

let textoCifrado = texto 
.replace(/enter/gi, "e")
.replace(/imes/gi, "i")
.replace(/ai/gi,"a")
.replace(/over/gi, "o")
.replace(/ufat/gi,"u");
if(texto.length !=0){
    document.getElementById("texto").value = textoCifrado;
    titulomensaje.textContent = "texto desencriptado con exito";
    parrafo.textContent= "";
   muñeco.src = "./imagenes/encriptador.webp";
}else{
   
    parrafo.textContent = " ingresa el texto que deseas encriptar o desencriptar";
                    titulomensaje.textContent = "ningun mensaje fue encontrado";
                    muñeco.src = "./imagenes/images.jpeg";
                    alert("debes ingresar algun texto");
}

}