function MaterialEval(props) {
    const noteValue = props.noteValue;
    const range = [1, 2, 3, 4, 5];

    return (
    <div>
        { range.map((rangeElem) =>
        noteValue >= rangeElem && <span key={rangeElem.toString()}>⭐️</span>
        )}
    </div>
    );
}
    
export default MaterialEval;