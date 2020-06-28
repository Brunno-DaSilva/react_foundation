import React from "react";

export default function Pet({ name, animal, breed }) {
  //   The parentheses allows you to write and return multiple lines of  code, The way JS works
  // it understand that if you jump to a new line, the statement ends like by adding a semi-colon
  // Essentially, the parentheses tells JS that you are not done with the statement yet.

  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
