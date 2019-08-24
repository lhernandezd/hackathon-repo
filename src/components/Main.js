import React, { Component } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";
import Card from "./Card";
import "../css/Main.css";

class Main extends Component {
  state = {
    url: "https://limitless-beyond-13402.herokuapp.com/products",
    items: [],
    sorts: ["Rating", "City", "Name", "Votes"],
    numberOfPages: 5,
    pagesArray: [],
  };

  componentDidMount() {
    this.fetchGet();
    this.arrayOfPages();
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

  arrayOfPages = () => {
    const { numberOfPages } = this.state;

    const array = Array(numberOfPages);
    const arrayOfNumbers = [...array.keys()];

    arrayOfNumbers.forEach((number, index) => {
      return (arrayOfNumbers[index] = number + 1);
    });

    this.setState({
      pagesArray: arrayOfNumbers,
    });
  };

  handlePage = page => {
    this.fetchGet("", page);
  };

  render() {
    const { items, sorts, pagesArray, currentPage } = this.state;
    return (
      <section id="main">
        <h1>Main Page</h1>
        {pagesArray.map((number, index) => (
          <span
            id="pages"
            key={index}
            onClick={() => this.handlePage(number)}
            className={currentPage === number ? "active" : null}
          >
            {number}
          </span>
        ))}
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
