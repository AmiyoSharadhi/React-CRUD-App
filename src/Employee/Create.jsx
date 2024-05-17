import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  let navigate = useNavigate();

  let [EmpName, setEmpName] = useState("");
  let [EmpPhone, setEmpPhone] = useState("");
  let [EmpEmail, setEmpEmail] = useState("");
  let [EmpAge, setEmpAge] = useState("");
  let [EmpAddress, setEMpAddress] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    let payload = {
      EmpName,
      EmpPhone,
      EmpEmail,
      EmpAge,
      EmpAddress,
    };
    axios.post("https://localhost:44365/api/PostEmpDetlais", payload);
    alert("Data posted successfully");
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center ">
      <div className="border border-success p-5 mb-5">
        <h1 className="d-flex justify-content-center align-items-center">
          Add a user
        </h1>
        <form action="" className="row g-3 needs-validation">
          <div className="mb-3">
            <label htmlFor="name" className="form-check-label my-2">
              Employee Name :
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Enter username"
              onChange={(e) => {
                setEmpName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-check-label my-2">
              Employee Phone:
            </label>
            <input
              type="text"
              className="form-control"
              name="password"
              id="password"
              placeholder="Enter Phone"
              onChange={(e) => {
                setEmpPhone(e.target.value);
              }}
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="phone" className="form-check-label my-2">
              Employee Email :
            </label>
            <input
              type="text"
              className="form-control"
              name="phone"
              id="phone"
              placeholder="Enter Email"
              onChange={(e) => {
                setEmpEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-check-label my-2">
              Employee Age :
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              placeholder="Enter Age"
              onChange={(e) => {
                setEmpAge(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="email" className="form-check-label my-2">
              Employee Address :
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              placeholder="Enter Address"
              onChange={(e) => {
                setEMpAddress(e.target.value);
              }}
            />
          </div>
        </form>
        <button className="btn btn-primary m-4 " onClick={handleSubmit}>
          Submit form
        </button>
        <Link className="btn btn-warning m-4 " to="/">
          {" "}
          Go Back{" "}
        </Link>
      </div>
    </div>
  );
};

export default Create;
