import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const SearchBar = () => {
  const [equipment, setEquipment] = useState('');
  const [date, setDate] = useState(new Date());
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [equipmentList, setEquipmentList] = useState([]);

  useEffect(() => {
    async function fetchEquipmentData() {
      try {
        const response = await axios.get('http://localhost:3001/equipment');
        setEquipmentList(response.data);
      } catch (error) {
        console.error('Error fetching equipment data:', error);
      }
    }

    fetchEquipmentData();
  }, []);

  const handleEquipmentChange = (event) => {
    setEquipment(event.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search or booking logic here
    console.log('Equipment:', equipment);
    console.log('Date:', date);
    console.log('Number of People:', numberOfPeople);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="equipment">Select Equipment:</label>
        <select id="equipment" value={setEquipment} onChange={handleEquipmentChange}>
          <option value="">-- Select Equipment --</option>
          {equipmentList.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="date">Select Date:</label>
        <DatePicker id="date" selected={date} onChange={handleDateChange} />
      </div>
      <div>
        <label htmlFor="numberOfPeople">Number of People:</label>
        <input
          type="number"
          id="numberOfPeople"
          value={numberOfPeople}
          onChange={handleNumberOfPeopleChange}
          min={1}
        />
      </div>
      <button type="submit">Search/Book</button>
    </form>
  );
};

export default SearchBar;