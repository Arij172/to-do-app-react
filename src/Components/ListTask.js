import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = ({ filter }) => {
    const tasks = useSelector((state) =>
        filter === "done"
            ? state.tasks.filter((task) => task.isDone)
            : filter === "notDone"
            ? state.tasks.filter((task) => !task.isDone)
            : state.tasks
    );

    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default ListTask;
