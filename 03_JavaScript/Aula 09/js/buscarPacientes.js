

// Seleciona o botão
var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function() {
    console.log("Buscando pacientes...");

    // Cria a requisição e acessa o endereço
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    // Quando a requisição "loadar", pega a resposta e transforma em texto
    // "Parseia" a resposta para um objeto JS
    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        // Só roda se der tudo certo (status 200)
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            
            // Para cara paciente de pacientes, adiciona na tabela
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }
        else {
            erroAjax.classList.remove("invisivel");
        }

    });

    // Realiza a requisição
    xhr.send();
});
