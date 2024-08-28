function criptografia() {
    let texto = document.querySelector("#textoarea").value;

    let criptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "obter")
        .replace(/u/g, "ufat");

    document.querySelector(".mensagem").value = criptado;
}

function descriptografia() {
    let texto = document.querySelector("#textoarea").value;

    let descriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/obter/g, "o")
        .replace(/ufat/g, "u");

    document.querySelector(".mensagem").value = descriptado;
}

function copia() {
    let copiado = document.querySelector(".mensagem").value;
    navigator.clipboard.writeText(copiado)
}





