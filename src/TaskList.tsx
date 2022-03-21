import React, {FC} from 'react';
import {TaskType} from "./App";


type TaskListPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeStatus: (id: string, isDone: boolean)=>void

}

//const TaskList: FC<TaskListPropsType> = (TaskListPropsType) - тоже самое, что и ниже
const TaskList: FC<TaskListPropsType> = (
    {
        tasks,
        removeTask,
        changeStatus
    }) => {

    const tasksJSXElements = tasks.map(t => {
        const onClickRemoveTask = () => removeTask(t.id)
        return (
            <div className={'task1'}>
                <div>
                    <ul className={'list'}>
                    <li className={t.isDone ? 'is-done' : ''} key={t.id}><input type="checkbox"
                                          checked={t.isDone}
                                          onChange={(e)=>{changeStatus(t.id, e.currentTarget.checked)}}
                    /> <span>{t.title}</span></li></ul>
                </div>
                <div><span className={'delete_button'}>
                    <button onClick={onClickRemoveTask}>x</button>
                </span></div>

    </div>
    )
    })

    return (
        <ul>
            {tasksJSXElements}
        </ul>
    );
};

export default TaskList;