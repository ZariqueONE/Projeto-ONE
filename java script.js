const inputTexto= document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
inputTexto.focus();


function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage="none";
    let sumir = document.getElementById("sumir");
    sumir.innerText="CRIPTOGRAFADO";


}

function btnDesencriptar() {
    const textoDesencriptar = desencriptar(inputTexto.value);
    mensagem.value = textoDesencriptar;
    mensagem.style.backgroundImage="none";
    sumir.innerText="DESCRIPTOGRAFADO";
}

 function btnCopiar(){
     let copiarTexto = document.querySelector(".mensagem");
     copiarTexto.select();
     document.execCommand("cut");
    inputTexto.value = "";
    sumir.innerText = "COPIADO";

    
}



function encriptar(textoParaEncriptar) { 
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "orber"], ["u", "ufat"]  ]
    textoParaEncriptar = textoParaEncriptar.toLowerCase();


 for(let i=0; i < matrizCodigo.length; i++ ) {
        if(textoParaEncriptar.includes(matrizCodigo[i][0])) {
            textoParaEncriptar = textoParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1] )
        }
    }
    return textoParaEncriptar;
}

function desencriptar(textoDesencriptar) { 
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"],["orber", "o"], ["ufat", "u"] ] 
    textoDesencriptar = textoDesencriptar.toLowerCase();

   for(let i=0; i < matrizCodigo.length; i++ ) {
      if(textoDesencriptar.includes(matrizCodigo[i][0])){
          textoDesencriptar = textoDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
      }
   }
return textoDesencriptar;
}

    