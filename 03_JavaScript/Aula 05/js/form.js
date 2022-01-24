// Seleciona o botão 
// e adiciona um "escutador de evento", que espera um click
// previne o comportamento padrão do botão (recarregar a página)
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    // Seleciona o formulário
    // Obtém paciente do formulário
    // Cria uma tr com o paciente obtido
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente); 

    // Seleciona a tabela & coloca (appendChild) a tr pacienteTr como filha da tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    // Reseta o formulário quando adicionar o paciente
    form.reset();
});

// Função para obter o paciente do formulário
// Cria um objeto com o paciente
function obtemPacienteDoFormulario(form) {
    var paciente = {
        // Pega os valores nos inputs do form e coloca como atributos do objeto
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    // Retorna o objeto paciente
    return paciente;
}

// Recebe o paciente e cria uma tr com seus dados
function montaTr(paciente) {
    // Cria elementos no HTML
    // Um <tr> e preenche com <td>s que contém os valores do form
    // Adiciona a classe paciente ao pacienteTr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // Monta as tds com as infos extraídas dos pacientes
    // Adiciona as tds como filhas do paciente Tr
    // Assim, economiza na quantidad de código (não precisa criar
    // todas as variáveis etc)
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}


