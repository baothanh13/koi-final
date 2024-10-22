import React from "react";
import "./index.module.css";
import { Link } from "react-router-dom";

function Sidebar({ name, id }) {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <h3>{name}</h3>
        <p className="verified-badge">Verified</p>
        <Link className="edit-profile-link" to={`/account/infor/${id}`}>
          Edit profile
        </Link>
      </div>

      <div className="section services">
        <h4>Services</h4>
        <ul>
          <li>
            <a href="/orders">My orders</a>
          </li>
          <li>
            <a href="/vouchers">Voucher</a>
          </li>
          <li>
            <a href="/product-search">Product Search</a>
          </li>
        </ul>
      </div>

      <div className="section express">
        <h4>Express</h4>
        <ul>
          <li>
            <a href="/create-package">Create package</a>
          </li>
          <li>
            <a href="/create-shipment">Create shipment</a>
          </li>
          <li>
            <a href="/manage-package">Manage package/shipment</a>
          </li>
          <li>
            <a href="/warehouse-info">Warehouse information</a>
          </li>
        </ul>
      </div>

      {/* Wallet section */}
      <div className="section wallet">
        <h4>Wallet</h4>
        <p>
          <a href="/my-points">My points</a>: 0 points
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
