import React from "react";
import Link from "next/link";

function Quizalert({ message, restart }) {
  return (
    <>
      <div className="quizalert">
        <div className="alertinside">
          <p>{message}</p>
          <div style={{ display: "flex", gap: "5%" }}>
            <button onClick={(e) => restart()}>Start again</button>
            <Link href={"/"}>
              <button>Go home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quizalert;
