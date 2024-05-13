import React, { useState } from 'react';
import axios from 'axios';

export const Booking = () => {
        const [formData, setFormData] = useState({
          room: '',
          equipment: '',
          startTime: '',
          endTime: ''
        });
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            // Make API call to check availability and book room/equipment
            const response = await axios.post('http://localhost:3001/book', formData);
            console.log(response.data);
            // Redirect to confirmation page
            // history.push('/confirmation');
          } catch (error) {
            console.error('Error:', error);
          }
        };
        return (
          <div>
          <h2>Booking</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Room:
              <input
                type="text"
                name="room"
                value={formData.room}
                onChange={handleChange}
              />
            </label>
            <label>
              Equipment:
              <input
                type="text"
                name="equipment"
                value={formData.equipment}
                onChange={handleChange}
              />
            </label>
            <label>
              Start Time:
              <input
                type="text"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
              />
            </label>
            <label>
              End Time:
              <input
                type="text"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Confirm Booking</button>
          </form>
        </div>
        )
      }
      