import React, { useState } from 'react';
import './App.css';
import FullSet from './FullSet.js';

import Fab from '@material-ui/core/Fab';
// import { AddIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

///// MATERIAL-UI CODE /////
const useStylesAdd = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
///// MATERIAL-UI CODE /////


function App() {

  const classes = useStylesAdd();

  var ctr = 0;

  const [click, setClick] = useState([
    {value: ctr}
  ]);

  const addNew = () => {
    setClick([...click, { value: ctr+1 }]);
    // console.log(click);
  }

  return ( 
    <div className={classes.root} id="full-form-page">
      <h1 className="heading">Create your own form!</h1>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <div className="mainform">
        <Fab color="primary" variant="extended" aria-label="add" className="new-question-button" onClick={addNew}>
          NEW QUESTION
        </Fab>
        {click.map(c => {
          return( <div> <FullSet /> </div> );
        })}
      </div>
    </div>
  );

}

export default App;
