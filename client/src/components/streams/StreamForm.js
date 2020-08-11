import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  // Needs to check if there's an error by seeing if the input has been touched and an error exists.
  checkError({ error, touched }) {
    return touched && error;
  }

  // renders the error when checkError returns true
  renderError(meta) {
    if (this.checkError(meta)) {
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
  }

  // Take the input from formProps passes as an argument
  // Take all values of formProps.input and assign it to our input JSX tag
  renderInput = ({ input, label, meta }) => {
    const className = `field ${this.checkError(meta) ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  // The input values are passed as argument and use onSubmit as a callback from streamEdit or streamCreate
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  // The render function to render the form.
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)} //HandleSubmit() is called, once it processses the form, calls this.onSubmit()
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// Validates the form, and creates errors if there is not title or description.
const validate = (formValues) => {
  const errors = {};

  // Use the name of the Field that was set in Render()
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};

// Exports the redux form, calling this react component class as a param
export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);
