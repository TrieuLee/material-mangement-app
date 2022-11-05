import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./Factory.scss";
export default function Factory() {
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
