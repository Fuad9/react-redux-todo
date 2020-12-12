import React from "react";

const TodoItem = () => {
   return (
      <div>
         <div className="row mx-2 align-items-center">
            <div>#1</div>
            <div className="col">
               <h4>Todo Title</h4>
            </div>
            <div className="btn btn-warning m-2">Edit</div>
            <div className="btn btn-danger m-2">Delete</div>
         </div>
      </div>
   );
};

export default TodoItem;
