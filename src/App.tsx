import React from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';


function App() {  

  
//I made some changes here
console.log('hi');

  return (
    <TodosContextProvider>
    <NewTodo />
    <Todos />
    </TodosContextProvider>
  );
}

export default App;
