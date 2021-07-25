import React from "react";

const Card = ({ user }) => {
  const { name, age, gender, email, phoneNo } = user;
  return (
    <div className="col-sm-4 col-lg-3 col-12 border border-dark">
      <div className="my-4 text-center">
        <div className="period">{gender}</div>
        <div className="card-header">
          <h3 className="display-2">{name}</h3>
        </div>
        <div className="card-block">
          <h4 className="card-title">{age}</h4>
          <ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{phoneNo}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
