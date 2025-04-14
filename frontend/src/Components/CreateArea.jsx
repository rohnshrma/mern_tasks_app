import React, { useReducer } from "react";

const formReducer = (state, action) => {
  if (action.type === "NAME_UPDATE") {
    return {
      task: action.payload,
    };
  }
  return state;
};

const initialState = {
  task: "",
};

const CreateArea = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return (
    <div className="createarea shadow-sm rounded">
      <form className="d-flex justify-content-between align-items-center">
        <div className="me-2 ">
          <input
            type="text"
            placeholder="Enter Task..."
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
