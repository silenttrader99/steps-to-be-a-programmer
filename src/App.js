import React, { useState } from "react";

const messages = [
  "Learn Programming ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : null}>1</div>
            <div className={step >= 2 ? "active" : null}>2</div>
            <div className={step >= 3 ? "active" : null}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={() => {
                if (step > 1) {
                  setStep((s) => s - 1); //use callback to update state
                }
              }}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={() => {
                if (step < 3) {
                  setStep((s) => s + 1); //use callback to update state
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
