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
    numberOfPages: 10,
    pagesArray: [],
    sortBy: "rating",
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
      this.arrayOfPages(response.data.numberOfPages);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const sortBy = event.target.value;
    this.setState({
      sortBy,
    });
    this.fetchGet(sortBy);
  };

  arrayOfPages = numberOfPages => {
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
    const { sortBy } = this.state;
    this.fetchGet(sortBy, page);
  };

  render() {
    const { items, sorts, pagesArray, currentPage, numberOfPages } = this.state;
    console.log(this.state);
    return (
      <section id="main">
        <div id="query">
          <div className="sort">
            <span className="sort__title">Ordenar</span>
            <div className="sort__selector">
              <Dropdown sorts={sorts} handleChange={this.handleChange} />
            </div>
          </div>
          <div id="pages" className="pages">
            <span className="pages__title">
              Página {currentPage} de {numberOfPages} |{" "}
            </span>
            {pagesArray.map((number, index) => {
              const length = pagesArray.length;
              return (
                <span
                  id={index}
                  key={index}
                  onClick={() => this.handlePage(number)}
                  className={
                    currentPage === number
                      ? "pages__item active"
                      : "pages__item"
                  }
                  style={
                    index === length - 1
                      ? { marginRight: 2 }
                      : { margin: "0px 2px" }
                  }
                >
                  {number}
                </span>
              );
            })}
          </div>
        </div>
        <div className="cards" id="cards">
          {items.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </section>
    );
  }
}

export default Main;
