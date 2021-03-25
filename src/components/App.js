import { without } from 'lodash';
import React, { useEffect, useState } from 'react';
import '../css/App.css';
import AddAppointment from './AddAppointments'
import ListAppointment from './ListAppointments'
import SearchAppointment from './SearchAppointments'


let tempId = 1;
function App() {
  const [myAppointments, setAppointment] = useState([]);
  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map((item) => {
          return item;
        })
        setAppointment(apts);
      });
  }, []);

  const [formDisplay, setFormDisplay] = useState(false);

  const toggleForm = () => {
    setFormDisplay((formDisplay) => !formDisplay)
  }

  const addAppointments = (apt) => {
    let tempApts = myAppointments;
    apt.aptId = tempId; // Come back to this later
    tempApts.unshift(apt);
    setAppointment(tempApts);
    // tempId + 1;
  }

  const deleteAppointment = (apt) => {
    let tempApts = myAppointments;
    tempApts = without(tempApts, apt)
    setAppointment(tempApts);
  }
  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointment
              formDisplay={formDisplay}
              toggleForm={toggleForm}
              addAppointments = {addAppointments}
              />
              <SearchAppointment />
              <ListAppointment appointments={myAppointments}
              deleteAppointment={deleteAppointment}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
