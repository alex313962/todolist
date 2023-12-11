import React, {useState} from "react";


export const TodoFormEdit = ({editTodo,task,todo_input,todo_btn}) =>
{
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("");
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit} >
            <input type='text' className={todo_input} placeholder='Update task' onChange={(e) => setValue(e.target.value)} value={value}/>
            <button type='submit' className={todo_btn}>Update</button>
        </form>
    )
}