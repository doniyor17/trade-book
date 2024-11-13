import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import UpdateForm from './components/UpdateForm';

const cryptos = [
  {
    id: 1,
    title: 'BTC',
    rate: '83000',
    wallet: '2.3 BTC',
    net: '190 900',
  },
  {
    id: 2,
    title: 'SOL',
    rate: '123',
    wallet: '200 SOL',
    net: '246 000',
  },
];
function App() {
  const [crypto, setCrypto] = useState(cryptos);
  return (
    <>
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="wrapper-list">
            <List list={crypto} />
          </div>
          <div className="wrapper-form">
            <div className="form">
              <UpdateForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
