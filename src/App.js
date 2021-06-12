import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/hearder/Header";
import Home from "./page/home";
import Quiz from "./page/quiz";
import Results from "./page/result";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/quiz" exact component={Quiz}></Route>
          <Route path="/results" exact component={Results}></Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
