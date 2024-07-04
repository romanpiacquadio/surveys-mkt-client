import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const authToken = 'pk_43781638_97MH4EGOJRHDXLB3CBMPF8G95D61XXWD';
  
  const [lists, setLists] = useState([]);
  const [tasks, setTasks] = useState([]);

  const fetchLists = async () => {
    try {
      const { data } = await axios.get(`https://api.clickup.com/api/v2/space/90140484102/list`,
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
      console.log( data.lists );
      setLists( data.lists );
    } catch ( error ) {
      console.log('Error Fetching Lists', error);
    }
  };

  const fetchTasks = async ( id ) => {
    try {
      const { data } = await axios.get(`https://api.clickup.com/api/v2/list/${ id }/task`,
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
      console.log( data );
      // setTasks();
    } catch ( error ) {
      console.log('Error Fetching Tasks', error)
    }
  }

  useEffect(() => {
    fetchLists();
  }, []);


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
