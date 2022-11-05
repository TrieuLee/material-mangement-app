import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./Warehouse.scss";
export default function Warehouse() {
  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
        </div>
      </div>
    </>
  );
}
