import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import styles from '../components_light.module.css';

const SearchBar = () => {
  const [equipment, setEquipment] = useState([]);
  const [date, setDate] = useState(new Date());
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [equipmentList, setEquipmentList] = useState([]);

  useEffect(() => {
    async function fetchEquipmentData() {
      try {
        const response = await axios.get('http://localhost:3001/equipment');
        // console.log(response.data);
        // console.log("Test",response.data.name);
        let testdata = response.data;        
        console.log(testdata);        
        
        for (var i = 0; i < testdata.length; i++) {
        var select = document.getElementById("equipment");
        var option = document.createElement("option");
        option.text = testdata[i].name;   
        option.value = testdata[i].name;
        select.add(option);
      }
       // setEquipmentList(testdata); //adds blank options to the list
   
      } catch (error) {
        console.error('Error fetching equipment data:', error);
      }
    }

    fetchEquipmentData();
      }, []);

      useEffect(() => {
        async function fetchuserdata() {
          try {
            const response = await axios.get('http://localhost:3001/users');
            let testdata2 = response.data;        
            console.log(testdata2);        
            
            for (var i = 0; i < testdata2.length; i++) {
            var select = document.getElementById("numberOfPeople");
            var option = document.createElement("numberOfPeople");
            option.text = testdata2[i].username;   
            option.value = testdata2[i].username;
            select.add(option);
          }
           // setEquipmentList(testdata); //adds blank options to the list
       
       
          } catch (error) {
            console.error('Error fetching equipment data:', error);
          }
        }
    
        fetchuserdata();
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
    <form className={"searchContainer"} onSubmit={handleSubmit}>
      <div className={styles.body} style={{fontWeight: 400}}>
        <label htmlFor="equipment">Select Equipment:</label>
        <select className={styles.inputBox} id="equipment" value={setEquipment} onChange={handleEquipmentChange}>
          <option value="">-- Select Equipment --</option>
          {equipmentList.map((item, index) => (            
             <option key={index} value={equipmentList.name}>{equipment.name}</option>
          ))}
        </select>
      </div>
      <div className={styles.body} style={{fontWeight: 400}}>
        <label htmlFor="date">Select Date:</label>
        <DatePicker className={styles.inputBox} id="date" selected={date} onChange={handleDateChange} />
      </div>
      <div className={styles.body} style={{fontWeight: 400}}>
        <label htmlFor="numberOfPeople">Number of People:</label>
        <input
          className={styles.inputBox}
          type="number"
          id="numberOfPeople"
          value={numberOfPeople}
          onChange={handleNumberOfPeopleChange}
          min={1}
        />
      </div>
      <button className={styles.button} type="submit">Search/Book</button>
    </form>
  );
};

export default SearchBar;