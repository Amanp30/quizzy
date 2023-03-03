import React, { useState } from "react";

function Quizcheck({ correct, selected, info, another }) {
  const [openpopup, setopenpopup] = useState(false);

  const Loadanother = ({ color = "white", background = "black" }) => {
    return (
      <>
        <button
          style={{ color: color, background: background }}
          onClick={(e) => {
            another();
            setopenpopup(false);
          }}
          className={"quizbtn anotherone"}
        >
          Another Question
        </button>
      </>
    );
  };

  return (
    <>
      {openpopup ? (
        <>
          <div className="thepopup">
            <div className="anothercheckbox">
              {correct === selected ? (
                <>
                  <audio className="displaynone" autoPlay>
                    <source src="/correct.wav" type="audio/wav" />
                  </audio>

                  <div className="popupwala" style={{ background: "green" }}>
                    {/*  <img src="/correct.svg" width={"10px"} />{" "} */}
                    <h2 style={{ color: "white" }}>✅ Correct Answer</h2>
                  </div>
                  <p className="explaination"> {info.repeat(1)}</p>
                  <Loadanother />
                </>
              ) : (
                <>
                  <audio className="displaynone" autoPlay>
                    <source src="/wrong.wav" type="audio/wav" />
                  </audio>

                  <div className="popupwala" style={{ background: "red" }}>
                    {/*  <img src="/correct.svg" width={"10px"} />{" "} */}
                    <h2 style={{ color: "white" }}>❌ Wrong Answer</h2>
                  </div>
                  <p className="explaination"> {info.repeat(1)}</p>
                  <Loadanother />
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <button
          className={selected === "" ? "check disabled" : "check"}
          disabled={selected === "" ? true : false}
          onClick={(e) => setopenpopup(true)}
        >
          Check Answer
        </button>
      )}
    </>
  );
}

export default Quizcheck;
