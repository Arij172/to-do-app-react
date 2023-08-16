import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../js/Actions/actions";

const AddTask = () => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() !== "") {
        const newTask = {
        id: Date.now(),
        description,
        isDone: false,
        };
        dispatch(addTask(newTask));
        setDescription("");
    }
    };

    return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
    </form>
    );
};

export default AddTask;
