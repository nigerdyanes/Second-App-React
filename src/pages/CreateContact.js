import React from "react";

import Contact from "../components/Contact";
import FormContact from "../components/FormContact";

class CreateContact extends React.Component {
  state = {
    form: {
      nombre: "",
      numero: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-6">
              <Contact
                nombre={this.state.form.nombre}
                numero={this.state.form.numero}
              />
            </div>
            <div className="col-6">
              <FormContact
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateContact;
