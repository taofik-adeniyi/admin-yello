import React, { Component } from "react";
import { Dropdown, Button, Modal } from "react-bootstrap";
import SearchBar from "../../shared/SearchBar";
import GoBack from "../GoBack/GoBack";
import Paginate from "../Paginate/Paginate";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

class Wontrivia extends Component {
  state = {
    lgShow: false,
    _page: 1,
    spinner: true,
    trivia: [],
    search: "",
    searchModal: false,
    found: [],
  };

  componentDidMount() {
    this.callAllWonTrivia();
  }

  callAllWonTrivia = async (pageNumber) => {
    let response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/trivia/admin/summary`,
      {
        method: "GET",
        headers: {
          "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
        },
      }
    );

    const data = await response.json();

    this.setState({
      trivia: data.users,
      total: data.total,
      _per_page: data._per_page,
      _page: data._page,
      spinner: false,
    });
  };

  eachWonTrivia = async (phone_number) => {
    let response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/trivia/admin/user`,
      {
        method: "GET",
        headers: {
          "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
          "phone-number": `${phone_number}`,
        },
      }
    );

    const data = await response.json();

    this.setState({
      found: data.questions,
    });
  };

  render() {
    const searchByPhone = (e) => {
      e.preventDefault();
      if (this.state.search === "") {
        alert("Please type in a mobile phone number");
      } else {
        this.setState({
          searchModal: true,
        });
        this.eachWonTrivia(this.state.search);
      }
    };

    const changeSearch = (e) => {
      this.setState({
        search: e.target.value,
      });
    };

    const handleOpen = (phone_number) => {
      this.setState({
        lgShow: true,
      });
      this.eachWonTrivia(phone_number);
    };

    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            <GoBack />
            All Won Trivia{" "}
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
                        <th> Count or Trivia Questions </th>
                        <th> Total points </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.trivia
                        ? this.state.trivia.map((triv, id) => (
                            <tr key={uuidv4()}>
                              <td>{id + 1}</td>
                              <td>
                                <Button
                                  variant="warning"
                                  onClick={() => handleOpen(triv.phone_number)}
                                >
                                  View Player
                                </Button>
                              </td>
                              <td> {triv.phone_number} </td>
                              <td>{triv.attempted_questions_count}</td>
                              <td> {triv.total_points} </td>
                            </tr>
                          ))
                        : "...loading ..."}
                    </tbody>
                  </table>
                </div>
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
                        Details of all predictions by Each User
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th> ID </th>
                              <th> label </th>
                              <th> Status </th>
                              <th> Points </th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.found
                              ? this.state.found.map((got, id) => (
                                  <tr key={uuidv4()}>
                                    <td>{id + 1}</td>
                                    <td>{got.label}</td>
                                    <td>{got.status}</td>
                                    <td>{got.points}</td>
                                  </tr>
                                ))
                              : "..loading..."}
                          </tbody>
                        </table>
                      </div>
                    </Modal.Body>
                  </Modal>
                ) : null}

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
                        Searching
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                            <th> ID </th>
                              <th> label </th>
                              <th> Status </th>
                              <th> Points </th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.found
                              ? this.state.found.map((got, id) => (
                                  <tr key={uuidv4()}>
                                    <td>{id + 1}</td>
                                    <td>{got.label}</td>
                                    <td>{got.status}</td>
                                    <td>{got.points}</td>
                                  </tr>
                                ))
                              : "..loading..."}
                          </tbody>
                        </table>
                      </div>
                    </Modal.Body>
                  </Modal>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Paginate />
        </div>
      </div>
    );
  }
}

export default Wontrivia;
