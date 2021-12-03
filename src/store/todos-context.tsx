import React, { useState } from "react";
import Todo from "../models/todo";


type TodoContextObj = {
    items:Todo[];
    addTodo:(text:string)=> void;
    removeTodo:(id:string)=> void;
};

export const TodosContext = React.createContext<TodoContextObj>({
    items:[],
    addTodo:() =>{},
    removeTodo:(id:string)=>{}
})

const TodosContextProvider:React.FC = (props) => {
    
const [todos,setTodos] = useState<Todo[]>([]);

const AddedTodo= (todo:string) => {
   
    const newTodo = new Todo(todo);
    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo);
    });
    
  }

  const RemoveHandler = (todoId:string) => {
    
    setTodos((prevTodos) => {
     return prevTodos.filter((todo)=>todo.id!== todoId);
    });
  }
  const constValue:TodoContextObj = {
      items:todos,
      addTodo:AddedTodo,
      removeTodo:RemoveHandler
  }
  return <TodosContext.Provider value={constValue}>{props.children}</TodosContext.Provider>
}

export default TodosContextProvider;