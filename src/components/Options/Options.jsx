
export const Options = ({onUpdate, onReset, isHidden}) => {
    // console.log(isHidden);
    return(
        <div>
            <button onClick={() => onUpdate("good")}>Good</button>
            <button onClick={() => onUpdate("neutral")}>Neutral</button>
            <button onClick={() => onUpdate("bad")}>Bad</button>
            {/* <button onClick={onReset}>Reset</button> */}
            {isHidden !== 0 && <button onClick={onReset}>Reset</button>}
        </div>
        )
}