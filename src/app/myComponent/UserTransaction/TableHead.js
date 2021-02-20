import React from "react";

function TableHead({tdone, tdtwo, tdthree, tdfour}) {
  return (
    <>
      <thead className="thead-dark mb-5" style={{textTransform: 'capitalize'}}>
        <tr>
          <th scope="col">{tdone}</th>
          <th scope="col">{tdtwo}</th>
          <th scope="col">{tdthree}</th>
          <th scope="col">{tdfour}</th>
          <th scope="col">more</th>
        </tr>
      </thead>
    </>
  );
}

export default TableHead;
