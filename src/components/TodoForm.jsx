import React, {useState} from "react";


export const TodoForm = ({addTodo,todo_input,todo_btn}) =>
{
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit} >
            <input type='text' className={todo_input} placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)} value={value}/>
            <button type='submit' className={todo_btn}>Add task</button>
        </form>
    )
}