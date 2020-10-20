import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

function NewQuestion ({addQuestion}) {

    const [quest, setQuest] = useState('');

    function SubmitForm(e) {
        e.preventDefault();
        addQuestion(quest);
      }

    function changeInput(e) {
        setQuest(e.target.value);
        addQuestion(quest);
    }

    return (
        <form onSubmit={SubmitForm} className="form-one">
            <label htmlFor={quest}>Question: </label>
            {/* htmlFor attribute links the label to the input since it has id with the same value */}
            <input id={quest} type="text" value={quest} onChange={changeInput} required/>
            <Button variant="outlined" color="primary" onClick={SubmitForm} size="small" className="add-button">
                Add Question
            </Button>
        </form>
    );
}

export default NewQuestion;