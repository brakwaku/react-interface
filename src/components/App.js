import { findIndex, without } from 'lodash';
import React, { useEffect, useState } from 'react';
import '../css/App.css';
import AddAppointment from './AddAppointments'
import ListAppointment from './ListAppointments'
import SearchAppointment from './SearchAppointments'


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

  const [orderBy, setOrderBy] = useState('ownerName');
  const [orderDir, setOrderDir] = useState('asc');
  const [queryText, setQueryText] = useState('');

  const searchApt = (query) => {
    setQueryText(query);
  }

  const changeOrder = (order, dir) => {
    setOrderBy(order);
    setOrderDir(dir);
  }

  const updateInfo = (name, value, id) => {
    let tempApts = myAppointments;
    // findIndex is from lodash
    let aptIndex = findIndex(myAppointments, {
      aptId: id
    });
    tempApts[aptIndex][name] = value;
    setAppointment(tempApts)
  }

  const addAppointments = (apt) => {
    let tempId = Date.now(); // Seconds since January 1st 1970. Come back to this later for better solution
    let tempApts = myAppointments;
    apt.aptId = tempId;
    tempApts.unshift(apt);
    setAppointment(tempApts);
  }

  const deleteAppointment = (apt) => {
    let tempApts = myAppointments;
    tempApts = without(tempApts, apt)
    setAppointment(tempApts);
  }

  // Code for sorting
  let order = 0;
  let filteredApts = myAppointments;
  if(orderDir === 'asc') {
    order = 1;
  } else {
    order = -1;
  }

  filteredApts = filteredApts.sort((a, b) => {
    if(a[orderBy].toLowerCase() <
       b[orderBy].toLowerCase()) {
         return -1 * order;
       } else {
        return 1 * order;
       }
  }).filter(eachItem => {
    return (
      eachItem['petName']
      .toLowerCase()
      .includes(queryText.toLowerCase()) ||
      eachItem['ownerName']
      .toLowerCase()
      .includes(queryText.toLowerCase()) ||
      eachItem['aptNotes']
      .toLowerCase()
      .includes(queryText.toLowerCase())
    )
  });

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
              <SearchAppointment 
                orderBy={orderBy}
                orderDir={orderDir}
                changeOrder={changeOrder}
                searchApt={searchApt}
              />
              <ListAppointment appointments={filteredApts}
              deleteAppointment={deleteAppointment}
              updateInfo={updateInfo}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
