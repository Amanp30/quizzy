import React, { useState, useEffect } from "react";

function Quizradio({ options, state, setstate }) {
  return (
    <>
      {options.map((item, index) => {
        return (
          <>
            <div className="quizradio" key={index}>
              <input
                type="radio"
                className="radioinput"
                value={item}
                name={`jsquiz${index}`}
                checked={state === item}
                onClick={() => setstate(item)}
              />
              <label>{item}</label>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Quizradio;
