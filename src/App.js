import React, { useState } from 'react';
import NewQuestion from './NewQuestion.js'
import './App.css';
import Options from './Options.js';
import SingleCorrect from './single-correct.js';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

///// MATERIAL-UI CODE /////
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
///// MATERIAL-UI CODE /////


function App() {

  const classes = useStyles();
  const [type, setType] = React.useState('');
// for the dropdown menu
  const handleChange = (event) => {
    setType(event.target.value);
  }

  const [question, setQuestion] = useState([]);

  const addQuestion = (quests) => {
    setQuestion([...question, {quests}]);
  }

  const [options, setOptions] = useState([]);

  const addOptions = (opts) => {
    setOptions([...options, {opts}])
  }

  

  return (
    <div className="container">

      <div className="left-side">
        <NewQuestion addQuestion={addQuestion} />
        {/* passing a prop addQuestion to NewQuestion with the value of the const addQuestion */}

        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Question Type</InputLabel>
            <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={type}
            onChange={handleChange}
            label="Type"
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Single Line Answer</MenuItem>
            <MenuItem value={2}>Multiple Line Answer</MenuItem>
            <MenuItem value={3}>MCQ with One Correct Option</MenuItem>
            <MenuItem value={4}>MCQ with Multiple Correct Options</MenuItem>
            </Select>
        </FormControl>
        { type===3? <SingleCorrect addOptions={addOptions} /> : null }
      </div>
      <div className="right-side">
        <ul>
          {question.map(q => {
            return ( 
              <div>
                <li>{q.quests}</li>
                <div className="sample-input"></div>
              </div>
            );
          })}
        </ul>
        <div>
        {options.map(o => {
                    return ( 
                    <div>
                        <input type="radio" name="choice"/>
                        <span>{o.opts}</span>
                    </div>
                    );
                })}
        </div>
        
      </div>
    </div>
  );
}

export default App;
