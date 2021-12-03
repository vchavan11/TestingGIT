import React, { useRef,useContext } from "react"
import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todos-context";

const NewTodo:React.FC= () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    // const NewtodoItem = useRef('');
    const todoCtx = useContext(TodosContext);

    const SubmitHandler = (e:React.FormEvent) => {
      e.preventDefault();
      const enteredText = todoTextInputRef.current!.value;
      todoCtx.addTodo(enteredText);

    }

    return (
        <form onSubmit={SubmitHandler} className={classes.form}>
            <label htmlFor="todo">Todo Text</label>
            <input type="text" id="todo" ref={todoTextInputRef} required/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo
