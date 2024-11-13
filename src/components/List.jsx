/* eslint-disable react/prop-types */
import Item from './Item';

function List({ list }) {
  return (
    <ul className="list">
      {list.map(item => (
        <Item
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
}

export default List;
