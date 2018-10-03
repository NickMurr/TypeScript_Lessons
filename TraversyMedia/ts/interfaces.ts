/* function showToDo(todo: {title:string, text:string}) {
  console.log(`${todo.title}: ${todo.text}`);
}

let myTodo = { title: 'Trash', text: 'Take Out Trash' };

showToDo(myTodo);
 */

interface Todo {
  title: string;
  text: string;
}

function showTodo(todo: Todo) {
  console.log(`${todo.title}: ${todo.text}`);
}
let myTodo = [
  {  title: 'Trash',  text: 'Take Out Trash' },
  {  title: 'Food',  text: 'by some food' },
];

showTodo(myTodo[1]);
