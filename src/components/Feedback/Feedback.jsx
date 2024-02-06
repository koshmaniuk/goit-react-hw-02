export const Feedback = ({ reviews: { good, neutral, bad }, total, percentage }) => {
    const totalFeedback = total;
    const positiveFeedback = percentage;
    if (totalFeedback !== 0) {
        return (<div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total} </p>
            <p>Positive: {positiveFeedback}% </p>

        </div>
        )
    } return <p>No feedback yet</p>
    
        
}