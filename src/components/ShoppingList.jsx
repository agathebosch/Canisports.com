import { materialList } from '../datas/materialList';
import "../styles/ShoppingList.scss"

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
        {materialList.map((material) => (
          <li className="productslist__item" key={ material.id }>
              { material.name }
              { material.isBestSale && <span> 🔥</span> }
              { material.isSpecialOffer && <div className="item__sales">Sales</div> }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;