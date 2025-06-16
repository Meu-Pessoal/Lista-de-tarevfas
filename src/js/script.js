//DECLARANDO AS VARIAVEIS
let tarefas =[];

//FUNÇÃO QUE VALIDA O CAMPO

const validarCampo=()=>{
    let valida =false;
    if(document.getElementById("task").value =="") valida=true;
    return valida;
}

const validarCampoEdit = ()=> {
    let valida =false;
    if(document.getElementById("taskEdit").value =="") valida=true;
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


const taskInput = document.getElementById("task")

if (taskInput) {
    taskInput.addEventListener("keypress", (e)=>{
        if (e.key == 'Enter') {
            e.preventDefault()
            adicionarTarefa()
        }
    })
}



//FUNÇÃO LISTAR TAREFAS

function listarTarefas(){
    let valor="";
    for(let i=0; i <tarefas.length;i++){
        valor += `
        <div class="task-item">
            <p>${tarefas[i]}</p>
            <div class="botoes">
                <button class="botao" onclick="editarTarefa(${i})">Editar</button>
                <button class="botao" onclick="removerTarefa(${i})">Remover</button>
            </div>
        </div>
        `
    }
    document.getElementById("lista").innerHTML =valor;
}

//FUNÇÃO REMOVER TAREFA

function removerTarefa(indice){
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
        title:"Remover Tarefa",
        text:"Tem certeza que deseja remover a tarefa ?",
        showCancelButton:true,    
        confirmButtonColor:"#f63e01",
        cancelButtonColor: "#b1aeae",
        confirmButtonText:"Sim, remover",
        confirmButtonText:"Sim"
    }).then((result)=>{
        if(result.isConfirmed){
            tarefas.splice(indice, 1);// pop- remove o ultimo item
            listarTarefas();
            Swal.fire(
                "Removido",
                "Tarefa Removida",
                "success"
            )
        }
    })  
}

const lista = document.getElementById("lista")
const container = document.getElementById("container")
const campoEditar = document.getElementById("containerEditar")

function editarTarefa (indice) {
    lista.classList.remove("active")
    container.classList.remove("active")
    campoEditar.classList.add("active")

    document.getElementById("taskEdit").value = tarefas[indice]
    indiceEditar = indice
    document.getElementById("taskEdit").focus()
}

function salvarTarefa () {
    if (validarCampoEdit()) {
        Swal.fire({
            icon:"warning",
            title:"Atenção",
            text:"Preencha o campo da tarefa",
            confirmButtonColor:"#3085d6",
            confirmButtonText:"OK"
        })
    } else if (indiceEditar !== -1) {
        tarefas[indiceEditar] = document.getElementById("taskEdit").value
        indiceEditar = -1
        listarTarefas()
        Swal.fire({
            icon:"success",
            title:"Sucesso",
            text:"Tarefa editada com sucesso",
            confirmButtonColor:"#3085d6",
            confirmButtonText:"OK"
        })
        lista.classList.add("active")
        container.classList.add("active")
        campoEditar.classList.remove("active")
    } else {
        Swal.fire({
            icon:"warning",
            title:"Atenção",
            text:"Preencha o campo da tarefa",
            confirmButtonColor:"#3085d6",
            confirmButtonText:"OK"
        })
    }
    document.getElementById("task").focus()
}