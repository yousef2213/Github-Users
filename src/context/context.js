import React, { Component } from "react";
import DataMe from "./DataMe";
import allRepos from "./repos";

const GithubContext = React.createContext();

class GithubProvider extends Component {
  state = {
    query: "",
    me: DataMe,
    dataInformatin: [],
    languages: [],
    languagesRepo: [],
    allRepos,
  };

  handelChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handelSearch = (e) => {
    e.preventDefault();
  };
  handelSubmit = (e) => {
    let url = "https://api.github.com";
    let repos = `https://api.github.com/users/${this.state.query}/repos`;

    let rootUrl = `${url}/users/${this.state.query}`;
    fetch(rootUrl)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          dataInformatin: data,
        })
      );
    fetch(repos)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          languages: data,
        })
      );
  };

  render() {
    return (
      <GithubContext.Provider
        value={{
          ...this.state,
          handelChange: this.handelChange,
          handelSubmit: this.handelSubmit,
          handelSearch: this.handelSearch,
        }}
      >
        {this.props.children}
      </GithubContext.Provider>
    );
  }
}

const GithubConsumer = GithubContext.Consumer;

export { GithubProvider, GithubConsumer };
