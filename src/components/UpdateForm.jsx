/* eslint-disable react/prop-types */
import { useState } from 'react';

import Button from './Button';
export default function UpdateForm({ selected, isShown, onUpdate, onClearSelection }) {
  const [title, setTitle] = useState('');
  const [rate, setRate] = useState('');
  const [wallet, setWallet] = useState('');

  function handleUpdate(e) {
    e.preventDefault();

    let net = (rate ? rate : selected?.rate) * (wallet ? wallet : selected?.wallet);

    const newCrypto = {
      id: selected?.id,
      title: title ? title : selected?.title,
      rate: Number(rate ? rate : selected?.rate),
      wallet: Number(wallet ? wallet : selected?.wallet),
      net: isNaN(net) ? selected.net : net,
    };

    onUpdate(newCrypto);
    setTitle('');
    setRate('');
    setWallet('');
  }
  return (
    <form
      className={`update-form ${isShown ? 'show' : 'hide'} update-form`}
      onSubmit={handleUpdate}
    >
      <h2 className="form-title">Update {selected?.title}</h2>
      <div className="update-form-title">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className={`${selected?.id ? '' : 'disabled'}`}
          value={title}
          placeholder="Title..."
          disabled={selected?.id ? false : true}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="update-form-title">
        <label htmlFor="rate">Rate</label>
        <input
          type="text"
          id="rate"
          className={`${selected?.id ? '' : 'disabled'}`}
          value={rate}
          placeholder="Rate..."
          disabled={selected?.id ? false : true}
          onChange={e => setRate(Number(e.target.value))}
        />
      </div>
      <div className="update-form-title">
        <label htmlFor="wallet">Wallet</label>
        <input
          type="text"
          id="wallet"
          className={`${selected?.id ? '' : 'disabled'}`}
          value={wallet}
          placeholder="Wallet..."
          disabled={selected?.id ? false : true}
          onChange={e => setWallet(Number(e.target.value))}
        />
      </div>
      <div className="update-form-action">
        <Button
          disabled={selected?.id ? false : true}
          onClick={onClearSelection}
        >
          Clear
        </Button>
        <Button disabled={selected?.id ? false : true}>Update</Button>
      </div>
    </form>
  );
}
