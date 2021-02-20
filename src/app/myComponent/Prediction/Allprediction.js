import React, { Component } from 'react';
import { Dropdown, Modal, Button } from 'react-bootstrap';
import bsCustomFileInput from 'bs-custom-file-input';
import Spinner from '../../shared/Spinner'
import GoBack from '../GoBack/GoBack'
import Paginate from '../Paginate/Paginate';
import SearchBar from '../../shared/SearchBar';

class Allprediction extends Component {
  state = {
    startDate: new Date(),
    predictions: [],
    totalReactPackages: '',
    predictionsTotal: null,
    per_page: null,
    page: 1,
    current_page: null,
    lgShow: false,
    userPredictions: [],
    spinner: true,
    found: [],
    search: '',
    searchModal: false
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
    let response = await fetch(`${process.env.REACT_APP_BASE_URL}/predictions/admin/predictions`, {
      method: 'GET',
      headers: {
        'client-id': "live_95274a0b52ae18ea7349"
      },
    });

    const data = await response.json();

    this.setState({
      predictions: data.predictions,
      per_page: data._per_page,
      page: data._page,
      predictionsTotal: data.total,
      spinner: false
    });
  }

  queryPrediction = async phoneNumber => {
    let response = await fetch(`${process.env.REACT_APP_BASE_URL}/predictions/admin/predictions?phone_number=${phoneNumber}`, {
      method: 'GET',
      headers: {
        'client-id': "live_95274a0b52ae18ea7349"
      },
    });

    const data = await response.json();

    this.setState({
      found: data.predictions
    });
  }

  callEachUserPredictions =  async phoneNumber => {
    this.setState({lgShow: true})
    console.log('phone' + phoneNumber)
      const params = new URLSearchParams({
        phone_number: phoneNumber
      })
      let response = await fetch(`${process.env.REACT_APP_BASE_URL}/predictions/admin/predictions?${params.toString()}`, {
        method: 'GET',
        headers: {
          'client-id': `${process.env.REACT_APP_CLIENT_ID}`
        },
      });
  
      const data = await response.json();
  
      this.setState({
        userPredictions: data.predictions,
        total: data.total,
        spinner: false
      });
  }

  render() {

    let predictions, 
    loading;

    if (this.state.spinner) {
      return loading = <Spinner />
    } else {
      predictions = this.state.predictions.map((prediction, id) => (
        <tr key={id}>
          <td> {id+1} </td>
          <td>
            <Button variant="warning" onClick={() => this.callEachUserPredictions(prediction.phone_number)} >
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
    if (this.state.predictionsTotal !== null) {
      for (let i = 1; i <= Math.ceil(this.state.predictionsTotal / this.state.per_page); i++) {
        pageNumbers.push(i);
      }
    }

    let userPredict

    if(this.state.userPredictions !== []) {
      userPredict = this.state.userPredictions.map((predict, id) => (
        <tr key={id}>
          <td> {id+1} </td>
          <td> {predict.event_label} </td>
          <td> {predict.status} </td>
          <td> {predict.phone_number} </td>
          <td> {predict.amount} </td>
          <td> {predict.expected_winning} </td>
          <td> {predict.staked_at} </td>
        </tr>
      ))
    }else {
      return(
        <div>No Data to load for this user </div>
      )
    }

    const searchByPhone = (e) => {
      e.preventDefault();
      if (this.state.search === "") {
        alert("Please type in a mobile phone number");
      } else {
        this.queryPrediction(this.state.search)
        this.setState({
          searchModal: true,
        });
      }
      console.log(this.state.search);
    };

    const changeSearch = (e) => {
      this.setState({
        search: e.target.value,
      });
    };

    const closeSearchModal = () => {
      this.setState({
        searchModal: false,
      });
    };

    const handleNext =()=> {
      return true
    }

    const handlePrev = () => {
      this.setState((prevState) => ({
        _page: prevState._page - 1,
      }));
    };

    return (
      <div>
        <div className="page-header">
          < h3 className="page-title"> 
          <GoBack />
          All Predictions: {this.state.predictionsTotal} </h3>
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
            <SearchBar 
            search={this.state.search}
            changeSearch={changeSearch}
            searchByPhone={searchByPhone}
            />
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
                      {loading}

                      { predictions }
                    </tbody>
                  </table>
                </div>
                <Paginate 
                  onNext={handleNext} 
                  onPrev={handlePrev} 
                  noOfPages={Math.ceil(this.state.predictionsTotal / this.state.per_page)}
                  currentPage={this.state.page}
                />
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
                      <Paginate 
                        onNext={handleNext} 
                        onPrev={handlePrev} 
                        noOfPages={Math.ceil(this.state.predictionsTotal / this.state.per_page)}
                        currentPage={this.state.page}
                      />
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
                              { userPredict }
                            </tbody>
                          </table>
                          <Paginate 
                        onNext={handleNext} 
                        onPrev={handlePrev} 
                        noOfPages={Math.ceil(this.state.predictionsTotal / this.state.per_page)}
                        currentPage={this.state.page}
                      />
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
          </div>
          <div>
          </div>
          {this.state.searchModal ? (
          <Modal show={this.state.searchModal} onHide={closeSearchModal}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Paginate 
                onNext={handleNext} 
                onPrev={handlePrev} 
                noOfPages={Math.ceil(this.state.predictionsTotal / this.state.per_page)}
                currentPage={this.state.page}
              />
              <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">All Players</h4>
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th> id </th>
                              <th> Phone Number </th>
                              <th> Amount </th>
                              <th> Status </th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.found.map((res, id) => (
                              <tr>
                                <td> {id + 1} </td>
                               
                                <td> {res.phone_number} </td>
                                <td> {res.amount} </td>
                                <td> {res.status} </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                <Paginate 
                  onNext={handleNext} 
                  onPrev={handlePrev} 
                  noOfPages={Math.ceil(this.state.predictionsTotal / this.state.per_page)}
                  currentPage={this.state.page}
                />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeSearchModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        ) : null}
      </div>
    )
  }
}

export default Allprediction
