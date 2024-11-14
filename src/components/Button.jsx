/* eslint-disable react/prop-types */
export default function Button({ children, isSmall, disabled, onClick }) {
  return (
    <button
      className={`btn ${isSmall ? 'small-btn' : ''} ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
