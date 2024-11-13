import Button from './Button';

/* eslint-disable react/prop-types */
function Item({ item }) {
  return (
    <li className="wrapper-list-item">
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
            <span>{item.wallet}</span>
          </div>
          <div>
            <strong>Net:</strong>
            <span>{item.net}$</span>
          </div>
        </div>
      </div>
      <Button>Update</Button>
    </li>
  );
}

export default Item;
