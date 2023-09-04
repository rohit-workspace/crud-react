import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://64c8e31ba1fe0128fbd65f82.mockapi.io/crud/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <>
      <h3>Update</h3>
      <form>
        <div className="mb-3">
          <label>Name:</label>
          <input
            type="name"
            aria-describedby="emailHelp"
            className="form-control-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/read">
          <button
            type="submit"
            className="btn btn-primary mx-2"
            onClick={handleUpdate}
          >
            Back
          </button>
        </Link>
      </form>
    </>
  );
};
export default Update;
