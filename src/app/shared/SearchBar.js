import React from "react";
import { Form, FormControl, Button, InputGroup } from "react-bootstrap";

const SearchBar = ({ searchByPhone, changeSearch, search }) => {
  return (
    <>
      <Form onSubmit={searchByPhone}>
        <InputGroup className="mb-3">
          <FormControl
            onChange={changeSearch}
            value={search}
            placeholder="Search By Phone No or Name"
            aria-label="User Phone Number"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={searchByPhone}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </>
  );
};

export default SearchBar;
