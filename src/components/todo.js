import React from 'react';

const Todo = ({ text, todo, todos, setTodos, setUpdateTodos }) => {
    //events
    const deleteHandler = () => {
        //console.log(todo);
        setTodos(todos.filter((element) => element.id !== todo.id));
    };
    const checkedHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };
    const editHandler = ({id}) => {
        const findTodo = todos.find((todo)=> todo.id === id);
        setUpdateTodos(findTodo);
    };
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={checkedHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
            <button className = "edit-btn" onClick ={ (() =>editHandler(todo)) }>
                <i className = "fas fa-edit"></i>
            </button>
        </div>
    );
}

export default Todo;