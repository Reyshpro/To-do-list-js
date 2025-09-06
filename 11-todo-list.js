const todoList = [ {
  
name:  'make dinner' ,
dueDate : '2025-12-22'},
{name : 'wash dishes',
  dueDate: '2025-08-18'
}];

renderTodoList();
function renderTodoList(){
  let todoListHtml = '';
  todoList.forEach((todoObject , index)=>{
   
    const {name , dueDate }= todoObject ;
    const html = `
    <div> ${name} </div>
    <div>  ${dueDate} </div>
     <button class="delete js-delete-button">Delete</button>
   
    `;
    todoListHtml +=html;
  });


  document.querySelector('.js-todo-list').innerHTML= todoListHtml;

  document.querySelectorAll('.js-delete-button').forEach(
    (deleteButton , index) => {
      deleteButton.addEventListener('click', ()=>{
         todoList.splice(index , 1);
     renderTodoList();
      })
    }
  );
  
}
document.querySelector('.js-add-button').addEventListener('click',()=>{
  addTodo();
});

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
