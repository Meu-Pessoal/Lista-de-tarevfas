//DECLARANDO AS VARIAVEIS
let tarefas =[];

//FUNÇÃO QUE VALIDA O CAMPO

const validarCampo=()=>{
    let valida =false;
    if(document.getElementById("task").value =="") valida=true;
    return valida;
}
//FUNÇÃO PARA ADICIONAR TAREFA

function adicionarTarefa(){

    let linhas =document.getElementById("task");

    if(validarCampo()){
        alert("Preencha o campo da tarefa")
    }   
    else{
        tarefas.push(linhas.value);
        linhas.value="";
        listarTarefas();
    }
    document.getElementById("task").focus();
}


//FUNÇÃO LISTAR TAREFAS

function listarTarefas(){
    let valor="";
    for(let i=0; i <tarefas.length;i++){
        valor += tarefas[i] + "<br>";
    }
    document.getElementById("lista").innerHTML =valor;
}

//FUNÇÃO REMOVER TAREFA

function removerTarefa(){
    tarefas.pop();// pop- remove o ultimo item
    listarTarefas();
}

