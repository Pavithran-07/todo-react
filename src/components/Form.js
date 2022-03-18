import React from "react";
import '../App.css';
import TodoList from "./TodoList";

const Form = ({inputText, setInputText, todos, setTodos}) => {

    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    }

    const submitTodoHandler = (event) => {
        event.preventDefault();
        setTodos([...todos, {text: inputText, id: Math.random() * 1000 ,completed: false}]);
        setInputText('');
    }

    return (
        
          <form>
          <h4><b>Todo List</b></h4>
          <input className='todoInput' onChange={inputTextHandler} value={inputText} type="text" placeholder="Add Todo..."/>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className='addTodoBtn' onClick={submitTodoHandler}>Add</button>
            <hr></hr>
          </form>
    )
}

export default Form;