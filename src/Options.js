import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SingleCorrect from './single-correct.js';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [type, setType] = React.useState('');

  const [options, setOptions] = useState([]);

  const addOptions = (opts) => {
    setOptions([...options, {opts}])
  }


  const handleChange = (event) => {
    setType(event.target.value);
  }
  return (
      <div>
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
        {type===3?
            <div>
                <SingleCorrect addOptions={addOptions} />
                {options.map(o => {
                    return ( 
                    <div>
                        <input type="radio" name="choice"/>
                        <span>{o.opts}</span>
                    </div>
                    );
                })}
            </div> : null
        }
    </div>
  );
}