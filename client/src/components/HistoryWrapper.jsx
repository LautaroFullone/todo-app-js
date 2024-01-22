import { useEffect, useState } from "react"
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { useTodos } from "../hooks/useTodos";

export default function HistoryWrapper() {

    const [todos, setTodos] = useState([]);
    const { getHistoryTodos } = useTodos();


    useEffect( () => {
        async function getData(){
            setTodos(await getHistoryTodos())
        }
       
        getData()
    }, [])

    async function handleAddTodo(taskName) {
        console.log('adding: ',taskName)

        try {
            const response = await fetch('http://localhost:3030/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ label: taskName })
            });

            if(response.ok){
                const data = await response.json();
                console.log('data retrived: ',data)
                setTodos(data)
            }
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