import Button from './Button';

/* eslint-disable react/prop-types */
function Item({ item, selected, onSelect, onDelete }) {
  return (
    <li className={`wrapper-list-item ${item.id === selected?.id ? 'active-item' : ''}`}>
      <div className="wrapper-list-item-content">
        <div className="wrapper-list-item-content-currency">
          <h3>{item.title}</h3>
          <div>
            <strong>Rate:</strong>
            <span>{item.rate}$</span>
          </div>
        </div>
        <div className="wrapper-list-item-content-wallet">
          <div>
            <strong>Wallet:</strong>
            <span>{item.wallet + ' ' + item.title}</span>
          </div>
          <div>
            <strong>Net:</strong>
            <span>{item.net}$</span>
          </div>
        </div>
      </div>
      <div className="wrapper-list-item-actions">
        <Button
          isSmall={true}
          onClick={() => onSelect(item)}
        >
          <span className="fa fa-pen"></span>
        </Button>
        <Button
          isSmall={true}
          onClick={() => onDelete(item.id)}
        >
          <span className="fa fa-trash"></span>
        </Button>
      </div>
    </li>
  );
}

export default Item;
