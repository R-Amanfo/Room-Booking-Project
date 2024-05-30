import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './BookingPage.scss';

const BookingPage = () => {
  const [date, setDate] = useState(new Date());

  const timeSlots = [
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM'
  ];

  const onDateChange = (date) => {
    setDate(date);
  };

  return (
    <div className="booking-page">
      <h1>Book Room's Date/Time</h1>
      <div className="calendar-container">
        <Calendar onChange={onDateChange} value={date} />
      </div>
      <div className="time-slots">
        <h2>Available Time Slots</h2>
        <ul>
          {timeSlots.map((slot, index) => (
            <li key={index} className="time-slot" onClick={() => alert(`Selected time slot: ${slot}`)}>
              {slot}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookingPage;