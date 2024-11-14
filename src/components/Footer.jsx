/* eslint-disable react/prop-types */
export default function Footer({ totalNet, totalCoins }) {
  return (
    <footer>
      <div>
        <p>
          Total:
          <strong>{' ' + totalCoins > 0 ? totalCoins : 0}</strong>
          coins in wallet
        </p>
        <p>
          Net:
          <strong>{' ' + totalNet > 0 ? totalNet : 0} $</strong>
        </p>
      </div>
      <p>Trade Book. &copy; {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}
