import { Section } from './Layout/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [counterGood, setCounterGood] = useState(0);
  const [counterNeutral, setCounterNeutral] = useState(0);
  const [counterBad, setCounterBad] = useState(0);

  const handleUpdate = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setCounterGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setCounterNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setCounterBad(prevState => prevState + 1);
        break;
      default:
        throw new Error('Unmatched name');
    }
  };
  const counters = [
    { counter: counterGood, name: 'good', caption: 'Good' },
    { counter: counterNeutral, name: 'neutral', caption: 'Neutral' },
    { counter: counterBad, name: 'bad', caption: 'Bad' },
  ];
  const countTotalFeedback = () => counterGood + counterNeutral + counterBad;

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() > 0) {
      return parseInt((counterGood / countTotalFeedback()) * 100);
    }
    return 0;
  };
  return (
    <Section title="Please leave feedback">
      <FeedbackOptions handleUpdate={handleUpdate} counters={counters} />
      <h2>Statistics</h2>
      <Statistics
        counters={counters}
        countTotalFeedback={countTotalFeedback()}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
};
