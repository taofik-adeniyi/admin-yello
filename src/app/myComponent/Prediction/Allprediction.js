import React, { Component } from 'react';
import { Form, Dropdown, Pagination, Page, Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import axios from 'axios';


class Allprediction extends Component {
  state = {
    startDate: new Date(),
    predictions: [],
    totalReactPackages: '',
    predictionsLength: null,
    per_page: null,
    current_page: null,
    lgShow: false,
    val: '',
    _page: 1
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  componentDidMount() {
    this.makeHttpRequestWithPage(1);

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
      _per_page: data.per_page,
      _page: data.page,
      predictionsLength: data.total,
      val: data.total
    });
  }


  render() {
    let active = 2;
    let items = [];
    for (let number = 1; number <= this.state.predictionsLength; number++) {
      items.push(
        // <Pagination.Item key={number} active={number === active} onClick={() => this.makeHttpRequestWithPage(number)}>
        //   {number}
        // </Pagination.Item>,
        <>
          <Pagination.Item key={number} active={number === active} >{number}</Pagination.Item>
          {/* <Pagination.Ellipsis /> */}

          {/* <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item> */}
          </>
      );
    }

    const increaseVal = () => {
      this.state.val++
    } 

    const decreaseVal = () => {
      this.state.val--
    } 

    let predictions, renderPageNumbers;

    if (this.state.predictions !== null) {
      predictions = this.state.predictions.map((prediction, id) => (
        <tr key={prediction.phone_number}>
          <td> {id+1} </td>
          <td>
            <Button variant="warning" onClick={() => this.setState({lgShow: true})}>
            View Player
            </Button>
          </td>
          <td>{prediction.phone_number}</td>
          <td>{prediction.status}</td>
          <td>{prediction.expected_winning}</td>
          <td>{prediction.amount}</td>
          <td>{new Date(prediction.staked_at).toLocaleDateString('en-US')}</td>
          <td>{prediction.prediction}</td>
        </tr>
      ));
    }

    const pageNumbers = [];
    if (this.predictionsLength !== null) {
      for (let i = 1; i <= Math.ceil(this.predictionsLength / this.state._per_page); i++) {
        pageNumbers.push(i);
      }


      renderPageNumbers = pageNumbers.map(number => {
        // let classes = this.state.current_page === number ? styles.active : '';

        return (
          <span key={number} onClick={() => this.makeHttpRequestWithPage(number)}>{number}</span>
        );
      });
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
        {console.log('pred' + this.state.predictions)}
        <div className="page-header">
          < h3 className="page-title"> 
          <Button variant="warning">Back</Button>&nbsp;&nbsp;
          All Predictions: {this.state.predictionsLength} </h3>
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
                        <th> ID </th>
                        <th>Check Player</th>
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
    )
  }
}

export default Allprediction
