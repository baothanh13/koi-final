// import React, { useEffect, useState } from "react";
import Sidebar from "../../../../../components/client/Customer/Sidebar";
import Header from "../../../../../components/client/Customer/Header";
import { useParams } from "react-router-dom";
import "./index.module.css";


function Infor() {
  const { id } = useParams();
  return (
    <div className="infor">
      <Header name="Nguyễn Ngọc Quý" id={id}/>
      <div className="container-infor-customer">
        <Sidebar name="Nguyễn Ngọc Quý" id={id} />
      </div>
    </div>
  );
}

export default Infor;
