import React, { Component } from "react";
import moment from "moment";

const SubscriberContext = React.createContext();

export class SubScriberProvider extends Component {
  state = {
    username: "Adeniyi Taofik",
    isAutheticated: false,
    currentDate: moment().format("DD-MM-YYYY"),
    aweekDate: '',
    amonthDate: '',
    twoMonthDate: '',
    limit: 1000,
    allSubs: [],
    todaysSub: [],
    oneWeekSub: [],
    oneMonthSub: [],
    twoMonthSub: []
  };

  totalAmount = 0;
  totalWeekAmount = 0;
  totalMonthAmount = 0;
  totalTwoMonthAmount = 0;
  totalTodayAmount = 0;

  

  //to get current date
  toGetTodaysDate = () => {
    const outcome = moment().format("DD-MM-YYYY");
    return outcome;
  };

  //to get past week date 
  toGetAweekDate = () => {
    const sevenDays = new Date();
    const outcome = sevenDays.setDate(sevenDays.getDate() - 7);
    const result = moment(outcome).format("DD-MM-YYYY");
    this.setState({
      aweekDate: result
    })
    return result;
  };

  // to get past month date
  toGetPastMonth = () => {
    const OneMonth = new Date();
    const outcome = OneMonth.setDate(OneMonth.getDate() - 30);
    const result = moment(outcome).format("DD-MM-YYYY");
    return result;
  };

  // to get past two month date
  toGetPastTwoMonth = () => {
    const TwoMonth = new Date();
    const outcome = TwoMonth.setDate(TwoMonth.getDate() - 60);
    const result = moment(outcome).format("DD-MM-YYYY");
    return result;
  };

  /// to get from inception of time of launch
  toGetAllDays = () => {
    // const TodaysDate = new Date();
    const BeginningDate = new Date();
    const outcome = BeginningDate.setDate(BeginningDate.getDate() - 110);
    const result = outcome.toLocaleDateString("en-US");
    return result;
  };
  


  ///function call to request for todays subscription
  getToday = async (dateFrom, dateTo, limit) => {
    let response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/subscriptions/v1/subscriptions?dateFrom=${dateFrom}&dateTo=${dateTo}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
        },
      }
    );

    const wawu = await response.json();
    // console.log("past week datas ", wawu.data);
    this.setState({
      todaysSub: wawu.data,
    });
  };

  

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

    const dow = await response.json();
    // console.log("past week datas ", dow.data);
    this.setState({
      oneWeekSub: dow.data,
    });
  };

  ///function call to request for last month till date subscription
  getPastMonth = async (dateFrom, dateTo, limit) => {
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
    // console.log("past week datas ", one.data);
    this.setState({
      oneMonthSub: one.data,
    });
  };

  ///function call to request for last month till date subscription
  getPastTwoMonth = async (dateFrom, dateTo, limit) => {
    let response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/subscriptions/v1/subscriptions?dateFrom=${dateFrom}&dateTo=${dateTo}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
        },
      }
    );

    const wan = await response.json();
    // console.log("past week datas ", wan.data);
    this.setState({
      twoMonthSub: wan.data,
    });
  };

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


  // to reuest for the total amount of subscription made in the last seven days
  componentDidMount() {
    
    this.getToday(this.state.currentDate, this.state.currentDate, this.state.limit)
    
    this.getPastWeek('22-12-2020', '29-12-2020', this.state.limit);
    
    this.getPastMonth('27-11-2020', '29-12-2020', this.state.limit)
    
    this.getPastTwoMonth('27-10-2020', '29-12-2020', this.state.limit)
    
    this.callAllSubscription(this.state.limit);

  }

  render() {
    this.state.allSubs.map((subs) => {
      this.totalAmount += Number(subs.amount);
    });


    this.state.oneWeekSub.map((ones) => {
      this.totalWeekAmount += Number(ones.amount);
    });

    this.state.oneMonthSub.map((oneMonth) => {
      this.totalMonthAmount += Number(oneMonth.amount)
    })

    this.state.twoMonthSub.map((twoMonth) => {
      this.totalTwoMonthAmount += Number(twoMonth.amount)
    })

    this.state.todaysSub.map((today) => {
      this.totalTodayAmount += Number(today.amount)
    })

    const { totalWeekAmount, totalAmount, totalMonthAmount, totalTwoMonthAmount, totalTodayAmount } = this;
    return (
      <SubscriberContext.Provider
        value={{
          totalAmount,
          totalWeekAmount,
          totalMonthAmount,
          totalTwoMonthAmount,
          totalTodayAmount
        }}
      >
        {this.props.children}
      </SubscriberContext.Provider>
    );
  }
}

export default SubscriberContext;
