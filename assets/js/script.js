// 1 - ADICIONAR IDS NOS BOTÕES**
    //1..4**
// 2 - SELECIONAR OS BOTÕES**
// 3 - INTERCEPTAR O EVENTO DE CLIQUE**
// 4 - RECUPERAR O ID ADICIONADO**


//SELECIONANDO UL (LISTA)
const listaOpcoes = document.querySelector(".secaoDetalhesConta__opcoesTransacoes");

//ADICIONANDO ESCUTADOR DE EVENTOS
listaOpcoes.addEventListener("click", indentificadorOpcoes);
//EXECUTANDO AÇÃO DEPOIS DO CLIQUE
function indentificadorOpcoes(event) {
    //IDENTIFICANDO ONDE OCORREU O CLIQUE
    const li = event.target;

    //VERIFICANDO SE É UM LI
    if(li.tagName == "LI"){

        //RECUPERANDO O ID
        const id = li.id;

        //SELECIONANDO UMA SEÇÃO UTILIZANDO O ID (ESCOLHA DO USUÁRIO)
        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`);

        //REMOVENDO CLASSES MOSTRAR
        removeClasseMostrar()

        //ADICIONAR UMA CLASSE
        secaoEscolha.classList.add("mostrar");
    }
}


//FUNÇÃO PARA REMOVER AS CLASSES DAS DIVS
function removeClasseMostrar() {
    const divs = document.querySelectorAll(".secaoTransacao .container div");

    for(let i = 0; i < divs.length; i++) {
        divs[i].classList.remove("mostrar")
    }
}