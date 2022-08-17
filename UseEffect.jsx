import React from "react";
import { useContext } from "react";
import NoteState from "./Context/NoteState";
//import { useEffect } from "react";
//import { useState } from "react";

const UseEffect = () => {
  //const [count, setCount] = useState(0);
  const a = useContext(NoteState);
  console.log(a);
  // useEffect(() => {
  //   // setTimeout(() => {
  //   //   setCount((count) => count + 1);
  //   //   console.log("Changes occur");
  //   // }, 1000);
  //   a.update();
  // }, [a]);
  return (
    <>
      <h1>hi</h1>
      {/* <h1>I am Count {count} {a.name}</h1> */}
      {/* <h1>I am Count {a}</h1> */}
    </>
  );
};

export default UseEffect;
