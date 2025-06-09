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
        Swal.fire({
            icon:"warning",
            title:"Atenção",
            text:"Preencha o campo da tarefa",
            confirmButtonColor:"#3085d6",
            confirmButtonText:"OK"
        });
        
    }   
    else{
        tarefas.push(linhas.value);
        linhas.value="";
        listarTarefas();
        Swal.fire({
            icon:"success",
            title:"Tarefa Adicionada",
            showConfirmButton:false,
            timer:1500
        });
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
    if (tarefas.length == 0) {
        Swal.fire({
            icon:"info",
            title:"Nenhuma tarefa para remover",
            text:"Sua Lista de Tarefas está vazia",
            confirmButtonColor:"#ffff00",
            confirmButtonText:"OK"
        })
        return
    }
    Swal.fire({
        icon:"warnning",
        title:"Remover Tarefa?",
        text:"Tem certeza que deseja remover a tarefa ?",
        showCancelButton:true,    
        confirmButtonColor:"#4F0D30FF",
        cancelButtonColor: "#d33",
        confirmButtonText:"Sim,remover",
        confirmButtonText:"Sim"
    }).then((result)=>{
        if(result.isConfirmed){
            tarefas.pop();// pop- remove o ultimo item
            listarTarefas();
            Swal.fire(
                "Removido",
                "Tarefa Removida",
                "success"
            )
        }
    })  
}