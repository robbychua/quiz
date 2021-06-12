import React from "react";
import { Box, Typography, Grid, TextField, MenuItem } from "@material-ui/core";
import Categories from "../../data/Categories";
export const Home = () => {
  return (
    <div >
      <Typography variant="h4">Quiz Settings</Typography>
      <Grid component={Box} p={2} container spacing={2} item xs={12}>
        <Grid item xs={6}>
            <Box  p={2}>
          <TextField
          
            variant="outlined"
            label="enter your name"
            fullWidth
          ></TextField>
          </Box>
          <Box  p={2}>
          <TextField
            select
            variant="outlined"
            label="Select Category"
            fullWidth
          >
            {Categories.map((category) => (
              <MenuItem key={category.category} value={category.value}>
                {category.category}
              </MenuItem>
            ))}
          </TextField>
          </Box>
          <Box  p={2}>
          <TextField
            select
            variant="outlined"
            label="Select Difficulty"
            fullWidth
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
          </Box>
        </Grid>

        <Grid item xs={6} >
            <Box alignItems="center">
          <img src="./quiz.svg" style={{maxHeight:"700px",width:"100%"}} />
          </Box>
        </Grid>

       
      </Grid>

      
    
      
    </div>
  );
};

export default Home;
