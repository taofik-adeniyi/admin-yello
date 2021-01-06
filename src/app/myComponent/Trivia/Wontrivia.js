import React, { Component } from 'react';
import { Dropdown, Button, InputGroup, FormControl, Modal } from 'react-bootstrap';
import GoBack from '../GoBack/GoBack';


class Wontrivia extends Component {
  state= {
    lgShow: false,
    _page: 1,
    spinner: true,
    trivia: []
  }

  componentDidMount() {
    this.callAllWonTrivia();
  }

  callAllWonTrivia = async pageNumber => {
    let response = await fetch(`${process.env.REACT_APP_BASE_URL}/trivia/admin/summary`, {
      method: 'GET',
      headers: {
        'client-id': `${process.env.REACT_APP_CLIENT_ID}`
      },
    });

    const data = await response.json();

    this.setState({
      trivia: data.users,
      total: data.total,
      _per_page: data._per_page,
      _page: data._page,
      spinner: false
    });
  }


  render() {
    
    // const onFirst = () => {
    //   this.makeHttpRequestWithPage(this.state._page)
    // }

    // const onPrev = () => {
    //   this.makeHttpRequestWithPage(this.state._page - 1)
    // }

    // const onNext = () => {
    //   return this.state._page + 1
    //   this.makeHttpRequestWithPage(this.state._page + 1)
    // }

    // const onLast = () => {
    //   this.makeHttpRequestWithPage(this.state._page)
    // }

    return (
      <div>
        <div className="page-header">
            <h3 className="page-title"> 
            <GoBack />
            All Won Trivia </h3>
        </div>
        <div className="row">
          <div className="col-lg-3 grid-margin stretch-card">
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
          <div className="col-lg-3">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search By Phone No or Name"
                aria-label="User Phone Number"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">All Players</h4>
                {/* <p className="card-description"> Add className <code>.table-striped</code> */}
                {/* </p> */}
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> User </th>
                        <th> First name </th>
                        <th> Progress </th>
                        <th> Amount </th>
                        <th> Deadline </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td>
                        <Button variant="warning" onClick={() => this.setState({lgShow: true})}>
                        View Player
                        </Button>
                      </td>
                        <td> Herman Beck </td>
                        <td>New Here</td>
                        <td> $ 77.99 </td>
                        <td> May 15, 2015 </td>
                      </tr>
                      <tr>
                      <td>
                        <Button variant="warning" onClick={() => this.setState({lgShow: true})}>
                        View Player
                        </Button>
                      </td>
                        <td> Messsy Adam </td>
                        <td>How are you</td>
                        <td> $245.30 </td>
                        <td> July 1, 2015 </td>
                      </tr>
                      <tr>
                      <td>
                        <Button variant="warning" onClick={() => this.setState({lgShow: true})}>
                        View Player
                        </Button>
                      </td>
                        <td> John Richards </td>
                        <td>Almost there</td>
                        <td> $138.00 </td>
                        <td> Apr 12, 2015 </td>
                      </tr>
                      <tr>
                      <td>
                        <Button variant="warning" onClick={() => this.setState({lgShow: true})}>
                        View Player
                        </Button>
                      </td>
                        <td> Peter Meggik </td>
                        <td>right here</td>
                        <td> $ 77.99 </td>
                        <td> May 15, 2015 </td>
                      </tr>
                      <tr>
                      <td>
                        <Button variant="warning" onClick={() => this.setState({lgShow: true})}>
                        View Player
                        </Button>
                      </td>
                        <td> Edward </td>
                        <td>Now</td>
                        <td> $ 160.25 </td>
                        <td> May 03, 2015 </td>
                      </tr>
                      <tr>
                      <td>
                        <Button variant="warning" onClick={() => this.setState({lgShow: true})}>
                        View Player
                        </Button>
                      </td>
                        <td> John Doe </td>
                        <td>Knew</td>
                        <td> $ 123.21 </td>
                        <td> April 05, 2015 </td>
                      </tr>
                      <tr>
                      <td>
                        <Button variant="warning" onClick={() => this.setState({lgShow: true})}>
                        View Player
                        </Button>
                      </td>
                        <td> Henry Tom </td>
                        <td>Dont know</td>
                        <td> $ 150.00 </td>
                        <td> June 16, 2015 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {
                  this.state.lgShow ? 
                    <Modal
                      size="lg"
                      show={this.state.lgShow}
                      onHide={() => this.setState({
                        lgShow: false
                      })}
                      aria-labelledby="example-modal-sizes-title-lg"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                          Details of all predictions by user
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>...</Modal.Body>
                    </Modal> 
                  :
                  null
                }
              </div>
            </div>
          </div>
        </div>
          <div>
         
          </div>
        </div>
    )
  }
}

export default Wontrivia
