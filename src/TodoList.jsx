import { useState } from "react";

function TodoList() {
    const [task, settask] = useState(["Listen to music", "React todo list"]);

    function addTask() {
        const newTask = document.getElementById("task").value;
        if (newTask != "") {
            settask(t => [...t, newTask]);
            document.getElementById("task").value = "";
        }
    }


    function deleteTask(index) {
        const update = task.filter((_, i) => i !== index);
        settask(update);
    }


    function upTask(index) {
        const uptask = [...task];
        if(index>0){
        [uptask[index], uptask[index - 1]] = [uptask[index - 1], uptask[index]]
        settask(uptask);
    }
    }


    function downTask(index) {
        const downtask = [...task];
    if(index<downTask.length){
        [downtask[index], downtask[index + 1]] = [downtask[index + 1], downtask[index]]
        settask(downtask);
    }
    }


    const itemss = task.map((t, index) => <li key={index} className="items">
        <p className="text">{t}</p>
        <button className="btn del" onClick={() => deleteTask(index)}>Delete</button>
        <button className="btn up" onClick={() => upTask(index)}>Up</button>
        <button className="btn down" onClick={() => downTask(index)}>Down</button>
    </li>)

    const length=task.length;



    return (
        <div className="Container">
            <h1>TodoList</h1>
            <div className="input">
                <input type="text" placeholder="Type To Add The List" id="task" />
                <button className="Addbtn" onClick={addTask}>Add +</button>
            </div>
            <div className="list">
                {itemss}
            </div>
            <p className="len">{length} More Task Is Remaining </p>
        </div>
    );
}
export default TodoList