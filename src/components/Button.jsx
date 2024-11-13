/* eslint-disable react/prop-types */
export default function Button({ children, onClick }) {
  return (
    <button
      className="btn"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
