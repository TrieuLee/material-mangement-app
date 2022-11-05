import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./Material.scss";
export default function Material() {
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
