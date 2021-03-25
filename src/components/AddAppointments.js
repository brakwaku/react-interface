import React, {useState} from 'react';
import {FaPlus} from 'react-icons/fa'

const AddAppointments = ({formDisplay, toggleForm, addAppointments}) => {
        // const [petName, setPetName] = useState('') 
        // const [ownerName, setOwnerName] = useState('') 
        // const [aptDate, setAptDate] = useState('') 
        // const [aptTime, setAptTime] = useState('') 
        // const [aptNotes, setAptNotes] = useState('')

        // const altHandleChange = (e) => {
        //     setPetName(e.target.value)   // This will be in the onChange event. One for each
        // }
        
    const [inputField, setInputField] = useState({
        petName: '',
        ownerName: '',
        aptDate: '',
        aptTime: '',
        aptNotes: ''
    });

    const handleChange = (e) => {
        setInputField({[e.target.name]: e.target.value});
    }
    
    const handleAdd = (e) => {
        e.preventDefault();
        let tempApt = {
            petName: e.target.petName.value,
            ownerName: e.target.ownerName.value,
            aptDate: e.target.aptDate.value + ' ' + e.target.petName.value,
            aptNotes: e.target.aptNotes.value
        }

        addAppointments(tempApt);

        setInputField({
            petName: '',
            ownerName: '',
            aptDate: '',
            aptTime: '',
            aptNotes: ''
        });
        toggleForm();
    }

    return (
        <div className={
            'card textcenter mt-3 ' +
            (formDisplay ? '' : 'add-appointment')
        }>
            <div className="apt-addheading card-header bg-primary text-white"
            onClick={ toggleForm }>
                <FaPlus/> Add Appointment
            </div>

            <div className="card-body">
                <form id="aptForm" noValidate
                    onSubmit={handleAdd}>
                    <div className="form-group form-row">
                        <label
                            className="col-md-2 col-form-label text-md-right"
                            htmlFor="petName"
                            readOnly
                        >
                            Pet Name
                        </label>
                        <div className="col-md-10">
                            <input
                                type="text"
                                className="form-control"
                                name="petName"
                                placeholder="Pet's Name"
                                value={inputField.petName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group form-row">
                        <label
                            className="col-md-2 col-form-label text-md-right"
                            htmlFor="ownerName"
                        >
                            Pet Owner
                        </label>
                        <div className="col-md-10">
                            <input
                                type="text"
                                className="form-control"
                                name="ownerName"
                                placeholder="Owner's Name"
                                value={inputField.ownerName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group form-row">
                        <label
                            className="col-md-2 col-form-label text-md-right"
                            htmlFor="aptDate"
                        >
                            Date
                        </label>
                        <div className="col-md-4">
                            <input
                                type="date"
                                className="form-control"
                                name="aptDate"
                                id="aptDate"
                                value={inputField.aptDate}
                                onChange={handleChange}
                            />
                        </div>
                        <label
                            className="col-md-2 col-form-label text-md-right"
                            htmlFor="aptTime"
                        >
                            Time
                        </label>
                        <div className="col-md-4">
                            <input
                                type="time"
                                className="form-control"
                                name="aptTime"
                                id="aptTime"
                                value={inputField.aptTime}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group form-row">
                        <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                            Apt. Notes
                        </label>
                        <div className="col-md-10">
                            <textarea
                                className="form-control"
                                rows="4"
                                cols="50"
                                name="aptNotes"
                                id="aptNotes"
                                placeholder="Appointment Notes"
                                value={inputField.aptNotes}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group form-row mb-0">
                        <div className="offset-md-2 col-md-10">
                            <button
                                type="submit"
                                className="btn btn-primary d-block ml-auto"
                            >
                                Add Appointment
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddAppointments;