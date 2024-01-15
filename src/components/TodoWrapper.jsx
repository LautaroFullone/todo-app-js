import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import TodoEditForm from "./TodoEditForm";
import Filter from "./Filter";


export default function TodoWrapper() {

    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState("")

    let filteredTodos = [];

    if (filter !== '')
        filteredTodos = todos.filter(t => t.label.toLowerCase().includes(filter.toLowerCase()));
    else
        filteredTodos = todos;

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

    return (
        <div className="TodoWrapper">

            <h1>Get Things Done!</h1>

            <TodoForm onAddTodo={handleAddTodo} />

            { 
                (todos.length > 0) 
                    ?   <>
                            <Filter onFilter={(evt) => setFilter(evt.target.value)} />

                            { (filteredTodos.length === 0 && filter !== '') 
                                && <p className="text-muted">There are not records matching the filter</p> }
                        </>
                    : <p className="text-muted">Nothing to show :( </p>
            }

            {
                filteredTodos.map((todo, index) => todo?.isEditing
                    ?   <TodoEditForm key={index}
                            task={todo}
                            onEditTodo={handleEditTodo}
                        />
                    :   <Todo key={index}
                            task={todo}
                            toggleComplete={handleToggleComplete}
                            onDeleteTask={handleDeleteTodo}
                            onEditTask={handleToggleEdit}
                        />
                )
            }

        </div>
    )
}
