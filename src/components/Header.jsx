/* eslint-disable react/prop-types */
import Button from './Button';
export default function Header({ onToggleForm }) {
  return (
    <header className="header">
      <h1 className="title">Trade Book</h1>
      <div className="btn-wrap">
        <Button onClick={onToggleForm}>Add crypto</Button>
      </div>
    </header>
  );
}
