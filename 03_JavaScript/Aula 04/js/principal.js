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
    
    if (altura < 0 || altura > 3.00) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    
    if (alturaEhValida && pesoEhValido) {
        // Calcula o IMC e mostra e atribuimos o seu valor na tabela (tdImc)
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

// Seleciona o botão 
// e adiciona um "escutador de evento", que espera um click
// previne o comportamento padrão do botão (recarregar a página)
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    // Seleciona o formulário
    var form = document.querySelector("#form-adiciona");

    // Pega os valores nos inputs do form
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // Cria elementos no HTML
    // Um <tr> e preenche com <td>s que contém os valores do form
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd .textContent = altura;
    gorduraTd.textContent = gordura;

    // Adiciona os <td>s criados ao elemento pacienteTr (tr)
    // Como filhos
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    // Seleciona a tabela
    // Coloca (appendChild) a tr pacienteTr como filha da tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    console.log("Oi, cliquei no botão!");
})
