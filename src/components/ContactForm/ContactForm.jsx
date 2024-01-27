import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import css from './ContactForm.module.css';

const validationFormSchema = yup.object().shape({
  name: yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Requiered'),
  number: yup.string().required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();
  const model = nanoid();
  return (
    <div>
      <Formik
        validationSchema={validationFormSchema}
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          onAdd({ id: model, ...values });
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <div className={css.container}>
            <div className={css.labelContainer}>
              <label htmlFor={nameId}>Name</label>
              <Field className={css.input} type="text" id={nameId} name="name" />
              <ErrorMessage name="name" component="span" />
            </div>
            <div className={css.labelContainer}>
              <label htmlFor={numberId}>Number</label>
              <Field className={css.input} type="text" id={numberId} name="number" />
              <ErrorMessage name="number" component="span" />
            </div>
            <button className={css.button} type="submit">
              Add Contact
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
