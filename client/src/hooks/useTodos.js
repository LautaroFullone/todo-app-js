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

    return {
        todos,
        handleAddTodo,
        handleDeleteTodo,
        handleEditTodo,
        handleToggleComplete,
        handleToggleEdit,
    }
}