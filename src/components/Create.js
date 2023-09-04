import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const header = { "Access-control-allow-origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://64c8e31ba1fe0128fbd65f82.mockapi.io/crud", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        history("./read");
      });
  };

  return (
    <div>
      <div className="d-flex justify-content-between m-2">
        <h3>Create</h3>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label>Name:</label>
          <input
            type="name"
            aria-describedby="emailHelp"
            className="form-control-sm"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Create;
