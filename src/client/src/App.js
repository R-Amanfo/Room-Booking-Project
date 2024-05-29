import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import {Booking} from './components/booking';
import {Testpage} from './components/testpage';
import Signup from './components/Signup';
import SearchBar from './components/search_bar';
import BookUser from './components/BookUser';
import ContactUs from './components/pages/ContactUs';
import RoomCard from './components/roomCard'
import './App.css';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import NavbarComp from './components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchPage from './components/pages/SearchPage';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    // Fetch the user email and token from local storage
    const user = JSON.parse(localStorage.getItem("user"))

    // If the token/email does not exist, mark the user as logged out
    if (!user || !user.token) {
      setLoggedIn(false)
      return
    }

    // If the token exists, verify it with the auth server to see if it is valid
    fetch('http://localhost:3001/verify', {
            method: "POST",
            headers: {
                'jwt-token': user.token
              }
        })
        .then(r => r.json())
        .then(r => {
            setLoggedIn('success' === r.message)
            setEmail(user.email || "")
        })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
         <NavbarComp />
        <Routes>
        <Route path='/display-bookings' element={<SearchPage />} />
        <Route path="/Testpage" element={<Testpage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SearchBar" element={<SearchBar />} />
        <Route path="/BookUser" element={<BookUser />} />
        <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;