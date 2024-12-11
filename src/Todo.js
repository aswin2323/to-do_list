import { useState } from "react"
function Todo(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleChange(e){
        setNewTask(e.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t =>[...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i)=> i!==index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index - 1]]=
            [updatedTasks[index - 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index + 1]]=
            [updatedTasks[index + 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div className="container">
                <input type="text" placeholder="Enter the task" value={newTask} onChange={handleChange}/>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index)=>
                <li>
                    <span className="text">{task}</span>
                    <button 
                    className="delete-button"
                    onClick={()=>deleteTask(index)}>Delete</button>
                    <button 
                    className="move-button"
                    onClick={()=>moveTaskUp(index)}>&uArr;</button>
                    <button 
                    className="move-button"
                    onClick={()=>moveTaskDown(index)}>&dArr;</button>
                </li>)}
            </ol>
        </div>
    )
}
export default Todo