import React, { useState } from 'react';
import NewQuestion from './NewQuestion.js'
import './App.css';

function App() {

  const [question, setQuestion] = useState([]);

  const addQuestion = (quest) => {
    setQuestion([...question, {quest}]);
  }
  return (
    <div className="container">
      <div className="left-side">
        <NewQuestion addQuestion={addQuestion} />
      </div>
      <div className="right-side">
        <ul>
          {question.map(q => {
            return ( 
              <div>
              <li>{q.quest}</li>
              <div className="sample-input"></div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
