import { useState } from "react";

const Alert = props => {
  const [isOpen, setOpen] = useState(true);
  const { message } = props;
  if (!isOpen) {
    return null;
  }
  return (
    <div className="alert alert-danger text-center">
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        onClick={() => {
          setOpen(false);
        }}
      >
        &times;
      </button>
      <p className="mb-0">{message}</p>
    </div>
  );
};

export default Alert;
