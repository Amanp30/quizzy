import React from "react";
import showdata from "../data/fg/thejson";
import Link from "next/link";

function quizesof() {
  console.log(showdata);
  return (
    <>
      {showdata.map((item) => {
        return (
          <>
            <div>
              <Link href={item.link}>
                <img src={item.image} alt={item.name} />
                <h2>{item.name} </h2>
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
}

export default quizesof;
