import React, {useState} from 'react';
import {FilterType, TaskType} from "./App";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import TaskList from "./TaskList";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    addTask: (title: string) => void
    changeFilter: (filter: FilterType)=>void
}

const TodoList = (props: TodoListPropsType) => {
    const [title, setTitle] = useState<string>('')

    const addTask = () => {
        props.addTask(title)
        setTitle('')
    }

    // onKeyPressAddTask
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input value={title} onChange={(e) => setTitle(e.currentTarget.value)}
                       onKeyPress={(e) =>{
                           if (e.key === 'Enter') {
                               addTask()
                           }
                       } }
                />
                <Button title={"+"} onClickHandler={addTask}/>
            </div>
            <TaskList tasks={props.tasks} removeTask={props.removeTask}/>
            <div>
                <Button onClickHandler={()=>props.changeFilter("All")} title={"All"}/>
                <Button onClickHandler={()=>props.changeFilter("Active")} title={"Active"}/>
                <Button onClickHandler={()=>props.changeFilter("Completed")} title={"Completed"}/>
            </div>
        </div>
    );
};

export default TodoList;