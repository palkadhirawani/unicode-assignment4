import React, { useState } from 'react';
import NewQuestion from './NewQuestion.js'
import './App.css';
import SingleCorrect from './single-correct.js';
import MultiCorrect from './multi-correct.js';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


///// MATERIAL-UI CODE /////
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const useStylesSingle = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const useStylesMulti = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
///// MATERIAL-UI CODE /////


function FullSet() {

  // for the dropdown menu
  const classes = useStyles();
  const [type, setType] = React.useState('');
  const handleChange = (event) => {
    setType(event.target.value);
  }
  // for the dropdown menu

  // for single line input
  const classesSingle = useStylesSingle();

  // for multi line input
  const classesMulti = useStylesMulti();

  // Required toggle
  const [required, setRequired] = React.useState({
    checkedA: true,
    checkedB: false,
  });

const handleChangeRequired = (event) => {
    setRequired({ ...required, [event.target.name]: event.target.checked });
};
// Required toggle

  const [question, setQuestion] = useState([{
    value: ''
  }]);

  const addQuestion = (quests) => {
    setQuestion([{quests}]);
  }

  // for one answer MCQ
  const [options, setOptions] = useState([]);

  const addOptions = (opts) => {
    setOptions([...options, {opts}])
  }

  // for more than one answer MCQ
  const [moptions, setMoptions] = useState([]);

  const addMoptions = (mopts) => {
    setMoptions([...moptions, {mopts}])
  }

  return (
    <div className="container">

      <div className="left-side">

        <NewQuestion addQuestion={addQuestion} />
        {/* passing a prop addQuestion to NewQuestion with the value of the const addQuestion */}

        <FormControl variant="outlined" className={classes.formControl} id="form-two">
            <InputLabel id="demo-simple-select-outlined-label">Question Type</InputLabel>
            <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={type}
            onChange={handleChange}
            label="Question Type"
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
        <FormControlLabel className="required-toggle"
          control={
            <Switch
              checked={required.checkedB}
              onChange={handleChangeRequired}
              name="checkedB"
              color="primary"
            />
          }
          label="Required"
          labelPlacement="start"
        />
        { type===3 ? <SingleCorrect addOptions={addOptions} /> : null }
        { type===4 ? <MultiCorrect addMoptions={addMoptions} /> : null }
      
      </div>


      <div className="right-side">

        <div className="card">
          {question.map(q => {
            return (
              <div>
                <label htmlFor={q.quests}>{q.quests}</label>
                <hr />
                {required.checkedB===true ? <div className="must">*required question</div> : null}
              </div>
            );
          })}
  
          <div className="input-fields">
  
            {options.map(o => {
              return ( 
                <div>
                    <input type="radio" name="choice" id="radio-input"/>
                    <span>{o.opts}</span>
                </div>
              );
            })}
  
            {moptions.map(m => {
              return ( 
                <div>
                    <input type="checkbox" id="check-input"/>
                    <span>{m.mopts}</span>
                </div>
              );
            })}
  
            { type===1 ?
              <form className={classesSingle.root} noValidate autoComplete="off" id="text">
                <TextField id="outlined-basic" label="" variant="outlined"/>
              </form> : null }
            
            { type===2 ?
              <form className={classesMulti.root} noValidate autoComplete="off" id="text1">
                <TextField
                  id="outlined-multiline-static"
                  label=""
                  multiline
                  rows={4}
                  defaultValue=""
                  variant="outlined"
                  />
              </form> : null }
            </div>

        </div>
        
      </div>
    </div>
  );
}

export default FullSet;
