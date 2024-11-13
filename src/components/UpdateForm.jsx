/* eslint-disable react/prop-types */
import Input from './Input';
import Button from './Button';
export default function UpdateForm({ selected }) {
  return (
    <form className="update-form">
      <h2 className="form-title">Update {selected?.title}</h2>
      <div className="update-form-title">
        <Input
          label="title"
          placeholder={selected?.title}
        />
      </div>
      <div className="update-form-title">
        <Input
          label="rate"
          placeholder={selected?.rate + '$'}
        />
      </div>
      <div className="update-form-title">
        <Input
          label="wallet"
          placeholder={selected?.wallet}
        />
      </div>
      <div className="update-form-action">
        <Button>Update</Button>
      </div>
    </form>
  );
}
