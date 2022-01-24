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
    
    // Valida peso e altura, usando as funções para validar
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);  
    
    // Se o peso não for válido
    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        // Não é recomendado modificar o aspecto visual no JS
        // Este é o papel do CSS!
        // paciente.style.backgroundColor = "red";
        paciente.classList.add("paciente-invalido");
    }
    
    // Se a altura não for válida
    if (!alturaEhValida) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    
    if (alturaEhValida && pesoEhValido) {
        // Calcula o IMC e mostra e atribuimos o seu valor na tabela (tdImc)
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

// Cria função para calcular IMC
function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}


function validaPeso(peso){

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}