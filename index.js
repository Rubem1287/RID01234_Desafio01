let tarefas = [{tarefa:'comprar pão',etiqueta:'vermelha'}, 
    {tarefa:'passear com o cachorro',etiqueta:'rosa'}, 
    {tarefa:'fazer o almoço',etiqueta: 'verde'}, 
    {tarefa:'tomar café',etiqueta:'laranja'},
    {tarefa:'fazer a janta', etiqueta:'amarela'}];
    let contador;



    

function renderizar() {
    let lista = document.getElementById("lista");
    lista.innerHTML = ""; // Limpa a lista antes de renderizar
    let contador = 0;
    tarefas.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = `${item.tarefa} <<<>>> ${item.etiqueta}`;
        
        console.log(item);
        contador ++;

        let botãoConcluir = document.createElement("button");
        botãoConcluir .textContent = "Concluir";
        botãoConcluir .onclick = function () {
            riscarTarefa(item);
        };
        lista.appendChild(li);
        li.appendChild(botãoConcluir);
        
        
    });
    console.log(contador);

     
        document.getElementById('contador').innerHTML = 'Tarefas: ' + (contador);
        contador=0;
 
    
}


function riscarTarefa(item)
{
    let lista_riscada = [];
    let listaRiscada = [];
    
    listaRiscada = document.getElementById('lista-riscada')
    console.log(listaRiscada);
    
    lista_riscada.push({tarefa:item.tarefa, etiqueta: item.etiqueta});
    lista_riscada.forEach((item,indice) => {
        let li_riscado = document.createElement('li')
        let imagens = document.getElementById('imagens');
        let img = document.createElement('img');
        img.src = "imgs/check-mark.png";
        img.alt ='imagem check';
        img.width=20;
        img.height=20;
        li_riscado.textContent= `${item.tarefa} <<<>>> ${item.etiqueta}`;
        listaRiscada.appendChild(li_riscado);
        imagens.appendChild(img);
       
        tarefas = tarefas.filter(e => e !== item);
        delete tarefas[indice];
        console.log(tarefas);
        renderizar();

    });
    

}


function salvarTarefa() {

let tarefa = document.getElementById("tarefa").value;
let etiqueta = document.getElementById('etiqueta').value;

tarefas.push({tarefa:tarefa,etiqueta:etiqueta})
console.log(tarefas)

let lista = document.getElementById("lista");


let li = document.createElement("li");


console.log(tarefas)


  
let botaoRemover = document.createElement("button");
botaoRemover.textContent = "Concluir";

li.textContent = `${tarefas.tarefa} <<<>>> ${tarefas.etiqueta}`;

lista.appendChild(li);

lista.appendChild(botaoRemover);
renderizar();
}


document.addEventListener("DOMContentLoaded", renderizar);
