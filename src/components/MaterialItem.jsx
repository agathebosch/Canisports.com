import MaterialEval from './MaterialEval';
import "../styles/MaterialItem.scss";

function MaterialItem({ id, cover, name, isBestSale, isSpecialOffer, note }) {
    return (
        <li key={id} className='item'>
            <img className='item__cover' src={cover} alt={`${name} cover`} />
            <div>
                {name}
                {isBestSale && <span> 🔥</span>}
            </div>
            {isSpecialOffer && <div className="item__sales">Sales</div>}
            <div>
                <MaterialEval notevalue={note} />
            </div>
        </li>
    );
}

export default MaterialItem;