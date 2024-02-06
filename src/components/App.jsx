import { useState } from 'react'
import './App.css'
import { Description } from './Description/Description.jsx'
import { Options } from './Options/Options.jsx'
import { Feedback } from './Feedback/Feedback.jsx'


function App() {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleClick = type => {
    setReviews({ ...reviews, [type]: reviews[type] + 1 })
  }
  const handleReset = () => {
    setReviews({good: 0, neutral: 0, bad: 0})
  }
  const total = reviews.good + reviews.neutral + reviews.bad;
  
  return (
    <div>
      <Description />
      <Options onUpdate={handleClick} onReset={handleReset} isHidden={total} />
      <Feedback reviews={reviews} />
    </div>
  )
}

export default App
