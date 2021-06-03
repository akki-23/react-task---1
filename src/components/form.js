import React from 'react';

const Form = ({inputText,setInputText, todos, setTodos,setStatus}) => {
    const inputTextHandler = (event) => {
       // console.log(event.target.value);
        setInputText(event.target.value);
    };
    const submitTodoHandler = (event) =>{
       // console.log(event);
        event.preventDefault();
        setTodos([
            ...todos, 
            {text: inputText, completed: false, id: Math.random()*100 },
        ]);
            setInputText("");
    };
    const statusHandler = (event) =>{
        //console.log(event.target.value);
        setStatus(event.target.value);
    }
    return(
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
            </select>
        </div>
    </form>
    )
}

export default Form;