import css from './Feedback.module.css';

export function FeedbackOptions({ handleUpdate, counters }) {
  return (
    <div className={css.main_container}>
      <div className={css.btn_container}>
        {counters.map(opt => (
          <div key={opt.name} className={css.btn_vertical}>
            <h3 className={css.number}>{opt.counter}</h3>
            <button type="button" name={opt.name} onClick={handleUpdate}>
              {opt.caption}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
