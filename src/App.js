import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class App extends React.Component {
  render() {
        return (
            <Formik               
                initialValues={{
                    name: '',
                    lastName: '',
                    age: '',
                    phone: '' 
                }}             
                validationSchema={Yup.object().shape({                
                    name: Yup.string()
                        .required('Nome é obrigatório'),
                    email: Yup.string()
                        .email('Email invalido')
                        .required('Email é obrigatório'),
                    age: Yup.number()
                        .required('Idade é obrigatório'),
                    phone: Yup.string()
                        .required('Telefone é obrigatório') 
                        .matches('/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/', 'Número de telefone inválido')                                                         
                })}
                onSubmit={fields => {
                    alert('Sucesso!! :-)\n\n' + JSON.stringify(fields, null, 4))
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
                            <Field name="age" type="text" className={'form-control' + (errors.age && touched.age ? ' is-invalid' : '')} />
                            <ErrorMessage name="age" component="div" className="invalid-feedback" />
                        </div>       
                        <div className="form-group">
                            <label htmlFor="phone">Telefone *</label>
                            <Field name="phone" type="text" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} />
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