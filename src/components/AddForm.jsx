/* eslint-disable react/prop-types */
import { useState } from 'react';

import Button from './Button';
function AddForm({ isShown, onAddCrypto, onToggleForm }) {
  const [title, setTitle] = useState('');
  const [rate, setRate] = useState('');
  const [wallet, setWallet] = useState('');
  const disabled = !title || !rate || !wallet;
  function handleAddCrypto(e) {
    e.preventDefault();

    if (!title || !rate || !wallet) return;

    const id = crypto.randomUUID();

    const newCrypto = { id, title: title.toUpperCase(), rate, wallet, net: rate * wallet };

    onAddCrypto(newCrypto);
    onToggleForm();

    setTitle('');
    setRate('');
    setWallet('');
  }
  return (
    <form className={`update-form ${isShown ? 'show' : 'hide'}`}>
      <h2 className="form-title">Add new crypto</h2>
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
        <Button
          disabled={disabled}
          onClick={handleAddCrypto}
        >
          Add
        </Button>
      </div>
    </form>
  );
}

export default AddForm;
