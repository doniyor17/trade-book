/* eslint-disable react/prop-types */
import Button from './Button';
import Item from './Item';

function List({ list, selected, onSelect, onDelete, onToggleForm }) {
  if (!list.length)
    return (
      <div className="empty-list">
        <h3>
          Sorry, you do not have any crypto <span className="fa-solid fa-bitcoin-sign"></span>
        </h3>
        <Button onClick={onToggleForm}>Add crypto</Button>
      </div>
    );

  return (
    <ul className="list">
      {list.map(item => (
        <Item
          key={item.id}
          item={item}
          selected={selected}
          onSelect={onSelect}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default List;
