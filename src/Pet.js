import React from "react";

const Pet = (props) => {
  const { name, animal, breed, media, location, id } = props;

  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }
  //   The parentheses allows you to write and return multiple lines of  code, The way JS works
  // it understand that if you jump to a new line, the statement ends like by adding a semi-colon
  // Essentially, the parentheses tells JS that you are not done with the statement yet.
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
