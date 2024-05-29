import React, { useState } from 'react';
import RoomCard from './roomCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './search_bar';


    //FOR FILTERING THE RESULTS

    // const RoomSearch = () => {
    
    //const [searchTerm, setSearchTerm] = useState('');
    // const [rooms, setRooms] = useState([]);
    // const [filteredRooms, setFilteredRooms] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
  
    // useEffect(() => {
    //   const fetchRooms = async () => {
    //     try {
    //       const response = await fetch('http://localhost:5000/api/rooms'); //amend!!!
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       const data = await response.json();
    //       setRooms(data);
    //       setFilteredRooms(data);
    //       setLoading(false);
    //     } catch (error) {
    //       setError(error);
    //       setLoading(false);
    //     }
    //   };
  
    //   fetchRooms();
    // }, []);
  
    // const handleSearchChange = (term) => {
    //   setSearchTerm(term.toLowerCase());
    //   const filtered = rooms.filter(room =>
    //     room.title.toLowerCase().includes(term) ||
    //     room.description.toLowerCase().includes(term)
    //   );
    //   setFilteredRooms(filtered);
    // };
  
    // if (loading) {
    //   return <div>Loading...</div>;
    // }
  
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // }

  return (
    <div className="container">
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <div className="row">
        {filteredRooms.map(room => (
          <div className="col-md-4" key={room.id}>
            <RoomCard
              title={room.title}
              description={room.description}
              capacity={room.capacity}
              availability={room.availability}
              imageUrl={room.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
//};


export default RoomSearch;
