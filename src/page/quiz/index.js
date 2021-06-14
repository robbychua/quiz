import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./quiz.css"
import Questions from "../../components/hearder/questions/Questions";

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currQuess, setCurrQuess] = useState(0);

  useEffect(() => {
    console.log(questions)
    setOptions(
      questions &&
        handleShuffle([
          questions[currQuess]?.correct_answer,
          ...questions[currQuess]?.incorrect_answers,
        ])
    );
  }, [questions,currQuess]);

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };
  
  return (
      <div className="quiz">
          <span className="subtitle">Welcome ,{name}</span>
          {questions?(
              <>
              <div className="quizInfo">
                <span>{questions[currQuess].category}</span>
                <span>Score :{score}</span>

                
              </div>
              <Questions
              currQuess={currQuess}
              setCurrQuess={setCurrQuess}
              questions={questions}
              options={options}
              correct={questions[currQuess]?.correct_answer}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
              
              />
              </>
          ):(
              <CircularProgress
              style={{margin:100}}
              color="inherit"
              size={150}
              thickness={1}
              />
          )}
      </div>
  )
};

export default Quiz;
