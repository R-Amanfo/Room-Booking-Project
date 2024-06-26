import React, { useState, useEffect } from "react";
import TimezoneSelect from "react-timezone-select";
import { useNavigate } from "react-router-dom";
import { time } from "../utils/resource";
import { toast } from "react-toastify";

const Dashboard = () => {
    const [selectedTimezone, setSelectedTimezone] = useState({});
    const navigate = useNavigate();
    const [schedule, setSchedule] = useState([
        { day: "Sun", startTime: "", endTime: "" },
        { day: "Mon", startTime: "", endTime: "" },
        { day: "Tue", startTime: "", endTime: "" },
        { day: "Wed", startTime: "", endTime: "" },
        { day: "Thu", startTime: "", endTime: "" },
        { day: "Fri", startTime: "", endTime: "" },
        { day: "Sat", startTime: "", endTime: "" },
    ]);
    //👇🏻 This updates the schedule array with the start and end time.
    const handleTimeChange = (e, id) => {
        const { name, value } = e.target;
        if (value === "Select") return;
        const list = [...schedule];
        list[id][name] = value;
        setSchedule(list);
    };
    //👇🏻 Logs the user's schedule to the console after setting the availability
    const handleSaveSchedules = () => {
        if (JSON.stringify(selectedTimezone) !== "{}") {
            console.log(schedule);
        } else {
            toast.error("Select your timezone");
        }
    };

    //👇🏻 Runs when a user sign out
    const handleLogout = () => {
        localStorage.removeItem("user");        
        navigate("/");
    };
    return (
        <div>
            <nav className='dashboard__nav'>
                <h2>BookMe</h2>
                <button onClick={handleLogout} className='logout__btn'>
                    Log out
                </button>
            </nav>
            <main className='dashboard__main'>
                <h2 className='dashboard__heading'>Select your availability</h2>
                <div className='timezone__wrapper'>
                    <p>Pick your timezone</p>
                    <TimezoneSelect
                        value={selectedTimezone}
                        onChange={setSelectedTimezone}
                    />

                    {schedule.map((sch, id) => (
                        <div className='form' key={id}>
                            <p>{sch.day}</p>
                            <div className='select__wrapper'>
                                <label htmlFor='startTime'>Start Time</label>
                                <select
                                    name='startTime'
                                    id='startTime'
                                    onChange={(e) => handleTimeChange(e, id)}
                                >
                                    {time.map((t) => (
                                        <option key={t.id} value={t.t} id={t.id}>
                                            {t.t}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='select__wrapper'>
                                <label htmlFor='endTime'>End Time</label>
                                <select
                                    name='endTime'
                                    id='endTime'
                                    onChange={(e) => handleTimeChange(e, id)}
                                >
                                    {time.map((t) => (
                                        <option key={t.id} value={t.t} id={t.id}>
                                            {t.t}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='saveBtn__container'>
                    <button onClick={handleSaveSchedules}>SAVE SCHEDULES</button>
                </div>
            </main>
        </div>
    );
};
export default Dashboard;