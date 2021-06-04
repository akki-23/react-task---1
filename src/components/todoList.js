import React from 'react';
import Todo from "./todo";


const TodoList = ({todos, setTodos, filteredTodos, setUpdateTodos}) => {
    //console.log(todos);
    return (
        <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map((todo) => (
               <Todo
               setTodos={setTodos}
               todos={todos}
               key={todo.id}
               todo={todo}
               text={todo.text}
               setUpdateTodos = {setUpdateTodos} 
               />
            ))}
        </ul>
    </div>
    );
};

export default TodoList;