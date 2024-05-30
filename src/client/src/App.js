import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import { Booking } from './components/booking';
import { Testpage } from './components/testpage';
import Signup from './components/Signup';
import SearchBar from './components/search_bar';
import BookUser from './components/BookUser';
import ContactUs from './components/pages/ContactUs';
import RoomCard from './components/roomCard';
import './App.css';
import { useEffect, useState } from 'react';
import NavbarComp from './components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchPage from './components/pages/SearchPage';
import BookingPage from './components/pages/BookingPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:3001/verify', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ token: localStorage.getItem("user")?.token }),
        });
        const data = await response.json();
        setLoggedIn(data.message === "success");
        setEmail(localStorage.getItem("user")?.email || "");
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path="/display-bookings" element={<SearchPage />} />
          <Route path="/Testpage" element={<Testpage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/SearchBar" element={<SearchBar />} />
          <Route path="/BookUser" element={<BookUser />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/BookingPage" element={<BookingPage />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
