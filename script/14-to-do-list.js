const todolist=[{
  name : 'skd ode',
  dueDate : '01-08-2024'
},{
  name: 'make dishes',
  dueDate: '01-08-2024'
}];

rendertodolist();

function rendertodolist(){
let todolistHTML='';
for(let i=0;i<todolist.length;i++){
  const todoobject=todolist[i];
  const name=todoobject.name;
  const dueDate=todoobject.dueDate;
  const html=`
  <div>${name}</div>
  <div>${dueDate}</div>
  <button onclick="
  todolist.splice(${i},1);
  rendertodolist();
  " class="delete-button">Delete</button>`
  
  todolistHTML+=html;

}

document.querySelector('.js-todo-list')
.innerHTML=todolistHTML;
}

function addtodo(){
  const inputelement=document.querySelector(
    '.js-name-input');
  const name=inputelement.value;
  const dateselect=document.querySelector('.js-due-date');
  const dueDate=dateselect.value;

  todolist.push({
    name: name,
    dueDate: dueDate
  });
 
  inputelement.value='';
  rendertodolist();
}