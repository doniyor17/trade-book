import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import UpdateForm from './components/UpdateForm';
import AddForm from './components/AddForm';

function App() {
  const list = JSON.parse(localStorage.getItem('cryptos'));
  let cryptos = [];
  if (list && list.length) {
    cryptos = list;
  } else {
    localStorage.setItem('cryptos', JSON.stringify(cryptos));
    cryptos = [];
  }
  const [crypto, setCrypto] = useState(cryptos);
  const [selected, setSelected] = useState(null);
  const [isShown, setIsShown] = useState(false);

  const totalNet = crypto.reduce((acc, item) => acc + item.net, 0);
  const totalCoins = crypto.length;

  function handleClearSelection() {
    setSelected(null);
  }

  function handleUpdate(crypto) {
    let list = JSON.parse(localStorage.getItem('cryptos'));
    const newList = list.map(item => (item.id === crypto.id ? { ...crypto } : item));

    localStorage.setItem('cryptos', JSON.stringify(newList));

    setCrypto(cryptos => cryptos.map(item => (item.id === crypto.id ? { ...crypto } : item)));
    setSelected(null);
  }

  function handleFormToggle() {
    setIsShown(isShown => !isShown);
  }

  function handleAddCrypto(crypto) {
    let list = JSON.parse(localStorage.getItem('cryptos'));

    localStorage.setItem('cryptos', JSON.stringify([crypto, ...list]));

    setCrypto(cryptos => [crypto, ...cryptos]);
  }

  function handleDeleteCrypto(id) {
    const confirmed = confirm('Are you sure?');
    if (!confirmed) return;

    let list = JSON.parse(localStorage.getItem('cryptos'));

    localStorage.setItem('cryptos', JSON.stringify(list.filter(item => item.id !== id)));

    setCrypto(cryptos => cryptos.filter(item => item.id !== id));
  }

  return (
    <>
      <Header onToggleForm={handleFormToggle} />
      <div className="container">
        <div className="wrapper">
          <div className="wrapper-list">
            <List
              list={crypto}
              selected={selected}
              onSelect={setSelected}
              onDelete={handleDeleteCrypto}
              onToggleForm={handleFormToggle}
            />
          </div>
          <div className="wrapper-form">
            <div className="form">
              <AddForm
                isShown={isShown}
                onAddCrypto={handleAddCrypto}
                onToggleForm={handleFormToggle}
              />
              <UpdateForm
                selected={selected}
                isShown={!isShown}
                onUpdate={handleUpdate}
                onClearSelection={handleClearSelection}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer
        totalNet={totalNet}
        totalCoins={totalCoins}
      />
    </>
  );
}

export default App;
