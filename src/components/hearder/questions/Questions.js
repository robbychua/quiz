import React, { useState } from "react";
import ErrorMessage from "../../errormessage/ErrorMessage";
import './Questions.css'
import {Button} from '@material-ui/core'
import { useHistory } from "react-router-dom";
const Questions = ({
  currQuess,
  setCurrQuess,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const history=useHistory()
  const handleSelect=(i)=>{
        if(selected===i && selected===correct){
            return "select"
        }else if(selected===i && selected !== correct){
            return "wrong"
        }else if (i===correct){
            return"select"
        }
  }

  const handleCheck=(i)=>{
      setSelected(i)
      if(i=== correct) setScore(score+1)
      setError(false)
  }

  const handleNext=()=>{
      if(currQuess>8){
          history.push('/results')
      }else if(selected){
          setCurrQuess(currQuess+1)
          setSelected()
      }else{
          setError("Please select an option first")
      }
  }

  const handleQuit =()=>{
    setCurrQuess(0)
    setQuestions()
  }
  return(
        <div className="question"> 
            <h1>Questions {currQuess+1}</h1>
            <div className="singleQuestion">
                <h2 >{questions[currQuess].question}</h2>
                <div className="options">
                    {error && <ErrorMessage>{error}</ErrorMessage> }
                    {options && 
                    options.map((i)=>(
                    <button
                    onClick={()=>handleCheck(i)}
                    className={`singleOption ${selected && handleSelect(i)}`}
                    key={i}
                    disabled={selected}
                    >
                        {i}
                    </button>
                    ))}
                </div>
                <div className="controls">
                    <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    style={{width:185}}
                    href="/"
                    >
                        Quit
                    </Button>
                    <Button
                     variant="contained"
                     color="primary"
                     size="large"
                     style={{width:185}}
                     onClick={()=>handleNext()}
                    >next Question</Button>
                </div>
            </div>
        </div>
    )
};

export default Questions;
