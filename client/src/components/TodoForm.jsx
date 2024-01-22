import { useState } from "react";

export default function TodoForm({ onAddTodo }) {

    const [value, setValue] = useState("");

    function handleSubmit(evt){
        evt.preventDefault();
        onAddTodo(value);
        setValue("");
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>

            <input type="text" 
                value={value} 
                className="todo-input" 
                placeholder="Write a task"
                onChange={(evt) => setValue(evt.target.value)}
            />

            <button type="submit" className="todo-btn">Add Task</button>

        </form>
    )
}
