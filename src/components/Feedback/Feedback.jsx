import css from './Feedback.module.css';

export const Feedback = ({ reviews: { good, neutral, bad }, total, percentage }) => {
  const positiveFeedback = percentage;

  return (
    <div className={css.container}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total} </p>
      <p>Positive: {positiveFeedback}% </p>
    </div>
  );
};
