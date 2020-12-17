import React, { Component } from 'react'
import { ProgressBar, Button, Dropdown, Pagination, Spinner, InputGroup, FormControl } from 'react-bootstrap';

let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
class Users extends Component {

  state = {
    startDate: new Date(),
    users: [],
    per_page: null,
    current_page: null,
    total: null,
    spinner: true
  };

  componentDidMount() {
    this.makeHttpRequestWithPage(1);
  }

  makeHttpRequestWithPage = async pageNumber => {
    let response = await fetch(`https://api.humbergames.com/trivia/admin/summary?_page=${pageNumber}`, {
      method: 'GET',
      headers: {
        'client-id': "live_95274a0b52ae18ea7349"
      },
    });

    const data = await response.json();

    this.setState({
      users: data.users,
      total: data.total,
      _per_page: data._per_page,
      _page: data._page,
      spinner: false
    });
  }
  render() {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 16; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active} onClick={() => this.makeHttpRequestWithPage(number)}>
          {number}
        </Pagination.Item>,
      );
    }

    let users, renderPageNumbers;

    if (this.state.users !== null) {
      users = this.state.users.map((user, id) => (
        <tr key={user.phone_number}>
          <td> {id+1} </td>
          <td>{user.phone_number}</td>
          <td>{user.attempted_questions_count}</td>
          <td>{user.total_points}</td>
        </tr>
      ));
    }
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> 
          <Button variant="warning">Back</Button>&nbsp;&nbsp;
          All Players: {this.state.total} </h3>
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
        {/* <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div> */}
       
        <div className="row">    
          <div className="col-lg-12 stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  List of All Active Users
                </h4>
                {/* <p className="card-description"> Add className <code>.table-&#123;color&#125;</code>
                </p> */}
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th> ID </th>
                        <th> Phone Number </th>
                        <th> Attempted Questions </th>
                        <th> Total Points </th>
                      </tr>
                    </thead>
                    <tbody>
                     {users}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row grid-margin" style={{margin: "10px"}}>
            <Pagination size="sm">{items}</Pagination>
          </div>
          {/* <div className="row grid-margin">
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div> */}
        </div>
      </div>
      
    )
  }
}

export default Users
