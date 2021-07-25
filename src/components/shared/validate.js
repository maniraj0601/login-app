export default function validate(values) {
  let errors = {};
  if (!values.username || values.username === "") {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(values.username)) {
    errors.username = "Username is invalid";
  }
  if (!values.password || values.password === "") {
    errors.password = "Password is required";
  } else if (values.password.length < 3) {
    errors.password = "Password must be 8 or more characters";
  }
  return errors;
}
