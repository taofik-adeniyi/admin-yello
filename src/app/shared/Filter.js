import React from "react";
import { Dropdown, InputGroup, FormControl, Button } from 'react-bootstrap'

function Filter() {
  return (
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
  );
}

export default Filter;
