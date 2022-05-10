import React, { useState } from "react";

export default function InputTodo() {
  const [description, setDescription] = useState("");

  const onSubmit =async (e) => {
        e.preventDefault();
        const body={description};
        const response =await fetch(`http://localhost:5000/todos`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)


        });

        window.location = "/";





    try {
    } catch (err) {
      console.error(err.message);
    }
  };

  console.log(description);

  return (
    <div>
      <h3 className="text-center">Pern Todo App</h3>
      <div className="text-center mt-5 me-5">
        <form className="d-flex" onSubmit={onSubmit}>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn btn-success">Add</button>
        </form>
      </div>
    </div>
  );
}
