import React, { useState } from "react";
import './style.css';

const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    console.log("Hello Tanmayee API");
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonR = await response.json();
    setUsers(jsonR.data);
  }
  return (
    <>
      <div className="App">
        <header>
          <h2 className="heading">Harsh Rajpal</h2>

          <button onClick={loadUsers} >Fetch Data from API</button>
        </header>

        <div className="card-container">
          {
            users ? (users.map(({ id, email, first_name, last_name, avatar }) => {
              return (
                <>
                  <div className="card" key={id}>
                    <div className="card-top">
                      <img src={avatar} alt="sarwar" className="card-img" />
                    </div>
                    <div className="card-bottom">
                      <h4>Name: {`${first_name} ${last_name}`}</h4>
                      <p>Email id: {email}</p>
                    </div>
                  </div>
                </>
              )
            }
            )) : (<button onClick={loadUsers}>Fetch Data</button>)
          }
        </div>

      </div>
    </>
  )
}
export default App;
