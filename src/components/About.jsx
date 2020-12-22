import React from "react";
import Rainbow from "./hoc/Rainbow";

const About = (props) => {
  // setTimeout(() => {
  //   props.history.push("/about");
  // }, 2000);
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem Ipsum dolor sit about</p>
    </div>
  );
}

export default Rainbow(About);