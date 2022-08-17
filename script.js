function encriptar(){
    var texto = document.getElementById("input-texto").value.toLowerCase();
    var textocifrado = texto.replace(/e/g, "enter");
    var textocifrado = textocifrado.replace(/i/igm, "imes");
    var textocifrado = textocifrado.replace(/a/igm, "ai");
    var textocifrado = textocifrado.replace(/o/igm, "ober");
    var textocifrado = textocifrado.replace(/u/igm, "ufat");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("textomuneco").style.display = "none";
    document.getElementById("textomuneco2").innerHTML = textocifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("input-texto").value.toLowerCase();
    var textocifrado = texto.replace(/enter/igm, "e");
    var textocifrado = textocifrado.replace(/imes/igm, "i");
    var textocifrado = textocifrado.replace(/ai/igm, "a");
    var textocifrado = textocifrado.replace(/ober/igm, "o");
    var textocifrado = textocifrado.replace(/ufat/igm, "u");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("textomuneco").style.display = "none";
    document.getElementById("textomuneco2").innerHTML = textocifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.getElementById("textomuneco2");
    contenido.select();
    document.execCommand("copy");
}