import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// import CallBackHook from "./CallBackHook";
//import NoteState from "./Context/NoteState";
//import UseEffect from "./UseEffect";
import Form from "./Form/Form";
import TableList from "./Form/TableList";
import Changes from "./Form/Changes";
import ComA from "./Context/ComA";
//import ComA from "./Context/ComA";
//import UseEffectApi from "./UseEffectApi";
//import UseState from "./UseState";
function App() {
  return (
    <>
      {/* <TableList /> */}
      {/* <Form /> */}
      {/*      
      <Changes />  */}

      <Router>
        <ul>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/tableList"> Table List </Link>
          </li>
          <li>
            <Link to="/changes">Changes</Link>
          </li>
        </ul>
        <ComA>
          <Routes>
            <Route exact path="/form" element={<Form />}></Route>
            <Route path="/tableList" element={<TableList />}></Route>
            <Route path="/changes" element={<Changes />}></Route>
          </Routes>
        </ComA>
      </Router>

      {/* <UseState /> */}
      {/* <UseEffectApi /> */}
      {/* <UseEffect /> */}
      {/* <CallBackHook /> */}
    </>
  );
}

export default App;
