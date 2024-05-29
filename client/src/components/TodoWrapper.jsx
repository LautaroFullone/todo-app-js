import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import TodoEditForm from "./TodoEditForm";
import Filter from "./Filter";
import { useTodos } from "../hooks/useTodos";

export default function TodoWrapper() {

    const { todos, handleAddTodo, handleDeleteTodo, handleEditTodo, 
            handleToggleComplete, handleToggleEdit } = useTodos();
            
    const [filter, setFilter] = useState("")

    let filteredTodos = [];

    if (filter !== '')
        filteredTodos = todos.filter(t => t.label.toLowerCase().includes(filter.toLowerCase()));
    else
        filteredTodos = todos;

    return (
        <div className="TodoWrapper">

            <h1>Get Things Done!</h1>

            <TodoForm onAddTodo={handleAddTodo} />

            { 
                (todos.length > 0) 
                    ?   <>
                            <Filter onFilter={(value) => setFilter(value)} />

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
