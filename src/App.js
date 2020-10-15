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
import FullSet from './FullSet.js';

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

  var ctr = 0;

  const [click, setClick] = useState([
    {value: ctr}
  ]);

  const addNew = () => {
    setClick([...click, { value: ctr+1 }]);
    console.log(click);
  }

  return ( 
    <div>
      <button onClick={addNew}>ADD A NEW QUESTION</button>
      
      {click.map(c => {
        return( <div> <FullSet /> </div> );
      })}
      
      
    </div>
  );

}

export default App;
