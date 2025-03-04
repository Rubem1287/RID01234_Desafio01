let tarefas = [
    { id: 1, descricao: 'comprar pão', checked: false },
    { id: 2, descricao: 'passear com o cachorro', checked: false },
    { id: 3, descricao: 'fazer o almoço', checked: false },
    { id: 4, descricao: 'tomar café', checked: false },
    { id: 5, descricao: 'fazer a janta', checked: false },

]


    
    let lista = document.getElementById("lista");
    tarefas.forEach((item) => {
    let li = document.createElement("li");
    li = item.descricao;
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.checked;
  
    console.log(li);
    document.getElementById("lista").appendChild(li);

    //document.getElementById("lista").appendChild(checkbox);
    
});






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


