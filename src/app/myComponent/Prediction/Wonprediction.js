import React, { Component } from 'react';
import { Dropdown, Button, ButtonGroup, Pagination , InputGroup, FormControl, Modal} from 'react-bootstrap';
import GoBack from '../GoBack/GoBack';
   

class Wonprediction extends Component {
 
  state = {
    totalReactPackages: '',
    startDate: new Date(),
    predictions: [],
    _page: 1,
    total: '',
    lgShow: false
  };

  componentDidMount() {
    this.makeHttpRequestWithPage(this.state._page);
  }

  makeHttpRequestWithPage = async _page => {
    let response = await fetch(`${process.env.REACT_APP_BASE_URL}/predictions/admin/predictions?status=won&_page=${_page}`, {
      method: 'GET',
      headers: {
        'client-id': `${process.env.REACT_APP_CLIENT_ID}`
      },
    });

    const data = await response.json();

    this.setState({
      predictions: data.predictions,
      _per_page: data.per_page,
      _page: data._page,
      total: data.total,
    });
  }

  render() {
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

    let active = this.state._page;
    let items = [];
    for (let _page = this.state._page; _page <= (this.state.total/this.state._per_page); _page++) {
      items.push(
        <Pagination.Item 
          onClick={() => this.makeHttpRequestWithPage(_page)} 
          key={_page} 
          active={_page === active}>
          {_page}
        </Pagination.Item>,
      );
    }

    let predictions;
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
          <td>{prediction.staked_at}</td>
          <td>{prediction.prediction}</td>
        </tr>
      ))
    }
    return (
      
      <div>
        <div className="page-header">
          <h3 className="page-title"> 
          <GoBack />
          
          All Won Predictions: {this.state.predictionsLength} </h3>
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
                        <th>View</th>
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

export default Wonprediction
