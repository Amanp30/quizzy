import React from "react";
import Quizesof from "../components/quizesof";
import css from "../styles/main.module.css";
import Head from "next/head";

function index() {
  return (
    <>
      <Head>
        <title>Quizzy</title>{" "}
      </Head>
      <div className={css.showhere}>
        <h1>QUIZZY</h1>
        <p>Practice for your next interview</p>
        <div className={css.languagesof}>
          <Quizesof />
        </div>
      </div>
    </>
  );
}

export default index;
