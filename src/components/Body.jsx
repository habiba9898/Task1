import React, { Component } from "react";
import back2 from "./back2.jpg";
import BasicTextFields from "./form1";
import BasicTextFields2 from "./form2";
import BasicTextFields3 from "./form3";

export default function BodyApp(props) {
  const { step } = props;
  const renderingStep = (step) => {
    if (step === 0) return <BasicTextFields />;
    else if (step === 1) return <BasicTextFields2 />;
    else return <BasicTextFields3 />;
  };
  return (
    <div>
      <div>
        <img
          src={back2}
          style={{
            backgroundImage: back2,
            width: 1350,
            opacity: 0.5,
            bottom: 600,
            marginTop: "5%",
          }}
        ></img>
      </div>

      <div
        style={{
          position: "absolute",
          borderRadius: "30px",
          backgroundColor: "rgba(255, 255, 255, 0.91)",
          padding: "20px",
          width: "1100px",
          height: "550px",
          border: "1px solid black",
          top: "80%",
          left: "10%",
        }}
      >
        <h3> 1- fill your personal information</h3>
        {renderingStep(step)}
      </div>
    </div>
  );
}
