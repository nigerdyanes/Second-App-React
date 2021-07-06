import React from "react";

import profileImagen from "../images/girl.svg";

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={profileImagen}
                className="img-fluid rounded-start"
                alt="ImageProfile"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Contact</h5>
                <h1>{this.props.nombre}</h1>
                <br />
                <h1>{this.props.numero}</h1>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
