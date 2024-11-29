import React, { useState } from 'react';
import Feedback from './Feedback';

const App = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  const handleAddFeedback = newFeedback => {
    setFeedbackList(prev => [...prev, newFeedback]);
  };

  return (
    <div className="appContainer">
      <h1>Feedback Widget</h1>
      <Feedback onAddFeedback={handleAddFeedback} />
      <div>
        <h3>Feedback List</h3>
        <ul>
          {feedbackList.map((feedback, index) => (
            <li key={index}>
              Rating: {feedback.rating} | Feedback: {feedback.feedback}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
