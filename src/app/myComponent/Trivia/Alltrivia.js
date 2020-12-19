import React, { Component } from 'react';
import { Dropdown, Button, ButtonGroup, Pagination, PageItem, InputGroup, FormControl, Modal  } from 'react-bootstrap';
import axios from 'axios';
import Spinner from '../../shared/Spinner'

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

class Alltrivia extends Component {
  state = {
    lgShow: false,
    _page: 1,
    spinner: true,
    trivia: [],
    questions: []
  }

  componentDidMount() {
    this.callAllTrivia();
  }

  callAllTrivia = async pageNumber => {
    let response = await fetch(`${process.env.REACT_APP_BASE_URL}/trivia/admin/summary`, {
      method: 'GET',
      headers: {
        'client-id': `${process.env.REACT_APP_CLIENT_ID}`
      },
    });

    // console.log('users' + response.users)

    const data = await response.json();
    // console.log('users' + data.users)

    this.setState({
      trivia: data.users,
      total: data.total,
      _per_page: data._per_page,
      _page: data._page,
      spinner: false
    });
  }

  callEachUserTrivia =  async phoneNumber => {
    this.setState({lgShow: true})
      let response = await fetch(`${process.env.REACT_APP_BASE_URL}/trivia/admin/user`, {
        method: 'GET',
        headers: {
          'client-id': `${process.env.REACT_APP_CLIENT_ID}`,
          'phone-number': phoneNumber
        },
      });
  
      // console.log('users' + response.total)
      // console.log(phoneNumber)
      const data = await response.json();
      // console.log('users' + data.questions)
  
      this.setState({
        questions: data.questions,
        total: data.total,
        spinner: false
      });
  }

  render () {
    let allTrivia, loading;

    if(this.state.spinner) {
      return (
        loading = <Spinner />
      )
    } else {
      allTrivia = this.state.trivia.map((triviaList, id) => (
        <tr key={triviaList.phone_number}>
          <td>{id+1}</td>
          <td> <Button variant="warning" onClick={() => this.callEachUserTrivia(triviaList.phone_number)}> View Player </Button> </td>
          <td>{triviaList.phone_number}</td>
          <td>{triviaList.phone_number}</td>
          <td>{triviaList.attempted_questions_count}</td>
          <td>{triviaList.total_points}</td>
        </tr>
      ))
    }

    let questions

    if(this.state.questions != []) {
      questions = this.state.questions.map((question, id) => (
        <tr key={id}>
          <td> {question.label} </td>
          <td> {question.status} </td>
          <td> {question.points} </td>
          <td> {question.drawn_at} </td>
        </tr>
      ))
      // console.log('a')
    }else {
      return(
        <div>No Data to load for this user </div>
      )
    }

    const onFirst = () => {
      this.makeHttpRequestWithPage(this.state._page)
    }

    const onPrev = () => {
      this.makeHttpRequestWithPage(this.state._page - 1)
    }

    const onNext = () => {
      return this.state._page + 1
      this.makeHttpRequestWithPage(this.state._page + 1)
    }

    const onLast = () => {
      this.makeHttpRequestWithPage(this.state._page)
    }
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> 
            <Button variant="warning">Back</Button>&nbsp;&nbsp;
            All Trivias
        </h3>
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

                      {loading}

                      {allTrivia}

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
                      <Modal.Body>
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
                              { questions }
                            </tbody>
                          </table>
                        </div>
                      </Modal.Body>
                    </Modal> 
                  :
                  null
                }
              </div>
            </div>
          </div>
        </div>
          <div>
          <Pagination size="sm">
            <Pagination.First onClick={onFirst} />
            <Pagination.Prev onClick={onPrev} />
              {/* {items} */}
              <Pagination.Item>{this.state._page}</Pagination.Item>
            <Pagination.Next onClick={onNext} />
            <Pagination.Last onClick={onLast} />
          </Pagination>
          </div>
        </div>
    );
  }
}

export default Alltrivia;