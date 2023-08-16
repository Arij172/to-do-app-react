// reducers.js
import { combineReducers } from "redux";
import { ADD_TASK, TOGGLE_TASK, EDIT_TASK } from "../Actions/actions";

const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        case TOGGLE_TASK:
            return state.map((task) =>
                task.id === action.payload
                    ? { ...task, isDone: !task.isDone }
                    : task
        );
        case EDIT_TASK:
            return state.map((task) =>
                task.id === action.payload.taskId
                    ? { ...task, description: action.payload.description }
                    : task
        );
    default:
        return state;
}
};

const rootReducer = combineReducers({
tasks: tasksReducer,
});

export default rootReducer;
