import React, { useContext, useState } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsListUl } from "react-icons/bs";
import { CgCalendarNext } from "react-icons/cg";
import { FaPlus, FaRegClock } from "react-icons/fa";
import { GrStatusInfo } from "react-icons/gr";
import { MdOutlineToday } from "react-icons/md";
import ModalComponent from "../../UI/ModalComponent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoTodayOutline } from "react-icons/io5";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import moment from "moment/moment";
import Today from "../Today/Today";
import AllSchedule from "../AllSchedule/AllSchedule";
import Status from "../Status/Status";

import toast from "react-hot-toast";
import Weeks from "../Weeks/Weeks";
import { json, Link } from "react-router-dom";
import { scheduleContext } from "../../../Provider/ScheduleProvider";

const Sidebar = () => {
  const { schedule, setSchedule } = useContext(scheduleContext);
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("00:00");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [showUI, setShowUI] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("clicked");
    if (name && time) {
      setError("");
      const payload = [...schedule, {
        id: Math.ceil(Math.random() * 1000000),
        name: name,
        time: moment(time).format("h:mm a"),
        date: moment(date).format("MM/DD/YYYY"),
        checked: false,
      }]
      setSchedule(payload);
      localStorage.setItem('todos', JSON.stringify(payload))
      setTime("");
      setDate("");
      setShowModal(false);
      toast.success("You Have succesfully added a plan");
    } else {
      setError("Provide Name and Time!");
    }
  };
  console.log("schedule", schedule);

  return (
    <>
      <div className="sidebar">
        <h3 className="schedule-heading m-2">
          <AiOutlineSchedule />
          Your schedule
        </h3>
        <div>
          <button className="add-btn" onClick={() => setShowModal(true)}>
            <FaPlus className="p-1 fs-4" />
            Add your Plan
          </button>
        </div>
        <div>
          <div className="schedule-List d-flex flex-column text-center m-3">
            <Link to={'/today'} className="schedule-list-items "
            // onClick={(e) => {
            //   e.preventDefault();
            //   setShowUI("today");
            // }}
            >
              {" "}
              <MdOutlineToday />
              Today
            </Link>
            <Link to={'/week'}
              className="todo-list-items p-4 m-3"
            // onClick={(e) => {
            //   e.preventDefault;
            //   setShowUI("week");
            // }}
            >
              {" "}
              <CgCalendarNext />
              Week
            </Link>
            <a
              className="todo-list-items p-4 m-3"
              onClick={(e) => {
                e.preventDefault();
                setShowUI("all");
              }}
            >
              {" "}
              <BsListUl />
              Show All
            </a>
            <a
              className="todo-list-items p-4 m-3"
              onClick={(e) => {
                e.preventDefault();
                setShowUI("status");
              }}
            >
              {" "}
              <GrStatusInfo />
              Status
            </a>
          </div>
          {/* <div>
            {showUI === "today" && <Today schedule={schedule} />}
            <Link to="/today">Today</Link>
            {showUI === "week" && <Weeks schedule={schedule} />}
            {showUI === "all" && <AllSchedule schedule={schedule} />}
            {showUI === "status" && <Status></Status>}
          </div> */}
        </div>
        {showModal && (
          <ModalComponent showModal={showModal} setShowModal={setShowModal}>
            <div className="modalBox text-center">
              <div className="modal-content ">
                <h3>Add Your Schedule</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Add your Schedule"
                  />
                </div>
                <div className="date-picker">
                  <p>
                    <IoTodayOutline />
                    Choose a Date
                  </p>
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                  />
                </div>
                <div className="time-picker">
                  <p>
                    <FaRegClock />
                    Choose a time
                  </p>
                  <input
                    type="time"
                    aria-label="Time"
                    onChange={setTime}
                    clearIcon={true}
                    disableClock={true}
                    setTime={time}
                  />
                </div>
                {error && (
                  <div>
                    <p>{error}</p>
                  </div>
                )}
                <div className="text-center">
                  <input
                    type="submit"
                    value="Add Your Schedule"
                    className="btn submit-btn"
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>
          </ModalComponent>
        )}
      </div>
    </>
  );
};

export default Sidebar;
