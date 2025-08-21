const todoList = [ {
  
name:  'make dinner' ,
dueDate : '2025-12-22'},
{name : 'wash dishes',
  dueDate: '2025-08-18'
}];

renderTodoList();
function renderTodoList(){
  let todoListHtml = '';

  for (let i = 0 ; i< todoList.length; i++){
    const todoObject = todoList[i];
    const {name , dueDate }= todoObject ;
    const html = `
    <div> ${name} </div>
    <div>  ${dueDate} </div>
     <button onclick="
     todoList.splice(${i} , 1);
     renderTodoList();
     " class="delete">Delete</button>
   
    `;
    todoListHtml +=html;
  }

  document.querySelector('.js-todo-list').innerHTML= todoListHtml;
}

function addTodo(){
 const inputElement=  document.querySelector('.js-name-input');
 const dateInputElement = document.querySelector('.js-due-date-input');

  const name = inputElement.value;
  const dueDate = dateInputElement.value;
  if (!name.trim() || !dueDate) return;

  todoList.push({
    name , 
    dueDate
   });

  inputElement.value= ''; // clear the text input

  renderTodoList();

}
