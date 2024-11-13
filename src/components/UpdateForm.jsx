import Input from './Input';
import Button from './Button';
export default function UpdateForm() {
  return (
    <form className="update-form">
      <h2 className="form-title">Update BTC</h2>
      <div className="update-form-title">
        <Input
          label="title"
          placeholder="BTC"
        />
      </div>
      <div className="update-form-title">
        <Input
          label="rate"
          placeholder="$83000"
        />
      </div>
      <div className="update-form-title">
        <Input
          label="wallet"
          placeholder="2.3BTC"
        />
      </div>
      <div className="update-form-action">
        <Button>Update</Button>
      </div>
    </form>
  );
}
