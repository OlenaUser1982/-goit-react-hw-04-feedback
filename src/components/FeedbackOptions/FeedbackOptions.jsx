import { List } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <List
          type="button"
          key={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </List>
      ))}
    </div>
  );
};

export default FeedbackOptions;
