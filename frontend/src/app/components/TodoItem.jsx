export default  function  TodoItem({todo, onDelete})
{
    return (
        <div>
            {todo.title}
            &nbsp;
            <button type={"button"} onClick={() => onDelete(todo)} >Delete</button>
        </div>
    )
}