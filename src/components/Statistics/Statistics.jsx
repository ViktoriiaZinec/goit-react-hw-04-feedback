import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({ counterGood, counterNeutral, counterBad }) {
  const countTotalFeedback = (counterGood, counterNeutral, counterBad) =>
    counterGood + counterNeutral + counterBad;
  const countPositiveFeedbackPercentage = (counterGood, countTotalFeedback) => {
    if (countTotalFeedback > 0) {
      return parseInt((counterGood / countTotalFeedback) * 100);
    }
    return 0;
  };
  if (countTotalFeedback(counterGood, counterNeutral, counterBad) > 0) {
    return (
      <ul className={css.list_style}>
        <li>Good: {counterGood}</li>
        <li>Neutral: {counterNeutral}</li>
        <li>Bad: {counterBad}</li>
        <li>
          Total: {countTotalFeedback(counterGood, counterNeutral, counterBad)}
        </li>
        <li>
          Positive:{' '}
          {countPositiveFeedbackPercentage(
            counterGood,
            countTotalFeedback(counterGood, counterNeutral, counterBad)
          )}
          %
        </li>
      </ul>
    );
  } else {
    return '';
  }
}

Statistics.propType = {
  counterGood: PropTypes.number.isRequired,
  counterNeutral: PropTypes.number.isRequired,
  counterBad: PropTypes.number.isRequired,
};
