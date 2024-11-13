/* eslint-disable react/prop-types */
function Input({ label, placeholder }) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        id={label}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
