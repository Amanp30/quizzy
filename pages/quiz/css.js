import React from "react";
import Layout from "../../components/layout";
import cssbank from "../../data/bank/css";

import dynamic from "next/dynamic";
const Quizcomp = dynamic(() => import("../../components/quizcomp"), {
  loading: () => (
    <div className="loadingsvg" style={{ padding: "2em" }}>
      <svg preserveAspectRatio="none" viewBox="0 0 400 250">
        <rect height="15em" width="100%" clipPath="url(#a)" fill="url(#b)" />
        <defs>
          <linearGradient id="b">
            <stop offset=".6" stopColor="#c2c2c2" />
            <stop offset="1.6" stopColor="#ecebeb" />
            <stop offset="2.6" stopColor="#c2c2c2" />
          </linearGradient>
          <clipPath id="a">
            <circle cx="14" cy="61" r="13" />
            <circle cx="14" cy="104" r="13" />
            <circle cx="14" cy="146" r="13" />
            <circle cx="14" cy="188" r="13" />
            <rect height="14" width="359" rx="5" ry="5" x="41" y="54" />
            <rect height="14" width="359" rx="5" ry="5" x="41" y="96" />
            <rect height="14" width="359" rx="5" ry="5" x="41" y="139" />
            <rect height="14" width="359" rx="5" ry="5" x="41" y="181" />
            <rect height="29" width="462" rx="0" ry="0" x="-7" y="2" />
          </clipPath>
        </defs>
      </svg>
    </div>
  ), // Display this component while loading
  ssr: false, // Disable server-side rendering
});

function index() {
  return (
    <>
      <Layout theimg="/icons/css.svg">
        <Quizcomp bank={cssbank} title="Css" />
      </Layout>
    </>
  );
}

export default index;
