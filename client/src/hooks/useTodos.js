import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export function useTodos() {
    const [todos, setTodos] = useState([])

    function handleAddTodo(todo) {
        let newTodo = { id: uuidv4(), label: todo, isCompleted: false, isEditing: false };
        setTodos([...todos, newTodo]);
    }

    function handleToggleComplete(todoID) {
        setTodos(todos.map(todo => todo.id === todoID
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo))
    }

    function handleDeleteTodo(todoID) {
        setTodos(todos.filter(t => t.id !== todoID))
    }

    function handleToggleEdit(todoID) {
        setTodos(todos.map(todo => todo.id === todoID
            ? { ...todo, isEditing: !todo.isEditing }
            : todo))
    }

    function handleEditTodo(newLabel, todoID) {
        setTodos(todos.map(todo => todo.id === todoID
            ? { ...todo, label: newLabel, isEditing: !todo.isEditing }
            : todo))
    }

    async function getHistoryTodos() {
        try{
            const response = await fetch("http://localhost:3030/tasks-history")
            const data = await response.json()
            const todosWithEditing = data.map(task => ({ ...task, isEditing: false }));
            return todosWithEditing;
        }
        catch(error){
            console.error(error)
            return null
        }
    }

    // const fetchData = () => {
    //     return fetch("http://localhost:3030/tasks-history")
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             const todosWithEditing = data.map(task => ({ ...task, isEditing: false }));
    //             setTodos(todosWithEditing);
    //             return todosWithEditing;
    //         })
    //         .catch(error => {
    //             console.error("Error fetching data:", error);
    //             // Manejar el error según tus necesidades (mostrar un mensaje, etc.)
    //             return null; // Otra opción es devolver un valor específico en caso de error
    //         });

    return {
        todos,
        handleAddTodo,
        handleDeleteTodo,
        handleEditTodo,
        handleToggleComplete,
        handleToggleEdit,
        getHistoryTodos
    }
}