// Seleciona o campo de filtro
var campoFiltro = document.querySelector("#filtrar-tabela");

// Para cada tecla digitada (input), rodamos a função
campoFiltro.addEventListener("input", function() {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    
    // Se digitar alguma coisa, compara com o nome dos pacientes
    // Se não encontrar o paciente, adiciona a classe invisível
    // Se encontrar, remove a mesma
    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            // Cria a expressão regular
            // O primeiro parâmetro é o texto que queremos buscar
            // No segundo, indicamos que a busca é case insensitive
            var expressao = new RegExp(this.value, "i");

            // Testamos se um pedaço do nome do paciente possui as
            // letras digitadas no campo de busca (expressao)
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } 
    // Se nada for digitado, remove a classe invisível (mostra tudo outra vez)
    else {

        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});