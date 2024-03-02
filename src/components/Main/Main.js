import React from "react";
import { Outlet } from "react-router-dom";
import './Main.css';
import Letters from '../Letters/Letters';


function Main(props) {
  return (
    <section className="main">
      <Letters />
      <div className="main__outlet">
        <Outlet />
      </div>
    </section>
  )
}

export default Main;