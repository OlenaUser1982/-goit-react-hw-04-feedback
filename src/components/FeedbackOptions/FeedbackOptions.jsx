import React, { useState } from 'react';
import { List } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // Використовуємо useState для створення стану для опцій
  const [feedbackOptions, setFeedbackOptions] = useState(options);

  return (
    <div>
      {feedbackOptions.map(option => (
        <List
          type="button"
          key={option}
          onClick={() => {
            onLeaveFeedback(option);
            // Опцію можна прибрати із відображення після кліку
            setFeedbackOptions(prevOptions =>
              prevOptions.filter(opt => opt !== option)
            );
          }}
        >
          {option}
        </List>
      ))}
    </div>
  );
};

export default FeedbackOptions;
