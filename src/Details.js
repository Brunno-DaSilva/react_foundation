import React from "react";

const Details = (props) => {
  return (
    <div>
      <h1>Details Component</h1>

      <pre>
        <code>{JSON.stringify(props, null, 4)}</code>
      </pre>
    </div>
  );
};

export default Details;
