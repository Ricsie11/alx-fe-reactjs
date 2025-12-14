import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  function handleSubmit(values, { resetForm }) {
    // mock API call
    console.log("User Registered with Formik:", values);
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <h2>Formik Registration</h2>

        <Field name="username" placeholder="Username" />
        <ErrorMessage name="username" component="p" />

        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email" component="p" />

        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" component="p" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
