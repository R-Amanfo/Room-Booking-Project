import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

export const time = [
    { id: "null", t: "Select" },
    { id: "7", t: "7:00am" },
    { id: "8", t: "8:00am" },
    { id: "9", t: "9:00am" },
    { id: "10", t: "10:00am" },
    { id: "11", t: "11:00am" },
    { id: "12", t: "12:00pm" },
    { id: "13", t: "13:00pm" },
    { id: "14", t: "14:00pm" },
    { id: "15", t: "15:00pm" },
    { id: "16", t: "16:00pm" },
    { id: "17", t: "17:00pm" },
    { id: "18", t: "18:00pm" },
    { id: "19", t: "19:00pm" },
];

export const handleRegister = async (firstname, lastname, email, username, password, navigate) => {
    try {
        const response = await axios.post('http://localhost:4000/register', {
            firstname,
            lastname,
            email,
            username,
            password,
        });
        const data = response.data;
        if (data.error_message) {
            toast.error(data.error_message);
        } else {
            toast.success(data.message);
            navigate("/");
        }
    } catch (err) {
        console.error(err);
        toast.error("Account creation failed");
    }
};

export const fetchAndDisplayUsers = async () => {
    try {
        const response = await axios.get('http://localhost:3001/equipment');
        const data = response.data;
        displayUsers(data);
    } catch (error) {
        console.error('Error:', error);
        toast.error('Error fetching users');
    }
};

export const displayUsers = (users) => {
    const userDataDiv = document.getElementById('userData');
    userDataDiv.innerHTML = '';

    const userList = document.createElement('ul');

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `Index: ${user.id} - Name: ${user.name}`;
        userList.appendChild(listItem);
    });

    userDataDiv.appendChild(userList);
};


