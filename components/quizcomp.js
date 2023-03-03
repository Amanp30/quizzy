import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Quizalert from "./quizalert";
import Quizcheck from "./quizcheck";
import Quizradio from "./quizradio";
import _ from "lodash";

function Quizcomp({ bank }) {
  const [question, setQuestion] = useState("");
  const [options, setoptions] = useState([]);
  const [selected, setselected] = useState("");
  const [correctanswer, setcorrectanswer] = useState("");
  const [info, setinfo] = useState("");
  const [full, setfull] = useState(false);

  const Router = useRouter();

  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    randompick(bank);
  }, []);

  function fromto(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function customShuffle(array) {
    let currentIndex = array?.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle
    while (currentIndex !== 0) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Swap it with the current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function randompick(bank) {
    const remaining = bank.filter((q, i) => !displayed.includes(i));
    if (remaining.length === 0) {
      setfull(true);
      return;
    }
    const random = fromto(0, remaining.length);
    const question = remaining[random];

    setQuestion(question.question);
    setoptions(customShuffle(question.options));
    setcorrectanswer(question.answer);
    setinfo(question.info);

    setDisplayed([...displayed, bank.indexOf(question)]);
  }

  function anotherone() {
    setselected("");
    randompick(bank);
  }

  function startagain() {
    Router.reload("/");
  }

  return (
    <>
      <div className="quizdiv">
        <p className="counter">
          {displayed.length}/{bank.length}
        </p>

        <h2 style={{ marginBottom: ".8em" }}> {question}</h2>

        <Quizradio options={options} state={selected} setstate={setselected} />

        {full && (
          <Quizalert
            message="You attempted all     the questions"
            restart={(e) => startagain()}
          />
        )}
        <Quizcheck
          correct={correctanswer}
          selected={selected}
          info={info}
          another={anotherone}
        />
      </div>
    </>
  );
}

export default Quizcomp;
