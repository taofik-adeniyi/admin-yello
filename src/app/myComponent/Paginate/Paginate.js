import React from "react";
import { Pagination } from "react-bootstrap";

const Paginate = ({ onNext, onPrev, noOfPages, currentPage }) => {
  const adisababa = () => {
    if (currentPage >= noOfPages) {
      return true;
    }
  };
  const adisamama =() => {
      if (currentPage <= 1) {
          return true
      }
  }
  return (
    <div style={{ marginTop: 20 }}>
      <Pagination size="sm">
        <Pagination.Prev disabled={adisamama()} onClick={onPrev} />
        <Pagination.Item>
          {currentPage} - {noOfPages}{" "}
        </Pagination.Item>
        <Pagination.Next disabled={adisababa()} onClick={onNext} />
      </Pagination>
    </div>
  );
};

export default Paginate;
