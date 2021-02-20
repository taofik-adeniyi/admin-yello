import React, { Component } from "react";
import {
  Dropdown,
  Button,
  Modal,
} from "react-bootstrap";
import Spinner from "../../shared/Spinner";
import GoBack from "../GoBack/GoBack";
import SearchBar from "../../shared/SearchBar";
import Paginate from "../Paginate/Paginate";
import moment from 'moment';

class Alltrivia extends Component {
  state = {
    lgShow: false,
    _page: 1,
    _per_page: "",
    spinner: true,
    trivia: [],
    questions: [],
    search: "",
    searchModal: false,
    found: [],
    total: "",
  };

  componentDidMount() {
    this.requestAllTrivia(this.state._page);
  }

  requestAllTrivia = async (pageNo) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/trivia/admin/summary?_page=${pageNo}`,
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
    } catch (error) {
    }
  };

  viewTriviaByPhone = async (phoneNumber) => {
    let response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/trivia/admin/summary?phone_number=${phoneNumber}`,
      {
        method: "GET",
        headers: {
          "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
        },
      }
    );

    const data = await response.json();

    this.setState({
      found: data.users,
    });
  };

  callEachUserTrivia = async (phoneNumber) => {
    this.setState({ lgShow: true });
    let response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/trivia/admin/user`,
      {
        method: "GET",
        headers: {
          "client-id": `${process.env.REACT_APP_CLIENT_ID}`,
          "phone-number": phoneNumber,
        },
      }
    );

    const data = await response.json();

    this.setState({
      questions: data.questions,
      total: data.total,
      spinner: false,
    });
  };

  render() {
    let allTrivia, loading;

    if (this.state.spinner) {
      return (loading = <Spinner />);
    } else {
      allTrivia = this.state.trivia.map((triviaList, id) => (
        <tr key={triviaList.phone_number}>
          <td>{(id + 1) * this.state._page}</td>
          <td>
            {" "}
            <Button
              variant="warning"
              onClick={() => this.callEachUserTrivia(triviaList.phone_number)}
            >
              {" "}View Player{" "}
            </Button>
          </td>
          <td>{triviaList.phone_number}</td>
          <td>{triviaList.attempted_questions_count}</td>
          <td>{triviaList.total_points}</td>
        </tr>
      ));
    }

    let questions;
    // let start = (this.state._page - 1) * this.state._per_page;
    // start += 1;

    if (this.state.questions !== []) {
      questions = this.state.questions.map((question, id) => (
        <tr key={id}>
          <td> {question.label} </td>
          <td> {question.status} </td>
          <td> {question.points} </td>
          <td> {moment(question.drawn_at).format("DD-MM-YYYY")}</td>
        </tr>
      ));
    } else {
      return <div>No Data to load for this user </div>;
    }

    const callOneUser = (caller) => {
      this.setState({
        searchModal: false,
      });
      this.callEachUserTrivia(caller);
    };

    let nosFound;

    if (this.state.found !== []) {
      nosFound = this.state.found.map((res, id) => (
        <tr key={id}>
          <td> {id + 1} </td>
          <td>
            <Button
              variant="warning"
              onClick={() => callOneUser(res.phone_number)}
            >
              View Player
            </Button>
          </td>
          <td> {res.phone_number} </td>
          <td> {res.attempted_questions_count} </td>
          <td> {res.total_points} </td>
        </tr>
      ));
    }

    const searchByPhone = (e) => {
      e.preventDefault();
      if (this.state.search === "") {
        alert("Please type in a mobile phone number");
      } else {
        this.viewTriviaByPhone(this.state.search);
        this.setState({
          searchModal: true,
        });
      }
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

    const handleNext = async () => {
      const pageNo = this.state._page;
      let response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/trivia/admin/summary?_page=${
          pageNo + 1
        }`,
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

    const handlePrev = () => {
      this.setState((prevState) => ({
        _page: prevState._page - 1,
      }));
    };

    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            <GoBack />
            All Trivias
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
                        <th> id </th>
                        <th> View Player </th>
                        <th> Phone Number </th>
                        <th> Attemted Questions </th>
                        <th> Total Points </th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading}

                      {allTrivia}
                    </tbody>
                  </table>
                </div>

                <Paginate
                  onPrev={handlePrev}
                  currentPage={this.state._page}
                  noOfPages={Math.ceil(this.state.total / this.state._per_page)}
                  onNext={handleNext}
                />

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
                    <Paginate
                      onPrev={handlePrev}
                      currentPage={this.state._page}
                      noOfPages={Math.ceil(this.state.total / this.state._per_page)}
                      onNext={handleNext}
                    />
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th> Question </th>
                              <th> Status </th>
                              <th> Point </th>
                              <th> Date </th>
                            </tr>
                          </thead>
                          <tbody>{questions}</tbody>
                        </table>
                        <Paginate
                      onPrev={handlePrev}
                      currentPage={this.state._page}
                      noOfPages={Math.ceil(this.state.total / this.state._per_page)}
                      onNext={handleNext}
                    />
                      </div>
                    </Modal.Body>
                  </Modal>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        {this.state.searchModal ? (
          <Modal show={this.state.searchModal} onHide={closeSearchModal}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Paginate
                      onPrev={handlePrev}
                      currentPage={this.state._page}
                      noOfPages={Math.ceil(this.state.total / this.state._per_page)}
                      onNext={handleNext}
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
                              <th> View Player </th>
                              <th> Phone Number </th>
                              <th> Attemted Questions </th>
                              <th> Total Points </th>
                            </tr>
                          </thead>
                          <tbody>{nosFound}</tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <Paginate
                      onPrev={handlePrev}
                      currentPage={this.state._page}
                      noOfPages={Math.ceil(this.state.total / this.state._per_page)}
                      onNext={handleNext}
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
    );
  }
}

export default Alltrivia;
