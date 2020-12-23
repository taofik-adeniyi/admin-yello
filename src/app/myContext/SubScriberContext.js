import React, { Component } from "react";

const SubscriberContext = React.createContext();

export class SubScriberProvider extends Component {
  state = {
    username: "Adeniyi Taofik",
    isAutheticated: false,
    allSubs: [],
    limit: 1000
  };

  totalAmount = 0;

  componentDidMount() {
    this.callAllSubscription(this.state.limit, this.state.currentPage);
  }
//   componentDidMount() {
//     this.getPastWeek(this.togetPastWeek, this.togetCurrentDate, this.state.limit);
//   }

  togetCurrentDate = () => {
      const currentDate = new Date()
      const outcome = currentDate.toLocaleDateString('en-US')
      return outcome
  }

  togetPastWeek = () => {
    const sevenDays = new Date();
    const outcome =  sevenDays.setDate(sevenDays.getDate() - 7);
    const result = outcome.toLocaleDateString('en-US')
    return result;
  };

  toGetPastMonth = () => {
    const OneMonth = new Date();
    const outcome =  OneMonth.setDate(OneMonth.getDate() - 30);
    const result = outcome.toLocaleDateString('en-US');
    return result;
  };

  toGetPastTwoMonth = () => {
    const TwoMonth = new Date();
    const outcome =  TwoMonth.setDate(TwoMonth.getDate() - 60);
    const result = outcome.toLocaleDateString('en-US');
    return result;
  };

  togetAll = () => {
    const TodaysDate = new Date();
    const BeginningDate = new Date();
    const outcome = BeginningDate.setDate(BeginningDate.getDate() - 110);
    const result = outcome.toLocaleDateString('en-US');
    return result;
  };

  callAllSubscription = async () => {
    let response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/subscriptions/v1/subscriptions?limit=1000`,
      {
        method: "GET",
        headers: {
          "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
        },
      }
    );

    const data = await response.json();
    // console.log('subs datas ', data.data);
    this.setState({
      allSubs: data.data,
    });
  };

  getPastWeek = async (dateFrom, dateTo, limit) => {
    let response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/subscriptions/v1/subscriptions?dateFrom=${dateFrom}&dateTo=${dateTo}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
        },
      }
    );

    const data = await response.json();
    // console.log('subs datas ', data.data);
    this.setState({
      allSubs: data.data,
    });
  };

  logIn = () => {
    this.setState({
      username: "Taofik",
      isAutheticated: true,
    });
  };

  logOut = () => {
    this.setState({
      username: "",
      isAutheticated: false,
    });
  };
  render() {
    this.state.allSubs.map((subs) => {
      this.totalAmount += Number(subs.amount);
    });

    const { username, isAutheticated, total } = this.state;
    const { logIn, logOut, totalAmount } = this;
    return (
      <SubscriberContext.Provider
        value={{
          username,
          isAutheticated,
          total,
          totalAmount,
          logIn,
          logOut,
        }}
      >
        {this.props.children}
      </SubscriberContext.Provider>
    );
  }
}

export default SubscriberContext;
