// import moment from "moment";
// import Schedule from "../../shared/Schedule";
import { useContext, useEffect, useState } from "react";
import { scheduleContext } from "../../../Provider/ScheduleProvider";
import moment from "moment";
import Schedule from "../../shared/Schedule";


const Today = () => {
  const { schedule, setSchedule, token } = useContext(scheduleContext);
  const [todaysSchedules, setTodaysSchedules] = useState([])

  const todayDate = moment().format('DD/MM/YYYY')

  useEffect(() => {
    if (schedule) {
      setTodaysSchedules(
        schedule?.filter(
          (schedul) => moment(schedul.date).format("DD/MM/YYYY") === todayDate
        )
      );
    }
  }, [schedule, todayDate]);

  console.log('today', schedule)

  console.log(todaysSchedules);

  return (
    <>
      <div>
        <div>
          <h3>Today's Schedule</h3>
          {todaysSchedules?.length > 0 &&
            todaysSchedules.map((schedule) => (
              <Schedule {...schedule} key={schedule.id} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Today;
