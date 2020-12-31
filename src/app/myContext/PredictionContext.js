import React, { Component } from "react";

const PredictionContext = React.createContext();

export class PredictionProvider extends Component {
  state = {
    total: null,
  };

  componentDidMount() {
    this.makeHttpRequestWithPage();
  }

  makeHttpRequestWithPage = async (pageNumber) => {
    let response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/predictions/admin/predictions`,
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
    const { total } = this.state;
    return (
      <PredictionContext.Provider value={{ total }}>
        {this.props.children}
      </PredictionContext.Provider>
    );
  }
}

export default PredictionContext;
