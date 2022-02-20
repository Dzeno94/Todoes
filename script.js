
var allTodoes=[];

function renderAllTodoes(){
    var list=document.querySelector("ul.list-group");
    list.innerHTML="";
    allTodoes.forEach((todo,index) => {       
        var li = document.createElement("li");
        li.style="list-style-type:none;"
       
        var div= document.createElement("div");
        div.style.border="1px solid blue";
        div.classList.add("d-flex");
        div.classList.add("justify-content-between");
        var input= document.createElement("input");
        input.type="checkbox";
        input.style="margin-top:4%"
        var label = document.createElement("label");
        label.innerHTML=todo.value;
        label.style="margin-top:2%"
        var divBtn= document.createElement("div");
        var editbtn = document.createElement("button");
        editbtn.id="edit-"+index;
        editbtn.innerHTML="EDIT";
        editbtn.classList.add("btn");
        editbtn.classList.add("btn-primary");
        editbtn.addEventListener("click",(e)=>editTodo(e))
        var delbtn= document.createElement("button");
        delbtn.id="delete-"+index;
        delbtn.addEventListener("click",(e)=>deleteTodo(e))
        delbtn.innerHTML="DELETE";
        delbtn.classList.add("btn");
        delbtn.classList.add("btn-danger"); 

    list.appendChild(li);
    list.appendChild(div);
    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(divBtn);
    divBtn.appendChild(editbtn);
    divBtn.appendChild(delbtn);
    console.log(allTodoes)
        
    });
}

function addTodo(){
    var inputEl= document.getElementById("todo");
   allTodoes.push({value:inputEl.value});
   renderAllTodoes();

}
renderAllTodoes();


function deleteTodo(e){
    
    var btnId=e.target.id;
    var index=btnId.split("delete-")[1];
   
    allTodoes.splice(parseInt(index),1);
    
    
    renderAllTodoes();

   
}
function editTodo(e){
    var btnId=e.target.id;
   
    var index=parseInt(btnId.split("edit-")[1]);
    console.log(allTodoes[index],index)
   allTodoes[index].value=prompt("Editujte svoj todo")
  




    renderAllTodoes();
}

  