import React, { Component } from 'react'
import { Button , Form} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { Link } from 'react-router-dom'

class WinningFilter extends Component {
    state = {
        startDate: new Date(),
        endDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };

      handleEndChange = date => {
        this.setState({
          endDate: date
        });
      };

    render() {
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title"> 
                        <Button variant="warning">Back</Button>&nbsp;&nbsp;
                        Winners Log
                    </h3>
                </div>
                <div className="container px-4">
                    <p> Click player to view transactions </p>
                </div>
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="col-lg-3">
                        <Form>
                            <Form.Group>
                                <label htmlFor="exampleFormControlSelect3">Games</label>
                                <select className="form-control form-control-sm" id="exampleFormControlSelect3">
                                    <option> All Games</option>
                                    <option> Predictions </option>
                                    <option> Trivia </option>
                                    <option> Ratata </option>
                                </select>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="col-lg-3">
                    <label htmlFor="exampleFormControlSelect3">Start Date</label><br/>
                        <DatePicker
                            closeOnScroll={true}
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-lg-3">
                    <label htmlFor="exampleFormControlSelect3">End Date</label><br/>
                        <DatePicker
                                closeOnScroll={true}
                                selected={this.state.endDate}
                                onChange={this.handleEndChange}
                            />
                    </div>
                    <div className="col-lg-3">
                    <label htmlFor="exampleFormControlSelect3">&nbsp;</label><br/>
                        <Button> Refresh Search </Button>
                    </div>
                </div>

                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title"> 
                            Showing Winners Details from &nbsp;
                            { this.state.startDate.toLocaleDateString('en-US') } 
                            &nbsp;&nbsp;&nbsp;<i className="mdi mdi-arrow-right-bold-circle"></i>&nbsp;&nbsp;&nbsp;
                            { this.state.endDate.toLocaleDateString('en-US') } 
                            &nbsp;&nbsp;&nbsp;[0 Players] [0 Naira]
                        </h4>
                        <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th> ID </th>
                                <th> Mobile </th>
                                <th> Name </th>
                                <th> Email </th>
                                <th> Gender </th>
                                <th>  Date  </th>
                                <th>  Game </th>
                                <th>  Ticket  </th>
                                <th>  Won  </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="py-1"> 1 </td>
                                <td> <Button variant="warning"> 08171633912 </Button> </td>
                                <td> Taofik Adeniyi </td>
                                <td> bidemi64@gmail.com </td>
                                <td> Male </td>
                                <td> 09/02/2017 </td>
                                <td> trivia </td>
                                <td> #1,000 </td>
                                <td> Yes </td>
                            </tr>
                            <tr>
                                <td className="py-1"> 2 </td>
                                <td> <Button variant="warning"> 08171633912 </Button> </td>
                                <td> Taofik Adeniyi </td>
                                <td> bidemi64@gmail.com </td>
                                <td> Male </td>
                                <td> 09/02/2017 </td>
                                <td> trivia </td>
                                <td> #1117345 </td>
                                <td> Yes </td>
                            </tr><tr>
                                <td className="py-1"> 3 </td>
                                <td> <Button variant="warning"> 08171633912 </Button> </td>
                                <td> Taofik Adeniyi </td>
                                <td> bidemi64@gmail.com </td>
                                <td> Male </td>
                                <td> 09/02/2017 </td>
                                <td> trivia </td>
                                <td> #111734 </td>
                                <td> Null </td>
                            </tr><tr>
                                <td className="py-1"> 4 </td>
                                <td> <Button variant="warning"> 08171633912 </Button> </td>
                                <td> Taofik Adeniyi </td>
                                <td> bidemi64@gmail.com </td>
                                <td> Male </td>
                                <td> 09/02/2017 </td>
                                <td> trivia </td>
                                <td> #62980123 </td>
                                <td> Yes </td>
                            </tr><tr>
                                <td className="py-1"> 5 </td>
                                <td> <Button variant="warning"> 08171633912 </Button> </td>
                                <td> Taofik Adeniyi </td>
                                <td> bidemi64@gmail.com </td>
                                <td> Male </td>
                                <td> 09/02/2017 </td>
                                <td> trivia </td>
                                <td> #3423 </td>
                                <td> Yes </td>
                            </tr><tr>
                                <td className="py-1"> 6 </td>
                                <td> <Button variant="warning"> 08171633912 </Button> </td>
                                <td> Taofik Adeniyi </td>
                                <td> bidemi64@gmail.com </td>
                                <td> Male </td>
                                <td> 09/02/2017 </td>
                                <td> trivia </td>
                                <td> #62923 </td>
                                <td> Yes </td>
                            </tr><tr>
                                <td className="py-1"> 7 </td>
                                <td> <Button variant="warning"> 08171633912 </Button> </td>
                                <td> Taofik Adeniyi </td>
                                <td> bidemi64@gmail.com </td>
                                <td> Male </td>
                                <td> 09/02/2017 </td>
                                <td> trivia </td>
                                <td> #98765 </td>
                                <td> Yes </td>
                            </tr><tr>
                                <td className="py-1"> 8 </td>
                                <td> <Button variant="warning"> 08171633912 </Button> </td>
                                <td> Taofik Adeniyi </td>
                                <td> bidemi64@gmail.com </td>
                                <td> Male </td>
                                <td> 09/02/2017 </td>
                                <td> trivia </td>
                                <td> #1117 </td>
                                <td> Yes </td>
                            </tr><tr>
                                <td className="py-1"> 9 </td>
                                <td> <Button variant="warning"> 08171633912 </Button> </td>
                                <td> Taofik Adeniyi </td>
                                <td> bidemi64@gmail.com </td>
                                <td> Male </td>
                                <td> 09/02/2017 </td>
                                <td> trivia </td>
                                <td> #1123 </td>
                                <td> Yes </td>
                            </tr><tr>
                                <td className="py-1"> 10 </td>
                                <td> <Button variant="warning"> 08171633912 </Button> </td>
                                <td> Taofik Adeniyi </td>
                                <td> bidemi64@gmail.com </td>
                                <td> Male </td>
                                <td> 09/02/2017 </td>
                                <td> trivia </td>
                                <td> #3456 </td>
                                <td> Null </td>
                            </tr>
                            <tr>
                                <td className="py-1"> 11 </td>
                                <td> <Button variant="warning"> 08171633912 </Button> </td>
                                <td> Taofik Adeniyi </td>
                                <td> bidemi64@gmail.com </td>
                                <td> Male </td>
                                <td> 09/02/2017 </td>
                                <td> trivia </td>
                                <td> #1117 </td>
                                <td> Yes </td>
                            </tr>
                            <tr>
                                <td className="py-1"> 12 </td>
                                <td> <Button variant="warning"> 08171633912 </Button> </td>
                                <td> Taofik Adeniyi </td>
                                <td> bidemi64@gmail.com </td>
                                <td> Male </td>
                                <td> 09/02/2017 </td>
                                <td> trivia </td>
                                <td> #123 </td>
                                <td> Yes </td>
                            </tr>
                            <tr>
                                <td className="py-1"> 13 </td>
                                <td> <Button variant="warning"> 08171633912 </Button> </td>
                                <td> Taofik Adeniyi </td>
                                <td> bidemi64@gmail.com </td>
                                <td> Male </td>
                                <td> 09/02/2017 </td>
                                <td> trivia </td>
                                <td> #0123 </td>
                                <td> Yes </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default WinningFilter
