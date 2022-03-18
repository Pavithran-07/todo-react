import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {

    return (
        <div>
            <ul className="todoList">
                {todos.map((todo) => (
                    
                    <Todo
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                    key={todo.id}
                    text={todo.text}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;