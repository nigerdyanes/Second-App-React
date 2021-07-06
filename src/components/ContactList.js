import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card w-50">
          <div class="card-body">
            <h5 class="card-title">{this.props.contact.nombre}</h5>
            <p class="card-text">{this.props.contact.numero}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class ContactList extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.contacts.map((contact) => {
          return <Contact contact={contact} />;
        })}
      </React.Fragment>
    );
  }
}

export default ContactList;
