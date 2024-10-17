import React, { useState } from "react";
import AllSchedule from "../AllSchedule/AllSchedule";
import Completed from "./Completed";

const Status = () => {
  const [status, setStatus] = useState("");
  const handleOption = (e) => {
    if (e.target.value === "all") {
      setStatus("all");
    }
    if (e.target.value === "completed") {
      setStatus("completed");
    }
    if (e.target.value === "uncompleted") {
      setStatus("uncompleted");
    }
  };
  return (
    <>
      <div>
        <select className="form-select" onChange={handleOption}>
          <option selected>Please choose an Option</option>
          <option value="All">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <div>
        {status === "all" && <AllSchedule schedule={schedule} />}
        {status === "completed" && <Completed schedule={schedule}></Completed>}
        {status === "uncompleted" && <h1>Uncompleted</h1>}
      </div>
    </>
  );
};

export default Status;
