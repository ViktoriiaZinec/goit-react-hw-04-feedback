import { useState } from 'react';
import PropTypes from 'prop-types';
import { Statistics } from '../Statistics/Statistics';
import css from './Feedback.module.css';

export function FeedbackOptions() {
  const [counterGood, setCounterGood] = useState(0);
  const [counterNeutral, setCounterNeutral] = useState(0);
  const [counterBad, setCounterBad] = useState(0);

  const handleGoodClick = () => {
    setCounterGood(prevState => prevState + 1);
  };

  const handleNeutralClick = () => {
    setCounterNeutral(prevState => prevState + 1);
  };

  const handleBadClick = () => {
    setCounterBad(prevState => prevState + 1);
  };

  return (
    <div className={css.main_container}>
      <div className={css.btn_container}>
        <div className={css.btn_vertical}>
          <h3 className={css.number}>{counterGood}</h3>
          <button
            type="button"
            name="good"
            className={css.good_btn}
            onClick={handleGoodClick}
          >
            Good
          </button>
        </div>
        <div className={css.btn_vertical}>
          <h3 className={css.number}>{counterNeutral}</h3>
          <button
            type="button"
            name="neutral"
            className={css.neutral_btn}
            onClick={handleNeutralClick}
          >
            Neutral
          </button>
        </div>
        <div className={css.btn_vertical}>
          <h3 className={css.number}>{counterBad}</h3>
          <button
            type="button"
            name="bad"
            className={css.bad_btn}
            onClick={handleBadClick}
          >
            Bad
          </button>
        </div>
      </div>
      <h2>Statistics</h2>
      <Statistics
        counterGood={counterGood}
        counterNeutral={counterNeutral}
        counterBad={counterBad}
      />
    </div>
  );
}

FeedbackOptions.propTypes = {
  defaultValue: PropTypes.number,
};
