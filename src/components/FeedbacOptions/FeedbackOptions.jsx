import PropTypes from 'prop-types';
import { PrimaryButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // const buttonsList = Object.keys(options);

  return (
    <ul>
      {options.map(option => {
        return (
          <li key={option}>
            <PrimaryButton
              type="button"
              value={option}
              onClick={onLeaveFeedback}
            >
              {option}
            </PrimaryButton>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
