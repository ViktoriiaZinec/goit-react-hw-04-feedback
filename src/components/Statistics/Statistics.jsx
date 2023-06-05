import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  counters,
}) {
  if (countTotalFeedback > 0) {
    return (
      <ul className={css.list_style}>
        {counters.map(opt => (
          <li key={opt.name}>
            {opt.caption}: {opt.counter}
          </li>
        ))}
        <li>Total: {countTotalFeedback}</li>
        <li>Positive: {countPositiveFeedbackPercentage}%</li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string.isRequired,
      counter: PropTypes.number.isRequired,
    })
  ).isRequired,
};
