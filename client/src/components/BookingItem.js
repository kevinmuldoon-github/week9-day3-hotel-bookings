import { deleteBooking } from "../BookingService";

const BookingItem = ({booking, removeBooking}) => {

    const handleDelete = () => {
        deleteBooking(booking._id) // Delete from our Mongodb database
        .then( () => {
            removeBooking(booking._id); // Delete from hotelBookings useState
        })
    }


    return (
        <>
        <ul>
            <li><strong>Booking ID</strong>: {booking._id}</li>
            <li><strong>Customer Name</strong>: {booking.name}</li>
            <li><strong>Customer Email</strong>: {booking.email}</li>
            <li><strong>Checked In</strong>: { booking.checkedin? 'Yes': 'No'}</li>
        </ul>
        <button onClick={handleDelete}>Delete Booking</button>
        </>
    )

};

export default BookingItem;