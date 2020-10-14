import React, { useState } from 'react';

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
        <form onSubmit={SubmitChoices}>
            <label>Option: </label>
            {/* htmlFor attribute links the label to the input since it has the name atrribute with the same value */}
            <input type="text" value={opt} onChange={changeInput} />
            {/* Instead of name we can write id also */}
            <input type="submit" value="add option" />
            <p>{opt}</p>
        </form>
    );
}

export default SingleCorrect;