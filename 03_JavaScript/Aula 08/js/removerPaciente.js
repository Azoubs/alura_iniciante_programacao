// Seleciona a tabela
var pacientes = document.querySelectorAll(".paciente");

// Se selecionarmos com o elemento, o thead poderia ser excluído
// Por isso, usamos o id
var tabela = document.querySelector("#tabela-pacientes");

// Adiciona um escutador na tabela
// Por conta do Event Bubbling, quando um evento ocorre dentro 
// De um elemento, ele vai 'subindo' e é escutado pelo pai do elemento,
// Pelo pai do pai etc etc
tabela.addEventListener("dblclick", function(event) {
    /*
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover 
    paiDoAlvo.remove();
    */
    // Adicionamos a classe fadeOut quando damos o duplo clique
    // Esperamos meio segundo e removemos o elemento
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function() {
        // O evento foi escutado em toda a table, mas o target é
        // Onde ele ocorreu de fato. Removemos o pai [parentNode] (a tr)
        event.target.parentNode.remove();
    }, 500);
});