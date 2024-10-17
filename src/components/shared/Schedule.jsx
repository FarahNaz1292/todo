import { useContext } from "react";
import { AiFillDelete, AiOutlineFieldTime } from "react-icons/ai";
import { FcEditImage } from "react-icons/fc";
import { MdDateRange, MdRadioButtonUnchecked } from "react-icons/md";
import { scheduleContext } from "../../Provider/ScheduleProvider";

const Schedule = ({ id, name, date, time, checked }) => {
  const { schedule, setSchedule, updateScheduleState } = useContext(scheduleContext);
  const handleCheck = (id) => {
    setSchedule(
      schedule.map((schedule) => {
        if (schedule.id === id) {
          return { ...schedule, checked: !schedule.checked };
        }
        return schedule;
      })
    );
    const handleEdit = (id) => {
      if (schedule.id === id) {
      }
    };
  };

  const handleDelete = () => {
    const filteredSchedule = schedule.filter(s => s.id !== id)
    // console.log(filteredSchedule)
    // localStorage.setItem('todos', JSON.stringify(filteredSchedule))
    // setSchedule(filteredSchedule)
    updateScheduleState(filteredSchedule)
  }

  return (
    <>
      <div>
        <p className={`${checked ? "checked" : ""}`}>{name}</p>
      </div>
      <div>
        <button
          onChange={() => handleEdit(schedule.id)}
          data-toggle="tooltip"
          data-placement="top"
          title="Edit"
        >
          <FcEditImage></FcEditImage>
        </button>
        <button
          onClick={() => handleCheck(schedule.id)}
          data-toggle="tooltip"
          data-placement="top"
          title="Done"
        >
          <MdRadioButtonUnchecked></MdRadioButtonUnchecked>
        </button>
        <button
          onClick={handleDelete}
          data-toggle="tooltip"
          data-placement="top"
          title="Delete"
        >
          <AiFillDelete></AiFillDelete>
        </button>
        <div>
          <p>
            <MdDateRange></MdDateRange>
          </p>
          {date}
        </div>
        <div>
          <p>
            <AiOutlineFieldTime></AiOutlineFieldTime>
          </p>
          {time === "Invaild date" ? "Invalid Time" : time}
        </div>
      </div>
    </>
  );
};

export default Schedule;
