import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import "./App.css";
const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://64c8e31ba1fe0128fbd65f82.mockapi.io/crud")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://64c8e31ba1fe0128fbd65f82.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  }
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Read</h2>
      <div className="d-flex justify-content-between m-2">
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>

      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">NAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">EDIT</th>
          <th scope="col">DELETE</th>
        </tr>
      </thead>
      {data.map((eachData) => {
        return (
          <>
            <tbody>
              <tr>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.email}</td>
                <td>{eachData.name}</td>

                <td>
                  <Link to="/update">
                    <button
                      type="button"
                      class="btn btn-success"
                      onClick={() =>
                        setToLocalStorage(
                          eachData.id,
                          eachData.email,
                          eachData.name
                        )
                      }
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={(id) => {
                      handleDelete(id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </>
        );
      })}
    </>
  );
};
export default Read;
