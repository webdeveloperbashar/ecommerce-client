import React from "react";

const CartDrawer = ({ openCartDrawer, handleCloseDrawer }) => {
  return (
    <div className="cart__drawer__wrapper">
      <div
        className={
          openCartDrawer ? "cart__drawer__inner active" : "cart__drawer__inner"
        }
      >
        <div className="card">
          <div className="card-header d-flex align-items-center justify-content-between">
            <span
              onClick={() => handleCloseDrawer()}
              style={{ cursor: "pointer" }}
            >
              X
            </span>
            <span>Cart</span>
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
