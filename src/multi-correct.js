import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

function MultiCorrect ({addMoptions}) {

    const [mopt, setMopt] = useState('');

    function SubmitChoices(e) {
        e.preventDefault();
        addMoptions(mopt);
        setMopt('');
      }

    function changeInput(e) {
        setMopt(e.target.value);
    }

    return (
        <form onSubmit={SubmitChoices} className="form-one">
            <label>Option: </label>
            {/* htmlFor attribute links the label to the input since it has the name atrribute with the same value */}
            <input type="text" value={mopt} onChange={changeInput} />
            {/* Instead of name we can write id also */}
            <Button variant="outlined" color="primary" onClick={SubmitChoices} size="small" className="add-button">
                Add Option
            </Button>
        </form>
    );
}

export default MultiCorrect;