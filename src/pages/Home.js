import React from "react";

import ContactList from "../components/ContactList";

class Home extends React.Component {
  state = {
    data: [
      {
        nombre: "Tann",
        numero: 311237382,
      },
      {
        nombre: "Valle",
        numero: 452913443,
      },
      {
        nombre: "Maxim",
        numero: 868701360,
      },
      {
        nombre: "Freedman",
        numero: 913054567,
      },
      {
        nombre: "Carlina",
        numero: 129419377,
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <ContactList contacts={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
