import React, { Component } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";
import Card from "./Card";

class Main extends Component {
  state = {
    url: "https://limitless-beyond-13402.herokuapp.com/products",
    items: [],
    sorts: ["Rating", "City", "Name", "Votes"],
  };

  componentDidMount() {
    this.fetchGet();
  }

  fetchGet = async (sortBy = "", page = "") => {
    const { url } = this.state;
    const requestURL = `${url}?sortBy=${sortBy}&page=${page}`;
    try {
      const response = await axios.get(requestURL);
      this.setState({ ...response.data });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const sortBy = event.target.value;
    this.fetchGet(sortBy);
  };

  render() {
    const { items, sorts } = this.state;
    return (
      <section id="main">
        <h1>Main Page</h1>
        <Dropdown sorts={sorts} handleChange={this.handleChange} />
        <div id="cards">
          {items.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </section>
    );
  }
}

export default Main;
