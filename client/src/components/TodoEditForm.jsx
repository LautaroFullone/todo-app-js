import { useState } from "react";

export default function TodoEditForm({ task, onEditTodo }) {

    const [value, setValue] = useState(task?.label);

    function handleSubmit(evt) {
        evt.preventDefault();
        onEditTodo(value, task.id);
        setValue("");
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>

            <input type="text"
                value={value}
                className="todo-input"
                placeholder="Write a task"
                onChange={(evt) => setValue(evt.target.value)}
                style={{marginTop: 0, marginBottom: 0}}
            />

            <button type="submit" className="todo-btn">Update Task</button>

        </form>
    )
}
