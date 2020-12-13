import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "./redux/actions";

const TodoItem = ({ todo }) => {
   const dispatch = useDispatch();
   const [editTodo, setEditTodo] = useState(false);
   const [todoName, setTodoName] = useState(todo.name);

   return (
      <div>
         <div className="row mx-2 align-items-center">
            <div>#{todo.id.length > 1 ? todo.id[0] : todo.id}</div>

            <div className="col">
               {editTodo ? (
                  <input
                     onChange={(e) => setTodoName(e.target.value)}
                     type="text"
                     className="form-control"
                     value={todoName}
                  />
               ) : (
                  <h4>{todo.name}</h4>
               )}
            </div>

            <button
               onClick={() => {
                  dispatch(
                     updateTodo({
                        ...todo,
                        name: todoName,
                     })
                  );
                  editTodo && setTodoName(todo.name);
                  setEditTodo(!editTodo);
               }}
               className="btn btn-danger m-2"
            >
               {editTodo ? "Update" : "Edit"}
            </button>

            <button onClick={() => dispatch(deleteTodo(todo.id))} className="btn btn-warning m-2">
               Delete
            </button>
         </div>
      </div>
   );
};

export default TodoItem;
