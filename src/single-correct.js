import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

function SingleCorrect ({addOptions}) {

    const [opt, setOpt] = useState('');

    function SubmitChoices(e) {
        e.preventDefault();
        addOptions(opt);
        setOpt('');
      }

    function changeInput(e) {
        setOpt(e.target.value);
    }

    return (
        <form onSubmit={SubmitChoices} className="form-one">
            <label>Option: </label>
            {/* htmlFor attribute links the label to the input since it has the name atrribute with the same value */}
            <input type="text" value={opt} onChange={changeInput} />
            {/* Instead of name we can write id also */}
            <Button variant="outlined" color="primary" onClick={SubmitChoices} size="small" className="add-button">
                Add Option
            </Button>
        </form>
    );
}

export default SingleCorrect;