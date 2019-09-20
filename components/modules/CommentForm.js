import { reduxForm, Field, reset } from "redux-form";
import TextField from "../form/TextField";
import TextArea from "../form/TextArea";
import { validateCommentForm } from "../../utils/validate";

class CommentForm extends React.Component {
  render() {
    const { handleSubmit, isSubmitting } = this.props;
    return (
      <React.Fragment>
        <h4 className="mb-4">
          <i className="far fa-edit"></i>Leave your comment
        </h4>
        <form onSubmit={handleSubmit(this.props.formSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <Field
                id="firstName"
                name="firstName"
                label="First Name"
                placeholder="First Name"
                component={TextField}
              />
            </div>
            <div className="col-md-6">
              <Field
                id="lastName"
                name="lastName"
                label="Last Name"
                placeholder="Last Name"
                component={TextField}
              />
            </div>
            <div className="col-md-6">
              <Field
                id="email"
                name="email"
                label="Your Email"
                placeholder="Your Email"
                component={TextField}
              />
            </div>
            <div className="col-12">
              <Field
                id="comment"
                name="comment"
                label="Your Comment"
                component={TextArea}
              />
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-outline-primary" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

CommentForm = reduxForm({
  form: "commentForm",
  validate: validateCommentForm,
  touchOnBlur: false,
  touchOnChange: false,
  onSubmitSuccess: (result, dispatch) => {
    // Reset form after submitted successfully
    return dispatch(reset("commentForm"));
  }
})(CommentForm);

export default CommentForm;
