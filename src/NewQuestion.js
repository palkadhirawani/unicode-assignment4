import React, { useState } from 'react';
import './App.css';

function NewQuestion ({addQuestion}) {

    const [quest, setQuest] = useState('');

    function SubmitForm(e) {
        e.preventDefault();
        addQuestion(quest);
      }

    function changeInput(e) {
        setQuest(e.target.value);
    }

    return (
        <form onSubmit={SubmitForm}>
            <label htmlFor="added-question">Question: </label>
            {/* htmlFor attribute links the label to the input since it has id with the same value */}
            <input id="added-question" type="text" value={quest} onChange={changeInput} required/>
            <input type="submit" value="add question" />
            <p>{quest}</p>
        </form>
    );
}

export default NewQuestion;