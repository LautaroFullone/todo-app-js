import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"

export default function Todo({ task, toggleComplete, onDeleteTask, onEditTask }) {
    return (
        <div className="Todo">
            <p className={`${task?.isCompleted ? 'completed' : 'incompleted'}`} onClick={() => toggleComplete(task.id)}>
                {task?.label}
            </p>

            <div>
                <FontAwesomeIcon icon={faPenToSquare} 
                    cursor="pointer" 
                    onClick={() => onEditTask(task.id)} 
                />

                <FontAwesomeIcon icon={faTrash} 
                    cursor="pointer" 
                    onClick={()=> onDeleteTask(task.id)} 
                />
            </div>
        </div>
    ) 
}
