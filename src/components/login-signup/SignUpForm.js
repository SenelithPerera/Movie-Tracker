import React from 'react'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Row, Button, Form } from 'react-bootstrap'

export const SignUpForm = ({ handleOnSubmit, setSessionModalOpen }) => {
    return (
        <Formik
            initialValues={{
                email: '',
                username: '',
                password: ''
            }}
            validationSchema={yup.object().shape({
                email: yup.string().email().required(`Email can't be empty`),
                username: yup.string().required(`username can't be empty`),
                password: yup.string().required(`password can't be empty`)
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
                        <label>Username</label>
                        <Field
                            className="form-control"
                            type="text"
                            name="username"
                            onChange={props.handleChange}
                            value={props.values.username}
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
                                onClick={() => setSessionModalOpen({ modal: 'signIn', open: true })}
                                style={{ textAlign: 'center' }}
                            >
                                Login
                            </div>
                            <Button type='submit'>
                                Sign up
                            </Button>
                        </div>
                    </div>
                </FormikForm>
            )}
        />
    )
}