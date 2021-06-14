import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/hearder/Header";
import Home from "./page/home";
import Quiz from "./page/quiz";
import Results from "./page/result";
import axios from "axios";
const App = () => {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestions = async (category="", difficulity="") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulity && `&difficulty=${difficulity}`}&type=multiple`
    );
    setQuestions(data.results)
  };
  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/quiz" 
          exact 
          >
            <Quiz
              name={name}
              setName={setName}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path="/results" exact >

            <Results name={name}score={score}/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
