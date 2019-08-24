import React, { Component } from "react";
import axios from "axios";

class Main extends Component {
  state = {
    url: "https://limitless-beyond-13402.herokuapp.com/products",
    items: [],
  };

  componentDidMount() {
    this.fetchGet();
  }

  fetchGet = async () => {
    const { url } = this.state;
    try {
      const response = await axios.get(url);
      this.setState({ ...response.data });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    console.log(this.state);
    return (
      <section>
        <h1>Main Page</h1>
      </section>
    );
  }
}

export default Main;
