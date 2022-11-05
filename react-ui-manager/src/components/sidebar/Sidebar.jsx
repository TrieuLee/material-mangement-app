import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src={PF + "img/sneakers.png"}
            alt=""
            className="sidebarFriendImg"
          />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Trang chủ</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Trang chủ</span>
            </li>
          </Link>
          <p className="title">Danh mục</p>

          <Link to="/material" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Vật liệu may</span>
            </li>
          </Link>
          <Link to="/factory" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Phân xưởng</span>
            </li>
          </Link>

          <Link to="/warehouse" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Kho chứa</span>
            </li>
          </Link>

          <Link to="/supplier" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Nhà cung cấp</span>
            </li>
          </Link>

          <p className="title">Thông tin nhân viên</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Hồ sơ nhân viên</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Đăng xuất</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
