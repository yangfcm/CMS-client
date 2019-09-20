const TextArea = ({
  id,
  input,
  label,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <div className="form-group">
      { label && <label htmlFor={id}>{label}</label> }
      <div>
        <textarea
          id={id}
          className={
            touched && error ? "form-control is-invalid" : "form-control"
          }
          placeholder={placeholder}
          {...input}
        >
          {input.value}
        </textarea>
        <div className="invalid-feedback">{touched && error && error}</div>
      </div>
    </div>
  );
};

export default TextArea;
