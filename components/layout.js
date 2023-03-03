import React, { useState } from "react";
import Quizesof from "./quizesof";
import Link from "next/link";
import Head from "next/head";

function Layout({ children, theimg, thetitle }) {
  const [showother, setshowother] = useState(false);
  console.log(theimg);

  return (
    <>
      <Head>
        <title>{thetitle} - Quizzy</title>
      </Head>
      <div className="mainlayout">
        <div className="topaside">
          <h1 className="quizh1">
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              Quizzy
            </Link>{" "}
            <div
              className={showother ? "menubtn fullcolor" : "menubtn"}
              onClick={(e) => setshowother(!showother)}
            >
              <img src={theimg} />
              <span>{"▾"}</span>
            </div>
          </h1>

          <div className={showother ? "gridwrap showityes" : "showitnot"}>
            <Quizesof />
          </div>
        </div>
        <div className="thequizes">{children}</div>
      </div>
    </>
  );
}

export default Layout;
