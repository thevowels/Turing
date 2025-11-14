var todos = require('../dummy/data');



async  function getAllTodos(){
    return todos;
}
async function getTodoById(id){
    return todos[id-1];
}

async function saveTodo(todo)
{
    console.log('saving todo',todo);
    return 0;
}

async function updateTodo(todo)
{
    console.log('updating todo', todo);
    return 0;
}

async function deleteTodo(id)
{
    console.log('deleting todo of id : ', id);
    return 0;
}

module.exports = {
    getAllTodos,
    getTodoById,
    saveTodo,
    updateTodo,
    deleteTodo
}