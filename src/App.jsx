import { createContext, useContext, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/main/Sidebar/Sidebar";
import './style/_main.scss'
import { Outlet } from "react-router-dom";
import ScheduleProvider, { scheduleContext } from "./Provider/ScheduleProvider";
function App() {
  useEffect(() => {

  }, [])

  return (
    <>
      <ScheduleProvider>
        <div className="main-layout">
          <Header></Header>
          <div className="main-content">
            <Sidebar></Sidebar>
            <Outlet></Outlet>
          </div>
        </div>
      </ScheduleProvider>
    </>
  );
}

export default App;
