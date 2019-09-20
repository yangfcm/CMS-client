const TextField = ({
  id,
  input,
  label,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <div className="form-group row">
      {label && (
        <label className="col-sm-4 col-form-label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="col-sm-8">
        <input
          type="text"
          className={
            touched && error ? "form-control is-invalid" : "form-control"
          }
          id={id}
          placeholder={placeholder}
          {...input}
        />
        <div className="invalid-feedback">{touched && error && error}</div>
      </div>
    </div>
  );
};

export default TextField;
