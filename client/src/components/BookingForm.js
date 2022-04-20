import { useState } from "react";
import { postBooking } from "../BookingService";

const BookingForm = ({addBooking}) => {

    const [formData, setFormData] = useState ({});

    const onChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postBooking(formData)
            .then( (data) => {
                addBooking(data);
            })
    }


    return (
        <form onSubmit={onSubmit} id="booking-form">
        <h2>Add a Booking</h2>
        <div>
            <label htmlFor="name">Customer Name: </label>
            <input onChange={onChange} type="text" id="name"  required />
        </div>
        <div>
            <label htmlFor="email">Customer Email: </label>
            <input onChange={onChange} type="email" id="email"  required />
        </div>
        <div>
        <label htmlFor="checkedin">Checked In: </label>
        <select id="checkedin" name="checkedin">
            <option value="true">Yes</option>
            <option value="true">No</option>
        </select>
        </div>

        <input type="submit" value="save" id="save" />
        </form>
    )

}

export default BookingForm;