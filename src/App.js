import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import CreateContact from './pages/CreateContact'
import Home from "./pages/Home";


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create-contact" component={CreateContact} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
