import React, { Component } from "react";
import {
  Dropdown,
  Button,
  Modal,
} from "react-bootstrap";
import GoBack from "../GoBack/GoBack";
import Paginate from "../Paginate/Paginate";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import SearchBar from "../../shared/SearchBar";

class Wonprediction extends Component {
  state = {
    totalReactPackages: "",
    startDate: new Date(),
    predictions: [],
    _page: 1,
    total: "",
    lgShow: false,
    eachUser: [],
    search: '',
    found: [],
    searchModal: false
  };

  componentDidMount() {
    this.makeHttpRequestWithPage(this.state._page);
  }

  makeHttpRequestWithPage = async (_page) => {
    let response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/predictions/admin/predictions?status=won&_page=${_page}`,
      {
        method: "GET",
        headers: {
          "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
        },
      }
    );

    const data = await response.json();

    this.setState({
      predictions: data.predictions,
      _per_page: data.per_page,
      _page: data._page,
      total: data.total,
    });
  };

  callEachUser = async (phone_number) => {
    let response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/predictions/admin/predictions?phone_number=${phone_number}&status=won`,
      {
        method: "GET",
        headers: {
          "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
        },
      }
    );

    const data = await response.json();

    this.setState({
      eachUser: data.predictions,
    });
  };

  handleEachWon = (phone_number) => {
    this.setState({
      lgShow: true,
    });
    this.callEachUser(phone_number);
  };

  queryPrediction = async (phoneNumber) => {
    let response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/predictions/admin/predictions?phone_number=${phoneNumber}&status=won`, {
      method: 'GET',
      headers: {
        'client-id': `${process.env.REACT_APP_CLIENT_ID}`
      },
    });

    const data = await response.json();

    this.setState({
      found: data.predictions
    });
  }

  render() {
    let predictions;
    if (this.state.predictions !== null) {
      predictions = this.state.predictions.map((prediction, id) => (
        <tr key={uuidv4()}>
          <td> {id + 1} </td>
          <td>
            <Button
              variant="warning"
              onClick={() => this.handleEachWon(prediction.phone_number)}
            >
              View Player
            </Button>
          </td>
          <td>{prediction.phone_number}</td>
          <td>{prediction.status}</td>
          <td>{prediction.expected_winning}</td>
          <td>{prediction.amount}</td>
          <td>{moment(prediction.staked_at).format("DD-MM-YYYY")}</td>
          <td>{prediction.prediction}</td>
        </tr>
      ));
    }

    const searchByPhone = (e) => {
      e.preventDefault();
      if (this.state.search === "") {
        alert("Please type in a mobile phone number");
      } else {
        this.setState({
          searchModal: true,
        });
        this.queryPrediction(this.state.search)
      }
    };

    const changeSearch = (e) => {
      this.setState({
        search: e.target.value,
      });
    };

    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            <GoBack />
            All Won Predictions: {this.state.predictionsLength}{" "}
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-3 grid-margin stretch-card">
            <Dropdown>
              <Dropdown.Toggle
                variant="btn btn-outline-warning"
                id="dropdownMenuOutlineButton1"
              >
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
                        <th>View</th>
                        <th> Phone Number </th>
                        <th> Status </th>
                        <th> Expected winning </th>
                        <th> Amount </th>
                        <th> Staked Date </th>
                        <th> Predicted </th>
                      </tr>
                    </thead>
                    <tbody>{predictions}</tbody>
                  </table>
                </div>
                {this.state.searchModal ? (
                  <Modal
                    size="lg"
                    show={this.state.searchModal}
                    onHide={() =>
                      this.setState({
                        searchModal: false,
                      })
                    }
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-lg">
                        Details of all predictions by user
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Paginate />
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th> ID </th>
                              <th> Phone Number </th>
                              <th> Status </th>
                              <th> Expected winning </th>
                              <th> Amount </th>
                              <th> Prediction </th>
                              <th> Staked Date </th>
                              <th> Outcome </th>
                            </tr>
                          </thead>
                          <tbody>
                            {!this.state.found
                              ? "...loading...."
                              : this.state.found.map((find, id) => (
                                  <tr key={uuidv4()}>
                                    <td> {id + 1} </td>
                                    <td>{find.phone_number}</td>
                                    <td>{find.status}</td>
                                    <td>{find.expected_winning}</td>
                                    <td>{find.amount}</td>
                                    <td>{find.event_label}</td>
                                    <td>
                                      {moment(find.staked_at).format(
                                        "DD-MM-YYYY"
                                      )}
                                    </td>
                                    <td>{find.prediction}</td>
                                  </tr>
                                ))}
                          </tbody>
                        </table>
                      </div>
                      <Paginate />
                    </Modal.Body>
                  </Modal>
                ) : null}
                <Paginate />
                {this.state.lgShow ? (
                  <Modal
                    size="lg"
                    show={this.state.lgShow}
                    onHide={() =>
                      this.setState({
                        lgShow: false,
                      })
                    }
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-lg">
                        Details of all predictions by user
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Paginate />
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th> ID </th>
                              <th> Phone Number </th>
                              <th> Status </th>
                              <th> Expected winning </th>
                              <th> Amount </th>
                              <th> Prediction </th>
                              <th> Staked Date </th>
                              <th> Outcome </th>
                            </tr>
                          </thead>
                          <tbody>
                            {!this.state.eachUser
                              ? "...loading...."
                              : this.state.eachUser.map((each, id) => (
                                  <tr key={uuidv4()}>
                                    <td> {id + 1} </td>
                                    <td>{each.phone_number}</td>
                                    <td>{each.status}</td>
                                    <td>{each.expected_winning}</td>
                                    <td>{each.amount}</td>
                                    <td>{each.event_label}</td>
                                    <td>
                                      {moment(each.staked_at).format(
                                        "DD-MM-YYYY"
                                      )}
                                    </td>
                                    <td>{each.prediction}</td>
                                  </tr>
                                ))}
                          </tbody>
                        </table>
                        <Paginate />
                      </div>
                    </Modal.Body>
                  </Modal>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default Wonprediction;
