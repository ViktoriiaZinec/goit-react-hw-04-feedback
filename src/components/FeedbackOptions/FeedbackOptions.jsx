import { Component } from 'react';
import PropTypes from 'prop-types';
import { Statistics } from '../Statistics/Statistics';
import css from './Feedback.module.css';

export class FeedbackOptions extends Component {
  static propTypes = {
    defaultValue: PropTypes.number,
  };
  state = {
    counterGood: this.props?.defaultValue ?? 0,
    counterNeutral: this.props?.defaultValue ?? 0,
    counterBad: this.props?.defaultValue ?? 0,
  };
  handleUpdate = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        this.setState(prevState => ({
          counterGood: prevState.counterGood + 1,
        }));
        break;
      case 'neutral':
        this.setState(prevState => ({
          counterNeutral: prevState.counterNeutral + 1,
        }));
        break;
      case 'bad':
        this.setState(prevState => ({
          counterBad: prevState.counterBad + 1,
        }));
        break;
      default:
        throw new Error('Unmatched name');
    }
  };
  render() {
    const { counterGood } = this.state;
    const { counterNeutral } = this.state;
    const { counterBad } = this.state;
    return (
      <div className={css.main_container}>
        <div className={css.btn_container}>
          <div className={css.btn_vertical}>
            <h3 className={css.number}>{counterGood}</h3>
            <button
              type="button"
              name="good"
              className={css.good_btn}
              onClick={this.handleUpdate}
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
              onClick={this.handleUpdate}
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
              onClick={this.handleUpdate}
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
}
