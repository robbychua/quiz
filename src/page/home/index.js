import React, { useState } from "react";
import { Typography, TextField, MenuItem, Button } from "@material-ui/core";
import Categories from "../../data/Categories";
import "./Home.css";
import { useHistory } from "react-router-dom";
import ErrorMessage from "../../components/errormessage/ErrorMessage";
const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulity, setDifficulity] = useState("initialState");
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    if (!category || !difficulity || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulity);
      history.push("/quiz");
    }
  };
  return (
    <div className="content">
      <div className="settings">
        <Typography variant="h4">Quiz Settings</Typography>
        {error&& <ErrorMessage>please field all the field</ErrorMessage> }
        <div className="settings_select">
          <TextField
            variant="outlined"
            label="enter your name"
            fullWidth
            style={{ marginBottom: 20 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          <TextField
            select
            variant="outlined"
            label="Select Category"
            fullWidth
            style={{ marginBottom: 20 }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Categories.map((category) => (
              <MenuItem key={category.category} value={category.value}>
                {category.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            variant="outlined"
            label="Select Difficulty"
            fullWidth
            style={{ marginBottom: 20 }}
            value={difficulity}
            onChange={(e) => setDifficulity(e.target.value)}
          >
            <MenuItem key="Easy" value="easy">
              {" "}
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              {" "}
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="./quiz.svg" className="banner"  />
    </div>
  );
};

export default Home;
