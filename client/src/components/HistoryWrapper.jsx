import { useEffect, useState } from "react"
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function HistoryWrapper() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/tasks-history")
            .then(response => response.json())
            .then(data => {
               setTodos(data.map(task => ({...task, isEditing: false})))
            })
    }, [])

    async function handleAddTodo(taskName) {
        console.log(taskName)

        try {
            const response = await fetch('http://localhost:3030/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ label: taskName })
            });

            if(response.ok) console.log(response)
            else console.error('Error al crear el todo');

        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    }

    return (
        <>
            <div className="TodoWrapper">
                <h1>Task from <u>backend</u></h1>

                <TodoForm onAddTodo={handleAddTodo} />
                
                { todos.map( (task,index) => <Todo key={index} task={task} />) } 
            </div>       
        </>
    )
}