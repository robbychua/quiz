import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {Button} from '@material-ui/core'
import './Results.css'
const Results = ({ name, score }) => {
  const history = useHistory();
  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);

  return (
    <div className="result">
      <span className="title"> Final Score : {score}</span>
    <Button 
    variant="contained"
    color="secondary"
    size="large"
    style={{alignSelf:"center", marginTop:20}}
    onClick={()=>history.push('/')}
    >
        Go To Home Page
    </Button>
    </div>
  );
};

export default Results;
