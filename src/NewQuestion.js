import React, { useState } from 'react';
import './App.css';

function NewQuestion ({addQuestion}) {

    const [quest, setQuest] = useState('');

    function SubmitForm(e) {
        e.preventDefault();
        addQuestion(quest);
        setQuest('');
      }

    function changeInput(e) {
        setQuest(e.target.value);
        console.log(quest);
    }

    return (
        <form onSubmit={SubmitForm}>
            <label htmlFor="questionInput">Question: </label>
            {/* htmlFor attribute links the label to the input since it has the name atrribute with the same value */}
            <input name="questionInput" type="text" value={quest} onChange={changeInput} required/>
            {/* Instead of name we can write id also */}
            <input type="submit" value="add question" />
        </form>
    );
}

export default NewQuestion;