import { useState } from "react";
import { postBooking } from "../BookingService";

const BookingForm = ({addBooking}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [checkedin, setCheckedIn] = useState(false);

    const nameChange = (event) => {
        setName(event.target.value)
    }

    const emailChange = (event) => {
        setEmail(event.target.value)
    }

    const checkedinChange = (event) => {
        if (event.target.value=="true") {setCheckedIn(true)}
        else {setCheckedIn(false)}
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postBooking({
            name: name,
            email: email,
            checkedin: checkedin
        })
            .then( (data) => {
                addBooking(data);
            })
        setName('');
        setEmail('');
    }


    return (
        <form onSubmit={onSubmit} id="booking-form">
        <h2>Add a Booking</h2>
        <div>
            <label htmlFor="name">Customer Name: </label>
            <input onChange={nameChange} type="text" id="name" value={name} required />
        </div>
        <div>
            <label htmlFor="email">Customer Email: </label>
            <input onChange={emailChange} type="email" id="email" value={email} required />
        </div>
        <div>
        <label htmlFor="checkedin">Checked In: </label>
        <select onChange={checkedinChange} id="checkedin" name="checkedin">
            <option value="false">No</option>
            <option value="true">Yes</option>
        </select>
        </div>

        <input type="submit" value="save" id="save" />
        </form>
    )

}

export default BookingForm;