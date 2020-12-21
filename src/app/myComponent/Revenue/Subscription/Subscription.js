import React, { Component } from 'react'
import { Button, Form, InputGroup, FormControl, Col, Dropdown, Modal } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'
import GoBack from '../../GoBack/GoBack';
import Spinner from '../../../shared/Spinner';
import Paginate from '../../Paginate/Paginate'
  
  
class Subscription extends Component {
    state = {
        spinner: true,
        allSubscription: [],
        limit: 50,
        currentPage: 1,
        total: null,
        totalPage: null,
        pages: null,
        search: null,
        searchModal: false,
        searchResult: null,
        amountTotal: 0
    }

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

      componentDidMount() {
        this.callAllSubscription(this.state.limit, this.state.currentPage);
      }

      callAllSubscription = async (limit, page, status, userid) => {
        let response = await fetch(`${process.env.REACT_APP_BASE_URL}/subscriptions/v1/subscriptions?limit=${limit}&page=${page}`, {
          method: 'GET',
          headers: {
            'client-id': `${process.env.REACT_APP_CLIENT_ID}`
          },
        });
    
        // console.log('users' + response.users)
        // console.log('res' + response)
    
        const dataa = await response.json();
        console.log('amount of subs' + dataa.data.amount)
    
        this.setState({
          total: dataa.total,
          pages: dataa.pages,
          spinner: false,
        //   currentPage: dataa.page,
          allSubscription: dataa.data,
          amountTotal: dataa.amount
        });
      }

    render() {

        let subs, loading;
        if(this.state.spinner) {
            loading = <Spinner />
        } else {
            subs = this.state.allSubscription.map((subslist, id) => (
                <tr key={subslist.userId}>
                    <td> {id+1} </td>
                    <td> {subslist.userId} </td>
                    <td> {subslist.status} </td>
                    <td> {subslist.amount} </td>
                    <td> {subslist.chargeMode} </td>
                    <td> {new Date(subslist.createdAt).toLocaleDateString('en-US')} </td>
                </tr>
            ))
        }

        // const getAmountOfSubs = () => {
        //     this.state.allSubscription.map(list => {
        //         let Total = list.amount
        //     })
        //     Total.reduce((a + b) => {
        //         return a + b
        //     }, 0);
        // }

        const onFirst = () => {
            this.setState({
                currentPage: 1
            })
            this.callAllSubscription(this.state.limit, this.state.currentPage)
        }
    
        const onPrev = () => {
            if(this.state.currentPage >=1){
                this.setState((prevState) => (
                    {currentPage: prevState.currentPage -1}
                ))
                console.log('prev page'+this.state.currentPage)
                
                this.callAllSubscription(this.state.limit, this.state.currentPage)
            }else {
                return null
            }
        }
    
        const onNext = () => {
            this.setState((prevState) => (
                {currentPage: prevState.currentPage +1}
            ))
            console.log('current page'+this.state.currentPage)
            this.callAllSubscription(this.state.limit, this.state.currentPage)
        }
    
        const onLast = () => {
            this.setState({
                currentPage: this.state.pages
            })
            this.callAllSubscription(this.state.limit, this.state.pages)
        }

        const searchByUserId = (e) => {
            e.preventDefault()
            // alert('Searched ' + this.state.search)
            // this.callAllSubscription( '5fc6a5e6ef050a001be837ad')
            const searchResult = this.state.allSubscription.filter(res => res.userId === this.state.search)
            this.setState({
                searchModal: true
            })
        }

        const changeSearch = (e) => {
            this.setState({
                search: e.target.value
            })
        }

        const closeSearchModal = () => {
            this.setState({
                searchModal: false 
            })
        }
        
        return (
            <div>
                <div className="page-header">
                < h3 className="page-title"> 
                <GoBack />
                Subscription Overview: </h3>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 grid-margin stretch-card">
                        <Dropdown>
                        <Dropdown.Toggle variant="btn btn-outline-warning" id="dropdownMenuOutlineButton1">
                            Filter
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Header>50</Dropdown.Header>
                            <Dropdown.Item>100</Dropdown.Item>
                            <Dropdown.Item>150</Dropdown.Item>
                            <Dropdown.Item>200</Dropdown.Item>
                            <Dropdown.Item>250</Dropdown.Item>
                            <Dropdown.Item>300</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-3 col-md-6">
                        <Form onSubmit={searchByUserId} >
                            <InputGroup className="mb-3">
                            <FormControl
                                onChange={changeSearch}
                                value={ this.state.search }
                                placeholder="Search By Phone No or Name"
                                aria-label="User Phone Number"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary" onClick={searchByUserId}>Search</Button>
                            </InputGroup.Append>
                            </InputGroup>
                        </Form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Subscriptions</h4>
                            <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th> id </th>
                                    <th> UserId / Phone Number </th>
                                    <th> Status </th>
                                    <th> Amount Charged </th>
                                    <th> Charge Gateway </th>
                                    <th> Date </th>
                                </tr>
                                </thead>
                                <tbody>

                                {loading}
                                { subs }
                                <tr>
                                    <td>Amount of all subscriptions</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td> { this.state.amountTotal } </td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                            <Paginate 
                                onNext={onNext} 
                                onPrev={onPrev} 
                                onFirst={onFirst} 
                                onLast={onLast}
                                currentPage={this.state.currentPage}
                                noOfPages={this.state.pages}
                            />
                        </div>
                        {
                            this.state.searchModal ? 
                                <Modal show={this.state.searchModal} onHide={closeSearchModal}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        { this.state.search }
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={closeSearchModal}>
                                        Close
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                        : null
                        }
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Subscription Summary </h4>
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
                                    <td className="py-1" > Today's Subscription </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td align="right"> 0 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Subscription's in the Past Week </td>
                                    <td> </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td align="right"> 0 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Subscription's in the Past Month </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td> </td>
                                    <td align="right"> 0 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Subscription's in the Past Two Month </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td> </td>
                                    <td align="right"> 0 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Total Subscription's </td>
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

                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Subscription Summary (₦300)</h4>
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
                                    <td className="py-1" > Today's Subscription </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td align="right"> 0 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Subscription's in the Past Week </td>
                                    <td> </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td align="right"> 0 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Subscription's in the Past Month </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td> </td>
                                    <td align="right"> 0 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Subscription's in the Past Two Month </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td> </td>
                                    <td align="right"> 0 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Total Subscription's </td>
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

                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Subscription Summary (₦100)</h4>
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
                                    <td className="py-1" > Today's Subscription </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td align="right"> 0 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Subscription's in the Past Week </td>
                                    <td> </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td align="right"> 0 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Subscription's in the Past Month </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td> </td>
                                    <td align="right"> 0 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Subscription's in the Past Two Month </td>
                                    <td>  </td>
                                    <td>  </td>
                                    <td> </td>
                                    <td align="right"> 0 </td>
                                </tr>
                                <tr>
                                    <td className="py-1"> Total Subscription's </td>
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
                            <h4 className="card-title">6 Months Registration History</h4>
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
                            <h4 className="card-title">6 Months Registration History</h4>
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
                            <h4 className="card-title">6 Months Registration History</h4>
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

export default  Subscription