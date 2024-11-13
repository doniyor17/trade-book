/* eslint-disable react/prop-types */
import Item from './Item';

function List({ list, selected, onSelect }) {
  return (
    <ul className="list">
      {list.map(item => (
        <Item
          key={item.id}
          item={item}
          selected={selected}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}

export default List;
