import React, { useEffect } from "react";
import Schedule from "../../shared/Schedule";

const Uncompleted = ({ schedule }) => {
  const [unCompletedSchedule, setUnCompletedSchedule] = useState([]);
  useEffect(() => {
    setUnCompletedSchedule(
      schedule.filter((schedule) => schedule.checked === false)
    );
  }, [schedule]);
  return (
    <>
      <div>
        <div>
          <h3>
            UnCompleted Schedule <b>({unCompletedSchedule?.length})</b>
          </h3>
        </div>
        {unCompletedSchedule?.map(<Schedule {...schedule} key={schedule.id} />)}
      </div>
    </>
  );
};

export default Uncompleted;
