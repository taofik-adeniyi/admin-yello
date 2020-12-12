import React, { Component } from 'react';
import { Form, Dropdown, Pagination, Page } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import axios from 'axios';


export class BasicElements extends Component {
  state = {
    startDate: new Date(),
    predictions: [],
    totalReactPackages: '',
    predictionsLength: null,
    per_page: null,
    current_page: null
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  componentDidMount() {
    this.makeHttpRequestWithPage(2);   

    bsCustomFileInput.init()
  }

   makeHttpRequestWithPage = async pageNumber => {
    let response = await fetch(`https://api.humbergames.com/predictions/admin/predictions?_page=${pageNumber}`, {
      method: 'GET',
      headers: {
        'client-id': "live_95274a0b52ae18ea7349"
      },
    });

    const data = await response.json();

    this.setState({
      predictions: data.predictions,
      // total: data.total,
      _per_page: data.per_page,
      _page: data.page,
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

    let predictions, renderPageNumbers;

    if (this.state.predictions !== null) {
      predictions = this.state.predictions.map(prediction => (
        <tr key={prediction.phone_number}>
          <td>{prediction.phone_number}</td>
          <td>{prediction.status}</td>
          <td>{prediction.expected_winning}</td>
          <td>{prediction.amount}</td>
          <td>{prediction.staked_at}</td>
          <td>{prediction.prediction}</td>
        </tr>
      ));
    }

    // const pageNumbers = [];
    // if (this.predictionsLength !== null) {
    //   for (let i = 1; i <= Math.ceil(this.predictionsLength / this.state._per_page); i++) {
    //     pageNumbers.push(i);
    //   }


    //   renderPageNumbers = pageNumbers.map(number => {
    //     // let classes = this.state.current_page === number ? styles.active : '';

    //     return (
    //       <span key={number} onClick={() => this.makeHttpRequestWithPage(number)}>{number}</span>
    //     );
    //   });
    // }

    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> All Predictions: {this.state.predictionsLength} </h3>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <Dropdown>
              <Dropdown.Toggle variant="btn btn-outline-primary" id="dropdownMenuOutlineButton1">
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
                        <th> Phone Number </th>
                        <th> Status </th>
                        <th> Expected Winning </th>
                        <th> Amount </th>
                        <th> Date Staked </th>
                        <th> Predict Question </th>
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
        {/* <div>
          <span onClick={() => this.makeHttpRequestWithPage(1)}>&laquo;</span>
          {renderPageNumbers}
          <span onClick={() => this.makeHttpRequestWithPage(1)}>&raquo;</span>
        </div> */}
        {/* <div>
          <span>&laquo;</span>
          <span  onClick={() => this.makeHttpRequestWithPage(1)}>1</span>
          <span onClick={() => this.makeHttpRequestWithPage(2)}>2</span>
          <span onClick={() => this.makeHttpRequestWithPage(3)}>3</span>
          <span onClick={() => this.makeHttpRequestWithPage(4)}>4</span>
          <span>&raquo;</span>
        </div> */}
          <div>
            <Pagination size="sm">
              {items}
            </Pagination>
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

export default BasicElements
