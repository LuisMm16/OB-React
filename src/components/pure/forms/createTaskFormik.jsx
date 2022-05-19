import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const CreateTaskFormik = ({ add }) => {

  const taskSchema = Yup.object().shape(
    {
      name: Yup.string()
        .min(4, 'Name too short')
        .required('Name is required'),
      description: Yup.string()
        .min(8, 'Description too short')
        .max(50, 'Description too long')
        .required('Description is required'),
      level: Yup.string()
        .oneOf(
          [LEVELS.BLOCKING, LEVELS.NORMAL, LEVELS.URGENT]
        )
        .required('Level is required')
    }
  );

  const initialValues = {
    name: '',
    description: '',
    completed: false,
    level: LEVELS.NORMAL
  }

  return (
    <div>
      <h4>
        Create Task
      </h4>
      <Formik
        initialValues={initialValues}
        validationSchema={taskSchema}
        onSubmit={(values) => {
          const newTask = new Task(
            values.name,
            values.description,
            false,
            values.level
          );
          add(newTask);
        }}
      >
        {({ errors, touched }) => (
          <Form className='form-outline flex-fill'>
            <Field
              id='name'
              name='name'
              placeholder='Name'
              type='text'
              className='form-control form-control-lg'
            />
            {
              errors.name && touched.name && (
                <ErrorMessage name='name' component='div'/>
              )
            }

            <Field
              id='description'
              name='description'
              placeholder='Description'
              type='text'
              className='form-control form-control-lg'
            />
            {
              errors.description && touched.description && (
                <ErrorMessage name='description' component='div' />
              )
            }
            <Field
              as='select'
              id='level'
              name='level'
              placeholder='Select Level'
              className='form-control form-control-lg'
            >
              <option value={LEVELS.NORMAL}>
                Normal
              </option>
              <option value={LEVELS.BLOCKING}>
                Blocking
              </option>
              <option value={LEVELS.URGENT}>
                Urgent
              </option>
            </Field>

            <button type='submit' className='btn btn-primary'>
              Create Task
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateTaskFormik;
