export const validateCommentForm = values => {
  const errors = {};
  const { email, firstName, lastName, comment } = values;

  if (!email || email.trim().length < 1) {
    errors.email = "Email cannot be blank";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!firstName || firstName.trim().length < 1) {
    errors.firstName = "First Name cannot be blank";
  }

  if (!lastName || lastName.trim().length < 1) {
    errors.lastName = "Last Name cannot be blank";
  }

  if (!comment || comment.trim().length < 1) {
    errors.comment = "First Name cannot be blank";
  }

  return errors;
};
