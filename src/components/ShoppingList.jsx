import { materialList } from '../datas/materialList';
import "../styles/ShoppingList.scss";
import MaterialItem from './MaterialItem';

function List() {
  const categories = materialList.reduce(
    (acc, material) =>
      acc.includes(material.category) ? acc : acc.concat(material.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={ cat }>{ cat }</li>
        ))}
      </ul>
      <ul className="productslist">
      { materialList.map(({ id, cover, name, isBestSale, isSpecialOffer, note}) => (
        <MaterialItem
            id={id}
			cover={cover}
			name={name}
			note={note}
            isBestSale={isBestSale}
            isSpecialOffer={isSpecialOffer}
        />
        ))}
      </ul>
    </div>
  );
}

export default List;