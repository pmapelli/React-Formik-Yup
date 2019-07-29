import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MaskedInput from "react-text-mask";

const phoneNumberMask = [
    "(",
    /[1-9]/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];

class App extends React.Component {
  render() {
        return (
            <Formik               
                initialValues={{
                    name: '',
                    email: '',
                    age: '',
                    phone: '' 
                }}             
                validationSchema={Yup.object().shape({                
                    name: Yup.string()
                        .required('Nome é obrigatório'),
                    email: Yup.string()
                        .required('Email é obrigatório')    
                        .email('Email invalido'),
                    age: Yup.number()
                        .required('Idade é obrigatório')
                        .typeError('Idade precisa ser um número')
                        .positive()
                        .integer(),
                    phone: Yup.string()
                        .required('Telefone é obrigatório'),
                })}
                onSubmit={ () => {
                    alert('Cadastro Finalizado!')
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Nome *</label>
                            <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div> 
                        <div className="form-group">
                            <label htmlFor="age">Idade *</label>
                            <Field name="age" type="string" className={'form-control' + (errors.age && touched.age ? ' is-invalid' : '')} />
                            <ErrorMessage name="age" component="div" className="invalid-feedback" />
                        </div>       
                        <div className="form-group">
                            <label htmlFor="phone">Telefone *</label>
                            <Field name="phone" render={({ field }) => (
                            <MaskedInput
                                {...field}
                                mask={phoneNumberMask}
                                id="phone"
                                type="string"
                                className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')}
                            />
                        )} />
                            <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Cadastrar</button>
                            <button type="reset" className="btn btn-secondary">Limpar</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default App; 