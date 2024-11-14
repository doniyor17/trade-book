/* eslint-disable react/prop-types */
import Button from './Button';
import { useState } from 'react';
export default function UpdateForm({ selected, onUpdate, onClearSelection }) {
  const [title, setTitle] = useState('');
  const [rate, setRate] = useState('');
  const [wallet, setWallet] = useState('');
  function handleUpdate(e) {
    e.preventDefault();

    let net;
    if (rate === 0 || wallet === 0) {
      net = 0;
    }
    if (rate && wallet) {
      net = rate * wallet;
    }

    const newCrypto = {
      id: selected?.id,
      title: title ? title : selected?.title,
      rate: Number(rate ? rate : selected?.rate),
      wallet: Number(wallet ? wallet : selected?.wallet),
      net: isNaN(net) ? selected.net : net,
    };
    console.log(newCrypto);

    onUpdate(newCrypto);
    setTitle('');
    setRate('');
    setWallet('');
  }
  return (
    <form
      className="update-form"
      onSubmit={handleUpdate}
    >
      <h2 className="form-title">Update {selected?.title}</h2>
      <div className="update-form-title">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title..."
        />
      </div>
      <div className="update-form-title">
        <label htmlFor="rate">Rate</label>
        <input
          type="text"
          id="rate"
          value={rate}
          onChange={e => setRate(Number(e.target.value))}
          placeholder="Rate..."
        />
      </div>
      <div className="update-form-title">
        <label htmlFor="wallet">Wallet</label>
        <input
          type="text"
          id="wallet"
          value={wallet}
          onChange={e => setWallet(Number(e.target.value))}
          placeholder="Wallet..."
        />
      </div>
      <div className="update-form-action">
        <Button onClick={onClearSelection}>Clear</Button>
        <Button>Update</Button>
      </div>
    </form>
  );
}
