import { createContext, useState } from "react";
import Header from "./components/Header/Header";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/main/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export const scheduleContext = createContext();
function App() {
  const [schedule, setSchedule] = useState([]);
  return (
    <>
      <scheduleContext.Provider value={[schedule, setSchedule]}>
        <Header></Header>
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </scheduleContext.Provider>
    </>
  );
}

export default App;
