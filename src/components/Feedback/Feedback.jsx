export const Feedback = ({ reviews: {good, neutral, bad}}) => {
    const totalFeedback = good + neutral + bad;
    if (totalFeedback !== 0) {
        return (<div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {good + neutral + bad} </p>
        </div>
        )
    } return <p>No feedback yet</p>
    
        
}