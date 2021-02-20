import React from "react";

function Title({title}) {
  return (
    <div>
      <div
        style={{
          margin: "10px auto",
          textAlign: "center",
          padding: "15px",
          fontSize: "18px",
          backgroundColor: "lightgray",
          textTransform: 'capitalize',
        }}
      >
        {title}
      </div>
    </div>
  );
}

Title.defaultProps = {
    title: 'What you want here'
}


export default Title;
