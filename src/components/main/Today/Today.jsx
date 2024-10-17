import moment from "moment";
import Schedule from "../../shared/Schedule";
import { useState, useEffect } from "react";

const Today = ({ schedule }) => {
  const [todaySchedule, setTodaySchedule] = useState([]);
  const date = new Date();
  const todayDate = moment(date).format("DD/MM/YYYY");

  useEffect(() => {
    setTodaySchedule(
      schedule.filter(
        (schedul) => moment(schedul.date).format("DD/MM/YYYY") === todayDate
      )
      // schedule
    );
  }, [schedule]);
  console.log(todaySchedule);

  return (
    <>
      <div>
        <div>
          <h3>Today's Schedule</h3>
          {todaySchedule?.length > 0 &&
            todaySchedule.map((schedule) => (
              <Schedule {...schedule} key={schedule.id} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Today;
