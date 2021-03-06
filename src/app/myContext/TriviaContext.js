import React, { Component } from "react";

const TriviaContext = React.createContext();

export class TriviaProvider extends Component {
  state = {
    total: null,
  };


  componentDidMount() {
    this.callAllTrivia();
  }
  callAllTrivia = async (pageNumber) => {
    let response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/trivia/admin/summary`,
      {
        method: "GET",
        headers: {
          "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
        },
      }
    );

    const data = await response.json();

    this.setState({
      total: data.total,
    });
  };
  render() {
    const { total } = this.state
    return (
      <TriviaContext.Provider
        value={{
          total
        }}
      >
        {this.props.children}
      </TriviaContext.Provider>
    );
  }
}

export default TriviaContext;
