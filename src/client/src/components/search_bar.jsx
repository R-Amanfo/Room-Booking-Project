import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import styles from '../components_style.module.css';

const SearchBar = () => {
  const [equipment, setEquipment] = useState('');
  const [date, setDate] = useState(new Date());
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [equipmentList, setEquipmentList] = useState([]);
  const [filteredEquipmentList, setFilteredEquipmentList] = useState([]);

  useEffect(() => {
    const fetchEquipmentData = async () => {
      try {
        const response = await axios.get('http://localhost:3005/equipment');
        setEquipmentList(response.data);
      } catch (error) {
        console.error('Error fetching equipment data:', error);
      }
    };

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

  useEffect(() => {
    setFilteredEquipmentList(
      equipmentList.filter(item =>
        item.name.toLowerCase().includes(equipment.toLowerCase())
      )
    );
  }, [equipment, equipmentList]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Equipment:', equipment);
    console.log('Date:', date);
    console.log('Number of People:', numberOfPeople);
    // Add logic for search or booking here
  };
  
  return (
    <form className={styles.components} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="equipment">Search Equipment:</label>
        <input
          type="text"
          id="equipment"
          value={equipment}
          onChange={handleEquipmentChange}
          placeholder="Search equipment..."
          list="equipment-list"
        />
        <datalist id="equipment-list">
          {filteredEquipmentList.map((item, index) => (
            <option key={index} value={item.name} />
          ))}
        </datalist>
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