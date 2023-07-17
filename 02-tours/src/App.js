import React, {useState, useEffect } from "react";
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  
  const removeTour = (id) => {                {/* Remove tour functionality */}
    const newTours = tours.filter((tour)=> tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    //to handle the network errors
    try{
      const response = await fetch(url);  //we're fetching the url
      const tours = await response.json();  //we're throwing back the json data as a response  
      setLoading(false);
      setTours(tours);
    } catch(error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchTours();
  }, []);


  if(loading) {
    return (
      <main>
        <Loading/>
      </main>
    );
  } 
  if(tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className='btn' onClick={()=> fetchTours(tours)}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
};

export default App;
