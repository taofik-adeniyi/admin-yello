import React, { Component } from "react";
import moment from "moment";

const SubscriberContext = React.createContext();

export class SubScriberProvider extends Component {
  state = {
    username: "Adeniyi Taofik",
    isAutheticated: false,
    allSubs: [],
    oneWeekSub: [],
    limit: 1000,
  };

  totalAmount = 0;
  totalWeekAmount = 0;
  
  // todays subs req
  //   componentDidMount() {
  //     this.togetCurrentDate(
  //       this.togetPastWeek(),
  //       this.togetCurrentDate(),
  //       this.state.limit
  //     );
  //   }

  // past week subs req
  componentDidMount() {
    this.getPastWeek(
      this.aweek,
      this.tday,
      this.state.limit
    );
    // console.log('componentdidmount', this.aweek);
    // console.log('componentdidmount', this.tday);
  }


// past month subs req
//   componentDidMount() {
//     this.togetCurrentDate(
//       this.togetPastWeek(),
//       this.togetCurrentDate(),
//       this.state.limit
//     );
//   }

// past two month subs req
  // componentDidMount() {
  //   this.togetCurrentDate(
  //     this.togetPastWeek(),
  //     this.togetCurrentDate(),
  //     this.state.limit
  //   );
  // }

  //all subs req
  componentDidMount() {
    this.callAllSubscription(this.state.limit);
  }


  ///function call to request for todays subscription
  // getToday = async (dateFrom, dateTo, limit) => {
  //   let response = await fetch(
  //     `${process.env.REACT_APP_BASE_URL}/subscriptions/v1/subscriptions?dateFrom=${dateFrom}&dateTo=${dateTo}&limit=${limit}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
  //       },
  //     }
  //   );

  //   const one = await response.json();
  //   console.log("past week datas ", one.data);
  //   this.setState({
  //     oneWeekSub: one.data,
  //   });
  // };

  



  ///function call to request for last week till date subscription
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

    const one = await response.json();
    console.log("past week datas ", one.data);
    this.setState({
      oneWeekSub: one.data,
    });
  };

  ///function call to request for last month till date subscription
  // getPastMonth = async (dateFrom, dateTo, limit) => {
  //   let response = await fetch(
  //     `${process.env.REACT_APP_BASE_URL}/subscriptions/v1/subscriptions?dateFrom=${dateFrom}&dateTo=${dateTo}&limit=${limit}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
  //       },
  //     }
  //   );

  //   const one = await response.json();
  //   console.log("past week datas ", one.data);
  //   this.setState({
  //     oneWeekSub: one.data,
  //   });
  // };

  ///function call to request for last month till date subscription
  // getPastTwoMonth = async (dateFrom, dateTo, limit) => {
  //   let response = await fetch(
  //     `${process.env.REACT_APP_BASE_URL}/subscriptions/v1/subscriptions?dateFrom=${dateFrom}&dateTo=${dateTo}&limit=${limit}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
  //       },
  //     }
  //   );

  //   const one = await response.json();
  //   console.log("past week datas ", one.data);
  //   this.setState({
  //     oneWeekSub: one.data,
  //   });
  // };

  ///function call to request for all subscription
  callAllSubscription = async (limit) => {
    let response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/subscriptions/v1/subscriptions?limit=${limit}`,
      {
        method: "GET",
        headers: {
          "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
        },
      }
    );

    const data = await response.json();
    // console.log("all time datas ", data.data);
    this.setState({
      allSubs: data.data,
    });
  };


  

  //to get current date
  togetCurrentDate = () => {
    const outcome = moment().format("DD-MM-YYYY");
    return outcome;
  };


  //to get past week date 
  togetPastWeek = () => {
    const sevenDays = new Date();
    const outcome = sevenDays.setDate(sevenDays.getDate() - 7);
    const result = moment(outcome).format("DD-MM-YYYY");
    return result;
  };

  // to get past month date
  // toGetPastMonth = () => {
  //   const OneMonth = new Date();
  //   const outcome = OneMonth.setDate(OneMonth.getDate() - 30);
  //   const result = moment(outcome).format("DD-MM-YYYY");
  //   return result;
  // };

  // to get past two month date
  // toGetPastTwoMonth = () => {
  //   const TwoMonth = new Date();
  //   const outcome = TwoMonth.setDate(TwoMonth.getDate() - 60);
  //   const result = moment(outcome).format("DD-MM-YYYY");
  //   return result;
  // };

  /// to get from inception of time of launch
  // togetAllDays = () => {
  //   const TodaysDate = new Date();
  //   const BeginningDate = new Date();
  //   const outcome = BeginningDate.setDate(BeginningDate.getDate() - 110);
  //   const result = outcome.toLocaleDateString("en-US");
  //   return result;
  // };






  render() {
    // const aweek = this.togetPastWeek()
    // console.log('aweek', aweek);
    // const tday = this.togetCurrentDate()
    // console.log('atday', tday);

    this.state.allSubs.map((subs) => {
      this.totalAmount += Number(subs.amount);
    });


    this.state.oneWeekSub.map((ones) => {
      this.totalWeekAmount += Number(ones.amount);
    });

    const { totalWeekAmount, totalAmount } = this;
    return (
      <SubscriberContext.Provider
        value={{
          totalAmount,
          totalWeekAmount,
        }}
      >
        {this.props.children}
      </SubscriberContext.Provider>
    );
  }
}

export default SubscriberContext;
