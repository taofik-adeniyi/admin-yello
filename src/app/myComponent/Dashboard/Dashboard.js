import React, { Component } from 'react';
// import { Line, Doughnut, Bar, Radar } from 'react-chartjs-2';
import { Line, Bar, Radar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { ProgressBar, Dropdown } from 'react-bootstrap';
import GaugeChart from 'react-gauge-chart';
import { VectorMap } from "react-jvectormap"
import {TriviaProvider} from '../../myContext/TriviaContext'

const mapData = {
  CN: 100000,
  IN: 9900,
  SA: 86,
  EG: 70,
  SE: 0,
  FI: 0,
  FR: 0,
  US: 20
};

// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';

export class Dashboard extends Component {



  constructor(props) {
    super(props);
    this.state = {
      visitChartData: {},
      impressionChartData: {},
      conversionChartData: {},
      downloadChartData: {},
      salesStatisticsChartData:{},
      netProfitChartData:{},
      totaltransactionChartData: {},
      areaOptions : {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            display: false
          }],
          xAxes: [{ 
            display: false
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: 0
          }
        },
        stepsize: 100
      },
      salesStaticsOptions : {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        elements: {
          point: {
            radius: 3
          },
          line: {
            tension: 0
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        legend: false,
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: false,
              beginAtZero: false
            },
            gridLines: {
              drawBorder: false,
              color: "#f8f8f8",
              zeroLineColor: "#f8f8f8",
            }
          }],
          yAxes: [{
            ticks: {
              max: 200,
              min: 0,
              stepSize: 50,
              fontColor: "#8b9298",
              beginAtZero: false
            },
            gridLines: {
              color: "#f8f8f8",
              zeroLineColor: "#f8f8f8",
              display: true,
              drawBorder: false
            }
          }]
        }
      },
      netProfitOptions : {
        scale: {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
            stepSize: 20,
            display: false,
          },
          pointLabels: {
            fontSize: 14,
            fontColor: "#6c757c",
            color: "#f3f3f3",
            zeroLineColor: "#f3f3f3"
          },
          angleLines: {
            color: "#f3f3f3",
            zeroLineColor: "#f3f3f3",
          },
          gridLines: {
            color: "#f3f3f3",
            zeroLineColor: "#f3f3f3",
          }
        },
        legend: false,
      },
      totaltransactionChartOptions :{
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        elements: {
          point: {
            radius: 0
          }
        },
        layout: {
          padding: {
            left: -10,
            right: 0,
            top: 0,
            bottom: -10
          }
        },
        legend: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
              color: '#fff',
              zeroLineColor:  '#fff',
            },
            ticks: {
              display: false,
              color:  '#fff',
              zeroLineColor:  '#fff',
            }
          }],
          yAxes: [{
            gridLines: {
              display: false,
              color:  '#fff',
              zeroLineColor:  '#fff',
            },
            ticks: {
              display: false,
              color: '#fff',
              zeroLineColor:  '#fff',
            }
          }]
        }
      },
      todos: [
        {
            id: 1,
            task: 'Pick up kids from school',
            isCompleted: false
        },
        {
            id: 2,
            task: 'Prepare for presentation',
            isCompleted: false
        },
        {
            id: 3,
            task: 'Print Statements',
            isCompleted: false
        },
        {
            id: 4,
            task: 'Create invoice',
            isCompleted: false
        },
        {
            id: 5,
            task: 'Call John',
            isCompleted: false
        }
      ],
      inputValue: '',
      active: '',
    }
    this.statusChangedHandler = this.statusChangedHandler.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this); 
  }
  changeChartOneData = (e) =>{
    const clicked = e.target.id
    if(this.state.active === clicked) { 
        this.setState({active: ''});
    } else {
        this.setState({active: clicked})
    }

    var oldDataSet = this.state.datasets[0];
    var oldDataSet1 = this.state.datasets[1];
    var newData = [60, 75, 65, 130, 130, 145, 110, 145, 155, 149, 170];
    var newData1 = [0, 25, 20, 40, 70, 52, 49, 90, 70, 94, 110, 135];
    var newDataSet = {
      ...oldDataSet
    };
    var newDataSet1 = {
      // ...oldDataSet,
      ...oldDataSet1
    };

    newDataSet.data = newData;
    newDataSet1.data = newData1;
    
    // console.log('this is:', oldDataSet.data);
    var newState = {
      // ...data,
      datasets: [newDataSet, newDataSet1]
    };
    try {
      this.setState(
        newState
      );
    } catch(e) {
      throw Error(e);
    }
  }
  changeChartTwoData = (e) =>{
    const clicked = e.target.id
    if(this.state.active === clicked) { 
        this.setState({active: ''});
    } else {
        this.setState({active: clicked})
    }
    var oldDataSet = this.state.datasets[0];
    var oldDataSet1 = this.state.datasets[1];
    var newData = [130, 145, 155, 60, 75, 65, 130, 110, 145, 149, 170];
    var newData1 = [0, 70, 52, 90, 25, 20, 40, 70, 49, 94, 110, 135];
    var newDataSet = {
      ...oldDataSet
    };
    var newDataSet1 = {
      // ...oldDataSet,
      ...oldDataSet1
    };

    newDataSet.data = newData;
    newDataSet1.data = newData1;
    
    // console.log('this is:', oldDataSet.data);
    console.log('this is:', newDataSet.data);
    console.log('this is:', newDataSet1.data);
    var newState = {
      // ...data,
      datasets: [newDataSet, newDataSet1]
    };
    try {
      this.setState(
        newState
      );
    } catch(e) {
      throw Error(e);
    }
  }
  changeChartThreeData = (e) =>{
    const clicked = e.target.id
    if(this.state.active === clicked) { 
        this.setState({active: ''});
    } else {
        this.setState({active: clicked})
    }
    var oldDataSet = this.state.datasets[0];
    var oldDataSet1 = this.state.datasets[1];
    var newData = [130, 75, 65, 130, 110, 145, 155, 60, 145, 149, 170];
    var newData1 = [0, 70, 52, 94, 110, 135, 90, 25, 20, 40, 70, 49];
    var newDataSet = {
      ...oldDataSet
    };
    var newDataSet1 = {
      // ...oldDataSet,
      ...oldDataSet1
    };

    newDataSet.data = newData;
    newDataSet1.data = newData1;
    
    // console.log('this is:', oldDataSet.data);
    console.log('this is:', newDataSet.data);
    console.log('this is:', newDataSet1.data);
    var newState = {
      // ...data,
      datasets: [newDataSet, newDataSet1]
    };
    try {
      this.setState(
        newState
      );
    } catch(e) {
      throw Error(e);
    }
  }
  changeChartFourData = (e) =>{
    const clicked = e.target.id
    if(this.state.active === clicked) { 
        this.setState({active: ''});
    } else {
        this.setState({active: clicked})
    }
    var oldDataSet = this.state.datasets[0];
    var oldDataSet1 = this.state.datasets[1];
    var newData = [130, 145, 65, 130, 75, 145, 149, 170, 110, 155, 60];
    var newData1 = [0, 70, 90, 25, 40, 20, 94, 110, 135, 70, 49, 52];
    var newDataSet = {
      ...oldDataSet
    };
    var newDataSet1 = {
      // ...oldDataSet,
      ...oldDataSet1
    };

    newDataSet.data = newData;
    newDataSet1.data = newData1;
    
    // console.log('this is:', oldDataSet.data);
    console.log('this is:', newDataSet.data);
    console.log('this is:', newDataSet1.data);
    var newState = {
      // ...data,
      datasets: [newDataSet, newDataSet1]
    };
    try {
      this.setState(
        newState
      );
    } catch(e) {
      throw Error(e);
    }
  }
  statusChangedHandler(event, id) {
    const todo = {...this.state.todos[id]};
    todo.isCompleted = event.target.checked;

    const todos = [...this.state.todos];
    todos[id] = todo;

    this.setState({
        todos: todos
    })
  }

  addTodo (event) {
      event.preventDefault();

      const todos = [...this.state.todos];
      todos.unshift({
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          task: this.state.inputValue,
          isCompleted: false
          
      })

      this.setState({
          todos: todos,
          inputValue: ''
      })
  }

  removeTodo (index) {
      const todos = [...this.state.todos];
      todos.splice(index, 1);

      this.setState({
          todos: todos
      })
  }

  inputChangeHandler(event) {
      this.setState({
          inputValue: event.target.value
      });
  }

  usersDoughnutChartData = {
    datasets: [{
      data: [80, 34, 100],
      backgroundColor: [
        "#19d895",
        "#2196f3",
        "#dde4eb"
      ],
      borderColor: [
        "#19d895",
        "#2196f3",
        "#dde4eb"
      ],
    }],
    labels: [
      'Request',
      'Email',
    ]
  };

  usersDoughnutChartOptions = {
    cutoutPercentage: 70,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    legend: {
      display: false
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    }
  };

  amountDueBarData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"],
    datasets: [{
      label: 'Profit',
      data: [39, 19, 25, 16, 31, 39, 12, 18, 33, 24],
      backgroundColor: [
        '#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3',
      ],
      borderColor: [
        '#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3','#2196f3',
      ],
      borderWidth: 2,
      fill: true
    }]
  };

  amountDueBarOptions = {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },

    scales: {
      responsive: true,
      maintainAspectRatio: true,
      yAxes: [{
        display: false,
        gridLines: {
          color: 'rgba(0, 0, 0, 0.03)',
        }
      }],
      xAxes: [{
        display: false,
        barPercentage: 0.4,
        gridLines: {
          display: false,
        }
      }]
    },
    legend: {
      display: false
    }
  };
  totalRevenueData = {
    labels: [
      "Day01","Day02","Day03","Day04","Day05","Day06","Day07","Day08","Day09","Day10","Day11","Day12","Day13","Day14","Day15","Day16","Day17","Day18","Day19","Day20","Day21","Day22","Day23","Day24","Day25","Day26","Day27","Day28","Day29","Day30","Day31","Day32","Day33","Day34","Day35","Day36","Day37","Day38","Day39","Day40","Day41","Day42","Day43","Day44","Day45","Day46","Day47","Day48","Day49","Day50","Day51","Day52","Day53","Day54","Day55","Day56","Day57","Day58","Day59","Day60","Day61","Day62","Day63","Day64","Day65","Day66","Day67","Day68","Day69","Day70","Day71","Day72","Day73","Day74","Day75","Day76","Day77","Day78","Day79","Day80","Day81","Day82"
    ],
    datasets: [{
      label: 'Total Revenue',
      data: [56,
        55,59,59,59,57,56,57,54,56,58,57,59,58,59,57,55,56,54,52,49,48,50,50,46,45,49,50,52,53,52,55,54,53,56,55,56,55,54,55,57,58,56,55,56,57,58,59,58,57,55,53,52,55,57,55,54,52,55,57,56,57,58,59,58,59,57,56,55,57,58,59,60,62,60,59,58,57,56,57,56,58,59
      ],
      borderColor: '#9B86F1',
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderWidth: 3,
      fill: 'origin'
    }]
  };
  totalRevenueOptions= {
    responsive:true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [{
        display: false
      }],
      xAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
    stepsize: 100
  };
  
  realTimeStatisticsData= {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: 'Profit',
        data: [330, 380, 230, 400, 309, 530, 340],
        backgroundColor: "#0f5bff",
        borderColor: '#0f5bff',
        borderWidth: 0
      },
      {
        label: 'Target',
        data: [600, 600, 600, 600, 600, 600, 600],
        backgroundColor: '#e5e9f2',
        borderColor: '#e5e9f2',
        borderWidth: 0
      }
    ]
  };
  realTimeStatisticsOptions= {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: {
        left: 0,
        right: 25,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
        display: false,
        gridLines: {
          display: false
        }
      }],
      xAxes: [{
        stacked: true,
        ticks: {
          display: false,
          beginAtZero: true,
          fontColor: "#f3f3f3",
        },
        gridLines: {
          display: false,
          color: "#f3f3f3",
          zeroLineColor: '0,0,0,0'
        },
        barPercentage: 0.5,
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };
    

  marketingOverviewData= {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [{
        label: 'OVERDUE',
        data:[145, 238, 148, 293, 242, 235, 256, 334],
        backgroundColor: '#826af9',
        borderColor: '#826af9',
        borderWidth: 0
      }, {
        label: 'SNOOZED',
        data: [330, 380, 230, 400, 309, 430, 340, 310],
        borderColor: '#9e86ff',
        borderWidth: 0
      },
      {
        label: 'COMPLETED',
        data: [375, 440, 284, 450, 386, 480, 400, 365],
        backgroundColor: '#d0aeff',
        borderColor: '#d0aeff',
        borderWidth: 0
      },
      {
        label: 'PENDING',
        data: [425, 480, 324, 490, 426, 520, 440, 405],
        backgroundColor: '#f7d2ff',
        borderColor: '#f7d2ff',
        borderWidth: 0
      }
    ]
  };
  marketingOverviewOptions= {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 20,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 400,
          display: true,
          beginAtZero: true,
          fontColor: "#b9b8b8",
          stepSize: 100
        },
        gridLines: {
          display: false,
          color: "#dde4eb",
          zeroLineColor: "#dde4eb"
        }
      }],
      xAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
          fontColor: "#b9b8b8",
          color: "#dde4eb",
          zeroLineColor: "#dde4eb"
        },
        gridLines: {
          display: true,
          color: "#dde4eb",
          zeroLineColor: "#dde4eb"
        },
        barPercentage: 0.2
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  componentDidMount(){

    var ctx5 = document.getElementById('salesStatisticsChart').getContext("2d")
    var gradientBar5 = ctx5.createLinearGradient(0, 0, 0, 450)
    gradientBar5.addColorStop(1, 'rgba(255,255,255, 0.0)')
    gradientBar5.addColorStop(0, 'rgba(102,78,235, 0.2)')

    var ctx6 = document.getElementById('salesStatisticsChart').getContext("2d")
    var gradientBar6 = ctx6.createLinearGradient(0, 0, 0, 400)
    gradientBar6.addColorStop(1, 'rgba(255, 255, 255, 0.01)')
    gradientBar6.addColorStop(0, '#14c671')

    const visitData = {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
      datasets: [{
        label: 'Profit',
        data: [7, 6, 9, 7, 8, 6, 8, 5, 7, 8, 6, 7, 7],
        borderColor: '#6d7cfc',
        // backgroundColor: gradientBar1,
        borderWidth: 3,
        fill: true
      }]
    };
    const impressionData = {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
      datasets: [{
        label: 'Profit',
        data: [7, 6, 8, 5, 7, 8, 6, 7, 7, 6, 9, 7, 8],
        borderColor: '#6d7cfc',
        // backgroundColor: gradientBar2,
        borderWidth: 3,
        fill: true
      }]
    };
    const conversionData = {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
      datasets: [{
        label: 'Profit',
        data: [8, 6, 7, 8, 5, 7, 9, 7, 8, 7, 6, 7, 6],
        borderColor: '#6d7cfc',
        // backgroundColor: gradientBar3,
        borderWidth: 3,
        fill: true
      }]
    };
    const downloadData = {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
      datasets: [{
        label: 'Profit',
        data: [7, 6, 8, 5, 8, 6, 8, 7, 8, 6, 9, 7, 7],
        borderColor: '#6d7cfc',
        // backgroundColor: gradientBar4,
        borderWidth: 3,
        fill: true
      }]
    };
  

    var Datas = [60, 75, 65, 130, 130, 145, 110, 145, 155, 149, 170];
    var Datas1 = [0, 25, 20, 40, 70, 52, 49, 90, 70, 94, 110, 135];




  

    const salesStatisticsData = {
      labels: ["Jan 1", "Jan 7", "Jan 14", "Jan 21", "Jan 28", "Feb 4", "Feb 11", "Feb 18"],
      datasets: [{
        label: 'Revenue',
        data: Datas,
        borderColor: '#8862e0',
        backgroundColor: gradientBar5,
        borderWidth: 2,
        fill: true
      }, {
        label: 'Sales',
        data: Datas1,
        borderColor: '#5ed2a1',
        backgroundColor: gradientBar6,
        borderWidth: 2,
        fill: true
      }]
    };

    this.setState(salesStatisticsData);



    const netProfitData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          datasets: [{
            label: "Sales",
            backgroundColor: 'rgba(88, 208, 222,0.8)',
            borderColor: 'rgba(88, 208, 222,0.8)',
            borderWidth: 0,
            fill: true,
            radius: 0,
            pointRadius: 0,
            pointBorderWidth: 0,
            pointBackgroundColor: 'rgba(88, 208, 222,0.8)',
            pointHoverRadius: 10,
            pointHitRadius: 5,
            data: [54, 45, 60, 70, 54, 75, 60, 54]
          }, {
            label: "Orders",
            backgroundColor: 'rgba(150, 77, 247,1)',
            borderColor: 'rgba(150, 77, 247,1)',
            borderWidth: 0,
            fill: true,
            radius: 0,
            pointRadius: 0,
            pointBorderWidth: 0,
            pointBackgroundColor: 'rgba(150, 77, 247,1)',
            pointHoverRadius: 10,
            pointHitRadius: 5,
            data: [65, 75, 70, 80, 60, 80, 36, 60]
          }]
    };
    const totaltransactionData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: 'Sessions',
        data: [320, 280, 300, 280, 300, 270, 350],
        // backgroundColor: gradientBar7,
        borderColor: '#fa394e',
        borderWidth: 0,
        pointBackgroundColor: "#fa394e",
        pointRadius: 7,
        pointBorderWidth: 3,
        pointBorderColor: '#fff',
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "#fa394e",
        pointHoverBorderColor: "#fa394e",
        pointHoverBorderWidth: 2,
        pointHitRadius: 7,
      }]
    };
    this.setState({visitChartData: visitData, impressionChartData:impressionData, conversionChartData:conversionData, downloadChartData:downloadData, salesStatisticsChartData:salesStatisticsData, netProfitChartData:netProfitData, totaltransactionChartData:totaltransactionData} )
   }

  toggleProBanner() {
    document.querySelector('.proBanner').classList.toggle("hide");
  }

  render () {
    return (
      <div>
        <div className="row">
          <TriviaProvider>
            <div className="col-md-3 grid-margin stretch-card">
                <div className="card" style={{color: "black"}}>
                  <div className="card-body">
                    <Link to="/all-trivia">
                      <div className="d-flex justify-content-between pb-2 align-items-center">
                        <h3 className="font-weight-semibold mb-0">Trivia</h3>
                        <div className="icon-holder">
                          <i className="mdi mdi-briefcase-outline"></i>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5 className="font-weight-semibold mb-0">4,624</h5>
                      </div>
                    </Link>
                  </div>
                </div>
            </div>
          </TriviaProvider>
          <div className="col-md-3 grid-margin stretch-card">
            <div className="card" style={{color: "black"}}>
              <div className="card-body">
              <Link to="/all-prediction">
                <div className="d-flex justify-content-between pb-2 align-items-center">
                  <h3 className="font-weight-semibold mb-0">Prediction</h3>
                  <div className="icon-holder">
                    <i className="mdi mdi-briefcase-outline"></i>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <h5 className="font-weight-semibold mb-0">4,624</h5>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 grid-margin stretch-card">
            <div className="card" style={{color: "black"}}>
              <div className="card-body">
                <Link to="/revenue">
                  <div className="d-flex justify-content-between pb-2 align-items-center">
                    <h3 className="font-weight-semibold mb-0">Revenues</h3>
                    <div className="icon-holder">
                      <i className="mdi mdi-briefcase-outline"></i>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="font-weight-semibold mb-0">4,624</h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 grid-margin stretch-card">
            <div className="card" style={{color: "black"}}>
              <div className="card-body">
                <Link to="/all-players">
                  <div className="d-flex justify-content-between pb-2 align-items-center">
                    <h2 className="font-weight-semibold mb-0">Users</h2>
                    <div className="icon-holder">
                      <i className="mdi mdi-briefcase-outline"></i>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="font-weight-semibold mb-0">4,624</h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-0">Chart Statistics Overview</h4>
                <div className="d-xl-flex flex-column flex-lg-row">
                  <p>Lorem ipsum is placeholder text commonly used</p>
                  <ul className="nav nav-tabs sales-mini-tabs ml-lg-auto mb-4 mb-md-0" role="tablist">
                    <li className="nav-item">
                      <button className={`nav-link ${this.state.active === "sales-statistics_switch_1"? 'active': ''}`} id="sales-statistics_switch_1" onClick={this.changeChartOneData} data-toggle="tab" role="tab" aria-selected="false">1D</button>
                    </li>
                    <li className="nav-item">
                      <button className={`nav-link ${this.state.active === "sales-statistics_switch_2"? 'active': ''}`} id="sales-statistics_switch_2" onClick={this.changeChartTwoData} data-toggle="tab" role="tab" aria-selected="false">5D</button>
                    </li>
                    <li className="nav-item">
                      <button className={`nav-link ${this.state.active === "sales-statistics_switch_3"? 'active': ''}`} id="sales-statistics_switch_3" onClick={this.changeChartThreeData} data-toggle="tab" role="tab" aria-selected="false">1M</button>
                    </li>
                    <li className="nav-item">
                      <button className={`nav-link ${this.state.active === "sales-statistics_switch_4"? 'active': ''}`} id="sales-statistics_switch_4" onClick={this.changeChartFourData} data-toggle="tab" role="tab" aria-selected="false">1Y</button>
                    </li>
                  </ul>
                </div>
                <div className="d-xl-flex flex-column flex-lg-row">
                  <div className="ml-lg-auto" id="sales-statistics-legend">
                    <div className="chartjs-legend line-legend">
                      <ul>
                        <li>
                          <span className="bg-info"></span>Revenue
                        </li>
                        <li>
                          <span className="bg-success"></span>Sales
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Line data={this.state} options={this.state.salesStaticsOptions}  datasetKeyProvider={this.datasetKeyProvider} height={50} width={100} id="salesStatisticsChart" />               
              </div>
            </div>
          </div>
         
        </div>
        
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">

            </div>
          </div>
        </div>
        <div className="row">

        </div>
      </div> 
    );
  }
}
export default Dashboard;