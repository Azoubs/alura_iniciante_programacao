var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// Seleciona todos os pacientes
// Retorna um array
var pacientes = document.querySelectorAll(".paciente");

// Faz o loop pelo array
for(var i = 0; i < pacientes.length; i++) {
    // Seleciona um paciente
    var paciente = pacientes[i];
    
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
        // Não é recomendado modificar o aspecto visual no JS
        // Este é o papel do CSS!
        // paciente.style.backgroundColor = "red";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
}
    
// Cria função para calcular IMC
function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}