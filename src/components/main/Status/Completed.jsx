import React, { useEffect, useState } from "react";
import Schedule from "../../shared/Schedule";

const Completed = ({ schedule }) => {
  const [completedSchedule, setCompletedSchedule] = useState([]);
  useEffect(() => {
    setCompletedSchedule(
      schedule.filter((schedule) => schedule.checked === true)
    );
  }, [schedule]);
  return (
    <>
      <div>
        <div>
          <h3>
            Completed Schedule <b>({completedSchedule?.length})</b>
          </h3>
        </div>
        {completedSchedule?.map(<Schedule {...schedule} key={schedule.id} />)}
      </div>
    </>
  );
};

export default Completed;
