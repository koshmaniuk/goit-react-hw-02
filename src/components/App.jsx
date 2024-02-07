import { useState, useEffect } from 'react';
import './App.css';
import { Description } from './Description/Description.jsx';
import { Options } from './Options/Options.jsx';
import { Feedback } from './Feedback/Feedback.jsx';
import { Notification } from './Notification/Notification.jsx';

function App() {
  const [reviews, setReviews] = useState(() => {
    const reviewsFromLs = window.localStorage.getItem('saved-reviews');
    if (reviewsFromLs !== null) {
      return JSON.parse(reviewsFromLs);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const handleClick = type => {
    setReviews({ ...reviews, [type]: reviews[type] + 1 });
  };

  const handleReset = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem('saved-reviews', JSON.stringify(reviews));
  }, [reviews]);

  const total = reviews.good + reviews.neutral + reviews.bad;
  const percentage = Math.round(((reviews.good + reviews.neutral) / total) * 100);

  return (
    <div>
      <Description />
      <Options onUpdate={handleClick} onReset={handleReset} isHidden={total} />

      {total === 0 ? (
        <Notification />
      ) : (
        <Feedback reviews={reviews} total={total} percentage={percentage} />
      )}
    </div>
  );
}

export default App;
