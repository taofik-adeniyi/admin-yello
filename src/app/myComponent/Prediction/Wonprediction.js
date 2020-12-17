import React, { Component } from 'react';
import { Dropdown, Button, ButtonGroup, Pagination , InputGroup, FormControl} from 'react-bootstrap';
import axios from 'axios';

let active = 2;
  let items = [];
  for (let number = 1; number <= 15; number++) {
    items.push(
      <Pagination.Item onClick={() => this.makeHttpRequestWithPage(number)} key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
   

class Wonprediction extends Component {
 
  state = {
    startDate: new Date(),
    predictions: [],
    totalReactPackages: '',
    predictionsLength: null,
    per_page: null,
    current_page: null,
    total: ''
  };

  componentDidMount() {
    this.makeHttpRequestWithPage(1);   
    
  }

  makeHttpRequestWithPage = async pageNumber => {
    let response = await fetch(`https://api.humbergames.com/predictions/admin/predictions?status=won?_page=${pageNumber}`, {
      method: 'GET',
      headers: {
        'client-id': "live_95274a0b52ae18ea7349"
      },
    });

    const data = await response.json();

    this.setState({
      predictions: data.predictions,
      _per_page: data.per_page,
      _page: data.page,
      total: data.total
    });
  }

  render() {

    let predictions;

    if (this.state.predictions !== null) {
      predictions = this.state.predictions.map((prediction, id) => (
        <tr key={prediction.phone_number}>
          <td> {id+1} </td>
          <td>{prediction.phone_number}</td>
          <td>{prediction.status}</td>
          <td>{prediction.expected_winning}</td>
          <td>{prediction.amount}</td>
          <td>{prediction.staked_at}</td>
          <td>{prediction.prediction}</td>
        </tr>
      ))
    }
    return (
      <div>
        { console.log('won pred') }
        {console.log(this.state.predictions)}
        <div className="page-header">
          <h3 className="page-title"> 
          <Button variant="warning">Back</Button>&nbsp;&nbsp;
          
          All Won Predictions: {this.state.total} </h3>
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
                        <th> ID </th>
                        <th> Phone Number </th>
                        <th> Status </th>
                        <th> Expected winning </th>
                        <th> Amount </th>
                        <th> Staked Date </th>
                        <th> Predicted </th>
                      </tr>
                    </thead>
                    <tbody>
                    { predictions }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Pagination size="sm">{items}</Pagination>
        </div>
          {/* <div>
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
    )
  }
}

export default Wonprediction
