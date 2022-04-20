import { deleteBooking } from "../BookingService";
import { updateBooking } from "../BookingService";

const BookingItem = ({booking, removeBooking, changeBooking}) => {

    const handleDelete = () => {
        deleteBooking(booking._id) // Delete from our Mongodb database
        .then( () => {
            removeBooking(booking._id); // Delete from hotelBookings useState
        })
    }

    const handleCheckedinStatus = () => {
        const newBooking = {    
            _id: booking._id,
            name: booking.name,
            email: booking.email,
            checkedin: !booking.checkedin
        };

        updateBooking(newBooking)  // Update booking in database
        changeBooking(newBooking)  // Update hotel Bookings useState
    };

    return (
        <>
        <ul>
            <li><strong>Booking ID</strong>: {booking._id}</li>
            <li><strong>Customer Name</strong>: {booking.name}</li>
            <li><strong>Customer Email</strong>: {booking.email}</li>
            <li><strong>Checked In</strong>: { booking.checkedin? 'Yes': 'No'} (<button onClick={handleCheckedinStatus}>Change Status</button>)</li>
        </ul>
        <button onClick={handleDelete}>Delete Booking</button>
        </>
    )

};

export default BookingItem;