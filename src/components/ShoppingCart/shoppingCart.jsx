import React from "react";
const ShoppingCart = (props) => {
  return (
    <React.Fragment>
      <div className="row row-spacer">
        <h1>PKCJJ Card Shop Shopping Cart</h1>
      </div>
      <div className="left">
        <h2>{props.currentCollection}</h2>
      </div>
    </React.Fragment>
  );
};

export default ShoppingCart;
