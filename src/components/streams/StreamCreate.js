import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component{

    renderError({ error, touched }) {
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = (formProps) => {
        return(
            <div className="field">
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off"/>
                {this.renderError(formProps.meta)}
            </div>
        );
    }

    onSubmit(formProps){
        console.log(formProps);
    }    

    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Title"/>
                <Field name="description" component={this.renderInput} label="Description"/>
                <button className="ui button primary">Done</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};
    
    if(!formValues.title){
        errors.title = "Please enter a title"
    }

    if(!formValues.description){
        errors.description = "Please enter a description"
    }

    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);