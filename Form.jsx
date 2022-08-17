//import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
//import React from "react";
import React, { createContext, useState } from "react";
//import TableList from "./TableList";
//import ReactTable from "react-table";

export const BioData = createContext();
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// const schema = yup
//   .object()
//   .shape({
//     name: yup.string().required(),
//     age: yup.number().required(),
//   })
//   .required();

const Form = (props) => {
  const { register, handleSubmit } = useForm();
  //sate variables
  // const [user, setUser] = useState({
  //   username: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  // });
  const [records, setRecords] = useState([]);
  // To target the values
  // const handleInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name, value);
  //   setUser({ ...user, [name]: value });
  // It can be invoked remotely as well
  const onSubmit = async (data) => {
    // const data = data.userName === "userName";
    setRecords(JSON.stringify(data));
  };

  // const onSubmit = async (data) => {
  //   // const data = Object.values(register);
  //   console.log(data);
  //   //fetch(data);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newRecord = { ...user, id: new Date().getTime.toString() };
  //   console.log(records);
  //   setRecords([...records, newRecord]);
  //   console.log(records);
  //   setUser({ username: "", email: "", phone: "", password: "" });
  // };
  return (
    <>
      <BioData.Provider value={register}>
        {props.children}

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <div className="form-group">
              <input
                {...register("userName", { required: true })}
                placeholder="User name"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <input
                {...register("email", { required: true })}
                placeholder="email"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <input
                {...register("phone", { required: true })}
                placeholder="Phone Number"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <input
                {...register("password", { required: true })}
                placeholder=" password"
                className="form-control"
              />
            </div>

            {/* <label htmlFor="username">User Name:</label>
          <input
            type="text"
            autoComplete="off"
            // value={user.username}
            //onChange={handleInput}
            name="username"
            id="username"
            //ref={register}
          />
        </div>
        <div>
          <label htmlFor="email">User Email:</label>
          <input
            type="email"
            autoComplete="off"
            //value={user.email}
            //onChange={handleInput}
            name="email"
            id="email"
            //ref={register}
          />
        </div>
        <div>
          <label htmlFor="phone">User phone:</label>
          <input
            type="numer"
            autoComplete="off"
            //value={user.phone}
            // onChange={handleInput}
            name="phone"
            id="phone"
            //ref={register}
          />
        </div>

        <div>
          <label htmlFor="password">User password:</label>

          <input
            type="numer"
            autoComplete="off"
            // onChange={handleInput}
            //value={user.password}
            id="password"
            //ref={register}
            name="password"

            //ref={register}
          /> */}
          </div>
          <input type="Submit" className="btn btn-primary" />
        </form>

        <div>
          {records.map((curr, index) => {
            return (
              <div key={index}>
                <p> hi {curr.userName}</p>
              </div>
            );
          })}
        </div>
      </BioData.Provider>
    </>
  );
};

export default Form;
