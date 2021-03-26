import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

const ListAppointments = ({ appointments, deleteAppointment, updateInfo }) => {
    return (
        <div className="appointment-list item-list mb-3">
            {appointments.map((listItems, index) => (
                <div key={index + 2} className="pet-item col media py-3">
                    <div className="mr-3">
                        <button className="pet-delete btn btn-sm btn-danger"
                            onClick={() => deleteAppointment(listItems)}>
                            <FaTimes />
                        </button>
                    </div>

                    <div className="pet-info media-body">
                        <div className="pet-head d-flex">
                            <span className="pet-name"
                                // contentEditable
                                // suppressContentEditableWarning
                                // onBlur={
                                //     e => updateInfo('petName', e.target.innerText, listItems.aptId)
                                // }
                            >
                                {listItems.petName}</span>
                            <span className="apt-date ml-auto">
                                <Moment
                                    date={listItems.aptDate}
                                    parse="YYY-MM-dd hh:mm"
                                    format="MMM-D h:mma"
                                />
                            </span>
                        </div>

                        <div className="owner-name">
                            <span className="label-item">Owner:</span>
                            <span
                                // contentEditable
                                // suppressContentEditableWarning
                                // onBlur={
                                //     e => updateInfo('ownerName', e.target.innerText, listItems.aptId)
                                // }
                            > {listItems.ownerName}</span>
                        </div>
                        <div className="apt-notes"
                            // contentEditable
                            // suppressContentEditableWarning
                            // onBlur={
                            //     e => updateInfo('aptNotes', e.target.innerText, listItems.aptId)
                            // }
                        > {listItems.aptNotes}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListAppointments;