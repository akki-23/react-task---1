import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/form";
import TodoList from "./components/todoList";

function App() {
    //state
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilterTodos] = useState([]);
    const [updateTodos, setUpdateTodos] = useState(null);

    // run once when the app start
    useEffect(() => {
        // get from local
        const getLocalTodos = () => {
            if (localStorage.getItem("todos") === null) {
                localStorage.setItem("todos", JSON.stringify([]));
            }
            else {
                let todoLocal = JSON.parse(localStorage.getItem("todos"));
                setTodos(todoLocal);
                //console.log(todoLocal);
            }
        };
        getLocalTodos();
    }, []);

    // effect
    useEffect(() => {
        //console.log("hey");
        const filterHandler = () => {
            switch (status) {
                case "completed":
                    setFilterTodos(todos.filter(todo => todo.completed === true));
                    break;
                default:
                    setFilterTodos(todos);
                    break;
            }
        };
        // save to local
        const saveLocalTodos = () => {
            localStorage.setItem("todos", JSON.stringify(todos));
        };
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    return (
        <div className="App" >
            <header>
                <h1>To-Do Application </h1>
            </header>
            <Form inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
                setStatus={setStatus}
                updateTodos = {updateTodos}
                setUpdateTodos = {setUpdateTodos}
            />
            <TodoList setTodos={setTodos}
                todos={todos}
                filteredTodos={filteredTodos}
                setUpdateTodos = {setUpdateTodos}
            />
        </div >
    );
}

export default App;