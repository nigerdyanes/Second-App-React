import React from "react";

class FormContact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card text-center">
          <div className="card-header">
            <h4>Create Contact</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  onChange={this.props.onChange}
                  type="text"
                  className="form-control"
                  name="nombre"
                  value={this.props.formValues.nombre}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Número</label>
                <input
                  onChange={this.props.onChange}
                  type="text"
                  className="form-control"
                  name="numero"
                  value={this.props.formValues.numero}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
            </form>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default FormContact;
