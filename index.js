let tarefas = [
    { id: 1, descricao: 'comprar pão', checked: false },
    { id: 2, descricao: 'passear com o cachorro', checked: false },
    { id: 3, descricao: 'fazer o almoço', checked: false },
    { id: 4, descricao: 'tomar café', checked: false },
    { id: 5, descricao: 'fazer a janta', checked: false },

]

let lista_riscada=[];

    

function renderizar() {
    let lista = document.getElementById("lista");
    lista.innerHTML = ""; // Limpa a lista antes de renderizar

    tarefas.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item.descricao;

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = item.checked;
        checkbox.onchange = function () {
            tarefas[index].checked = checkbox.checked;
        };

        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "X";
        botaoRemover.onclick = function () {
            riscarTarefa(index,item);
        };
        lista.appendChild(li);
        li.appendChild(botaoRemover);
        li.appendChild(checkbox);
        
    });
}





function salvarTarefa() {
  const tarefa = document.getElementById("tarefa").value;
  

  tarefas.push(tarefa);

  
  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "X";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.textContent = tarefa;

  document.getElementById("lista").appendChild(li);
  document.getElementById("lista").appendChild(checkbox);
  document.getElementById("lista").appendChild(botaoRemover);

  botaoRemover.onclick = function () {
    removerTarefa(tarefa, checkbox, li, botaoRemover);
  };
}


function riscarTarefa(index, item)
{
    let tarefa = document.getElementById(`tarefa-${index}`);
    let listaRiscada = document.getElementById('lista-riscada')
    let li = document.createElement('li')
    li.textContent = item.descricao;

    if (tarefas[index.checked])
    {
        lista_riscada = li.style.textDecoration = 'line-through';
        listaRiscada.appendChild(li);
    }
    else
    {
        li.style.textDecoration = 'none';
    }

}

// // Função para remover uma tarefa
// function removerTarefa(index) {
//     // Remove a tarefa do array com splice
//     tarefas.splice(index, 1);

//     // Atualiza a lista renderizada
//     renderizar();
// }

document.addEventListener("DOMContentLoaded", renderizar);
