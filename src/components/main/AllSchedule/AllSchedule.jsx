import React from "react";
import Schedule from "../../shared/Schedule";

const AllSchedule = ({ schedule }) => {
  console.log(schedule);

  return (
    <>
      <div>
        <div>
          <h3>
            Your Schedule : <b>({schedule?.length})</b>
          </h3>
          <div>
            {schedule.map((schedul) => (
              <Schedule {...schedul} key={schedul.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllSchedule;
