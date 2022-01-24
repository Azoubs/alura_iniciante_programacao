var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// Seleciona o paciente
var paciente = document.querySelector("#primeiro-paciente");

// Seleciona os elementos (td) no paciente
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");

// Pega o conteúdo dos elementos selecionados
var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

// Valida peso e altura
var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}

if (altura < 0 || altura > 3.00) {
    console.log("Altura inválida");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
}

if (alturaEhValida && pesoEhValido) {
    // Calcula o IMC e mostra e atribuimos o seu valor na tabela (tdImc)
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}