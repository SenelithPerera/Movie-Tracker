import React from 'react'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Row, Button, Form } from 'react-bootstrap'


export const LoginForm = ({ handleOnSubmit, setSessionModalOpen }) => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={yup.object().shape({
                email: yup.string().required(`Email can't be empty`),
                password: yup.string()
            })}
            onSubmit={handleOnSubmit}
            render={props => (
                <FormikForm style={{ margin: '12px' }} onSubmit={props.handleSubmit}>
                    <div className='form-group'>
                        <label>Email Address</label>
                        <Field
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={props.handleChange}
                            value={props.values.email}
                            onBlur={props.handleBlur}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <Field
                            className="form-control"
                            type="password"
                            name="password"
                            onChange={props.handleChange}
                            value={props.values.password}
                            onBlur={props.handleBlur}
                        />
                    </div>

                    <div className="form-group">
                        <div className="modal-footer">
                            <div
                                onClick={() => setSessionModalOpen({ modal: 'signUp', open: true })}
                                style={{ textAlign: 'center' }}
                            >
                                Sign up now |
                            </div>
                            <Button type='submit'>
                                Login
                            </Button>
                        </div>
                    </div>
                </FormikForm>
            )}
        />
    )
}
