import React from 'react'
// import Todo from '../models/todo'
import classes from './TodoItem.module.css'

const TodoItem:React.FC<{text:string;onRemove:()=> void}> = (props) => {
    return <li className={classes.item} onClick={props.onRemove}>{props.text}</li>
}

export default TodoItem;