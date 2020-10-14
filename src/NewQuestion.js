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
    }

    return (
        <form onSubmit={SubmitForm}>
            <label>Question: </label>
            {/* htmlFor attribute links the label to the input since it has the name atrribute with the same value */}
            <input type="text" value={quest} onChange={changeInput} required/>
            {/* Instead of name we can write id also */}
            <input type="submit" value="add question" />
            <p>{quest}</p>
        </form>
    );
}

export default NewQuestion;