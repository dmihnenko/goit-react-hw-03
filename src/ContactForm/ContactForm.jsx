import { Formik, Form, Field, ErrorMessage } from "formik";

import { nanoid } from "nanoid";
import css from "../ContactForm/ContactForm.module.css";
import * as Yup from "yup";

export default function ContactCofrm({ onAdd }) {
  const initialValues = {
    name: "",
    number: "",
  };
  const fieldID = nanoid();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(7, "too short")
      .max(10, "too long"),
  });

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    onAdd(values);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={(css.conteiner, css.contactForm)}>
        <div>
          <label htmlFor={`name-${fieldID}`}>Username </label>
          <Field type="text" name="name" id={`name-${fieldID}`} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div>
          <label htmlFor={`number-${fieldID}`}>Number </label>
          <Field type="text" name="number" id={`number-${fieldID}`} />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
