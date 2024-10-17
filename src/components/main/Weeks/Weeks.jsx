import moment from "moment";
import React, { useEffect, useState } from "react";
import Schedule from "../../shared/Schedule";

const Weeks = ({ schedule }) => {
  const [weekSchedule, setWeekSchedule] = useState([]);
  const weekStart = moment().startOf("week");
  const weekEnd = moment().endOf("week");
  useEffect(() => {
    const filteredSchedule = schedule.filter((task) => {
      const taskDate = moment(task.date, "MM/DD/YYYY");
      return taskDate.isBetween(weekStart, weekEnd, null, "[]");
    });
    setWeekSchedule(filteredSchedule);
  }, [schedule]);
  console.log(weekSchedule);

  return (
    <>
      <div>
        <h3>Weeks schedule</h3>
        <p>
          {" "}
          Totall Tasks In This Week
          {weekSchedule?.length}
        </p>
        {weekSchedule?.length > 0 &&
          weekSchedule.map((schedule) => (
            <Schedule {...schedule} key={schedule.id} />
          ))}
      </div>
    </>
  );
};

export default Weeks;
