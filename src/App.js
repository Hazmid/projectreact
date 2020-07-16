import React, {useState} from 'react';
import Tweet from './Tweet';

function App() {

  const [users, setUsers] = useState([
    { name: "hamid", message: "This is a random tweet" },
    { name: "dev ed", message: "devedevdevdevdvdvevdevd" },
    { name: "traversy", message: "i am awesome" }
  ]);
 
  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;
