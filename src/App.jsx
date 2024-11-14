import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import UpdateForm from './components/UpdateForm';

const cryptos = [
  {
    id: 1,
    title: 'BTC',
    rate: 83000,
    wallet: 2.3,
    net: 190900,
  },
  {
    id: 2,
    title: 'SOL',
    rate: 123,
    wallet: 200,
    net: 246000,
  },
];
function App() {
  const [crypto, setCrypto] = useState(cryptos);
  const [selected, setSelected] = useState(null);

  function handleClearSelection() {
    setSelected(null);
  }

  function handleUpdate(crypto) {
    setCrypto(cryptos =>
      cryptos.map(item => (item.id === crypto.id ? { ...item, ...crypto } : item)),
    );
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="wrapper-list">
            <List
              list={crypto}
              selected={selected}
              onSelect={setSelected}
            />
          </div>
          <div className="wrapper-form">
            <div className="form">
              <UpdateForm
                selected={selected}
                onUpdate={handleUpdate}
                onClearSelection={handleClearSelection}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
