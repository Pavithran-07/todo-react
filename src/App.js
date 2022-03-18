import './App.css';
import Form  from './components/Form';
import React,{useState,useEffect} from 'react';
import TodoList from './components/TodoList';


function App() {

  // Helps to handle the state of the input text
  const [inputText, setInputText] = useState('');

  // Handles the list of Todos
  const [todos, setTodos] = useState([]);

    // Fetching the data from local storage whenever the app loads
  useEffect(() =>{
    getLocalTodos();
    console.log("Using Get");
  },[]);

  // Saving the data to local storage whenever the data changes
  useEffect(() => {
    saveLocalTodos();
  }, [todos]);



  const saveLocalTodos = () =>{
    console.log("Saving", todos);
    localStorage.setItem('todos',JSON.stringify(todos))
  }

  const getLocalTodos = () =>{
    console.log("Get ", todos)
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else{
      let todoLocal= JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
      console.log(todos);
    }
  }


  return (
    <div className="App">
      <div className='card'>
        <div className='container'>
          <Form inputText={inputText}
          setInputText = {setInputText}
          todos = {todos}
          setTodos = {setTodos}
          />
          <TodoList
          todos={todos}
          setTodos={setTodos}
          />
          </div>
          </div>
          </div>
    
  );

  
}

export default App;
