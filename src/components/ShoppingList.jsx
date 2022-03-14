const materialList = [
    'x-back harness',
    'padded collar',
    'musher belt',
    'polar martingale collar',
    'tow line bungee',
    'snow hook',
    'mushing lines - rigging',
    'snap',
    'bungee line'
]

function List() {
    return (
        <ul>
            {materialList.map((material, index) => (
                <li key={`${material}-${index}`}>{ material }</li>
            ))}
        </ul>
    );
}

export default List;