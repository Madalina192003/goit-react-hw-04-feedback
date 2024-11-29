import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ onAddFeedback }) => {
  const [rating, setRating] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAddFeedback({ rating, feedback });
    setRating('');
    setFeedback('');
  };

  return (
    <div className="feedbackWidget">
      <h2>Leave Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Rating:
          <input
            type="number"
            value={rating}
            onChange={e => setRating(e.target.value)}
            required
          />
        </label>
        <label>
          Feedback:
          <textarea
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

Feedback.propTypes = {
  onAddFeedback: PropTypes.func.isRequired,
};

export default Feedback;
