import { reduxForm, Field } from "redux-form";
import TextField from "../form/TextField";
import TextArea from "../form/TextArea";
import { validateCommentForm } from "../../utils/validate";

class CommentForm extends React.Component {
  formSubmit = formValues => {
    const { postId } = this.props;
    console.log(formValues);
    console.log(postId);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <React.Fragment>
        <h4 className="mb-4">Leave your comment</h4>
        <form onSubmit={handleSubmit(this.formSubmit)}>
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
            <button className="btn btn-outline-primary">Submit</button>
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
  touchOnChange: false
})(CommentForm);

export default CommentForm;
