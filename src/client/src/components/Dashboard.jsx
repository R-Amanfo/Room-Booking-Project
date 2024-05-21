import React from 'react'
import SearchBar from './search_bar'

const Dashboard = ({ email }) => {
  return (
    <div >
        <div >
            <div >Dashboard</div>
        </div>
        <div>
            <p>Welcome, {email}</p>
           
        </div>
        <div>
        <SearchBar/>
       </div>
    </div>
);
}

export default Dashboard