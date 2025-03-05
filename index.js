let tarefas = [
    { id: 1, descricao: 'comprar pão', checked: false },
    { id: 2, descricao: 'passear com o cachorro', checked: false },
    { id: 3, descricao: 'fazer o almoço', checked: false },
    { id: 4, descricao: 'tomar café', checked: false },
    { id: 5, descricao: 'fazer a janta', checked: false },

]


    function redenrizar(){
    let lista = document.getElementById("lista");
    lista.innerHTML="";
    tarefas.forEach((item) => {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");

    li = item;
  
    checkbox.type = "checkbox";
    checkbox.checked = item.checked;
  
    console.log(li);
    lista.appendChild(li);

    //document.getElementById("lista").appendChild(checkbox);
    
});}
    







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


document.addEventListener("DOMContentLoaded", redenrizar)