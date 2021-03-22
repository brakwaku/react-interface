import { without } from 'lodash';
import React, { useEffect, useState } from 'react';
import '../css/App.css';
import AddAppointment from './AddAppointments'
import ListAppointment from './ListAppointments'
import SearchAppointment from './SearchAppointments'


function App() {
  const [myAppointment, setAppointment] = useState([]);
  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map((item) => {
          return item;
        })
        setAppointment(apts);
      });
  }, [])

  const deleteAppointment = (apt) => {
    let tempApts = myAppointment;
    tempApts = without(tempApts, apt)
    setAppointment(tempApts);
  }
  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointment />
              <SearchAppointment />
              <ListAppointment appointments={myAppointment}
              deleteAppointment={deleteAppointment}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
