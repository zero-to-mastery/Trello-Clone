import React, { Component } from "react";
import "./index.css";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <p>You can not see this, but if you change this to any h1-h6 tag you would be able to see the text.</p>
      </Layout>
    );
  }
}

export default App;
