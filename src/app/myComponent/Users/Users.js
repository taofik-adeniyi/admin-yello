import React, { Component } from 'react'
import { Button, Dropdown, Pagination, Spinner, InputGroup, FormControl, Modal } from 'react-bootstrap';

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
    spinner: true,
    show: false,
    smShow: false
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
          <td> <Button variant="warning"> Click to delete </Button> </td>
          <td>{user.phone_number}</td>
          <td>{user.attempted_questions_count}</td>
          <td>{user.total_points}</td>
        </tr>
      ));
    }
    
    const handleClick = () => {
      this.setState({show: true})
    }

    const handleClose = () => {
      this.setState({show: false})
    }

    const handleSmClose = () => {
      this.setState({smShow: false})
    }

    const handleSmOpen = () => {
      this.setState({show: false, smShow: true})
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
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> ID </th>
                        <th> Delete/Disable </th>
                        <th> Phone Number </th>
                        <th> Attempted Questions </th>
                        <th> Total Points </th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td> 1 </td>
                      <td> <Button onClick={handleClick} variant="warning"> Disable/Delete </Button> </td>
                      <td> 08171633912 </td>
                      <td> question no 1</td>
                      <td> 127 </td>
                    </tr>
                    <tr>
                      <td> 2 </td>
                      <td> <Button onClick={handleClick} variant="warning"> Disable/Delete </Button> </td>
                      <td> 08171633912 </td>
                      <td> question no 1</td>
                      <td> 127 </td>
                    </tr>
                    <tr>
                      <td> 3 </td>
                      <td> <Button onClick={handleClick} variant="warning"> Disable/Delete </Button> </td>
                      <td> 08171633912 </td>
                      <td> question no 1</td>
                      <td> 127 </td>
                    </tr>
                    <tr>
                      <td> 4 </td>
                      <td> <Button onClick={handleClick} variant="warning"> Disable/Delete </Button> </td>
                      <td> 08171633912 </td>
                      <td> question no 1</td>
                      <td> 127 </td>
                    </tr>
                    <tr>
                      <td> 5 </td>
                      <td> <Button onClick={handleClick} variant="warning"> Disable/Delete </Button> </td>
                      <td> 08171633912 </td>
                      <td> question no 1</td>
                      <td> 127 </td>
                    </tr>
                    <tr>
                      <td> 6 </td>
                      <td> <Button onClick={handleClick} variant="warning"> Disable/Delete </Button> </td>
                      <td> 08171633912 </td>
                      <td> question no 1</td>
                      <td> 127 </td>
                    </tr>
                    <tr>
                      <td> 7 </td>
                      <td> <Button onClick={handleClick} variant="warning"> Disable/Delete </Button> </td>
                      <td> 08171633912 </td>
                      <td> question no 1</td>
                      <td> 127 </td>
                    </tr>
                    <tr>
                      <td> 8 </td>
                      <td> <Button onClick={handleClick} variant="warning"> Disable/Delete </Button> </td>
                      <td> 08171633912 </td>
                      <td> question no 1</td>
                      <td> 127 </td>
                    </tr>
                    
                    </tbody>
                  </table>
                </div>
                {
                  this.state.show ? 
                  <Modal show={this.state.show} 
                  onHide={handleClose}
                  >
                  <Modal.Header closeButton>
                    <Modal.Title>Confirmation are you sure</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Do you want to delete or disable this user!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" 
                    onClick={handleClose}
                    >
                      No
                    </Button>
                    <Button variant="primary" 
                    onClick={handleSmOpen}
                    >
                      Yes Delete/Disable
                    </Button>
                  </Modal.Footer>
                </Modal>
                : null
                }
                {
                  this.state.smShow ? 
                  <Modal
                    size="sm"
                    show={this.state.smShow}
                    onHide={handleSmClose}
                    aria-labelledby="example-modal-sizes-title-sm"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-sm">
                        User Disabled/Deleted Successful
                      </Modal.Title>
                    </Modal.Header>
                  </Modal>
                  : null
                }
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div>
          <Pagination size="sm">
            <Pagination.First />
            <Pagination.Prev />
              <Pagination.Item>1</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    )
  }
}

export default Users
