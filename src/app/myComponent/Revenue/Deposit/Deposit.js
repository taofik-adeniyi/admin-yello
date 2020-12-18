import React, { Component } from 'react'
import { Button, Form, InputGroup, FormControl, Col } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'

  
  
class Deposit extends Component {

    data = {
        labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
        datasets: [{
          label: '# of Votes',
          data: [10, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
          fill: false
        }]
    };
    
     options = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
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

    multidata = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y-axis-1',
          },
          {
            label: '# of No Votes',
            data: [1, 2, 1, 1, 2, 2],
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            yAxisID: 'y-axis-2',
          },
        ],
      }
      
       multioptions = {
        scales: {
          yAxes: [
            {
              type: 'linear',
              display: true,
              position: 'left',
              id: 'y-axis-1',
            },
            {
              type: 'linear',
              display: true,
              position: 'right',
              id: 'y-axis-2',
              gridLines: {
                drawOnArea: false,
              },
            },
          ],
        },
      }

    render() {
        return (
            <div>
                <div className="page-header">
                < h3 className="page-title"> 
                <Button variant="warning">Back</Button>&nbsp;&nbsp;
                Deposit Overview </h3>
                </div>
    
                <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Deposit Summary </h4>
                            <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th> Day Range </th>
                                    <th>  </th>
                                    <th>  </th>
                                    <th>  </th>
                                    <th>  </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="py-1" > Today's Deposit's </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td align="right"> 0 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Deposit's in the Past Week </td>
                                    <td> </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td align="right"> 0 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Deposit's in the Past Month </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td> </td>
                                    <td align="right"> 0 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Deposit's in the Past Two Month </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td> </td>
                                    <td align="right"> 0 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Total Deposit's </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td align="right"> 9287 </td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
    
                
                <div className="col-md-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">6 Months Deposit History</h4>
                            <Form>
                                <Form.Row className="align-items-center">
                                    <Col sm={3} className="my-1">
                                    <Form.Label htmlFor="inlineFormInputName" srOnly>
                                        Date
                                    </Form.Label>
                                    <Form.Control className="mb-2 mr-sm-2" id="inlineFormInputName" placeholder="Y-M-D" />
                                    </Col>
                                    <Col xs="auto" className="my-1">
                                    <Button type="submit">Refresh</Button>
                                    </Col>
                                </Form.Row>
                            </Form>
                            <Line data={this.data} options={this.options} />
                        </div>
                    </div>
                </div>

                <div className="col-md-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">6 Months Deposit History</h4>
                            <Form>
                                <Form.Row className="align-items-center">
                                    <Col sm={3} className="my-1">
                                    <Form.Label htmlFor="inlineFormInputName" srOnly>
                                        Date
                                    </Form.Label>
                                    <Form.Control className="mb-2 mr-sm-2" id="inlineFormInputName" placeholder="Y-M-D" />
                                    </Col>
                                    <Col xs="auto" className="my-1">
                                    <Button type="submit">Refresh</Button>
                                    </Col>
                                </Form.Row>
                            </Form>
                            <Line data={this.multidata} options={this.multioptions} />
                        </div>
                    </div>
                </div>
                
                <div className="col-md-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">6 Months Deposit History</h4>
                            <Form>
                                <Form.Row className="align-items-center">
                                    <Col sm={3} className="my-1">
                                    <Form.Label htmlFor="inlineFormInputName" srOnly>
                                        Date
                                    </Form.Label>
                                    <Form.Control className="mb-2 mr-sm-2" id="inlineFormInputName" placeholder="Y-M-D" />
                                    </Col>
                                    <Col xs="auto" className="my-1">
                                    <Button type="submit">Refresh</Button>
                                    </Col>
                                </Form.Row>
                            </Form>
                            <Line data={this.data} options={this.options} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default  Deposit