import BookingItem from "./BookingItem";

const BookingList = ({bookings, removeBooking}) => {

    const bookingNodes = bookings.map ( (booking) => {

        return <BookingItem key={booking._id} booking={booking} removeBooking={removeBooking} />

    });


    return (
        <div>
        <h2>Hotel Bookings</h2>
            {bookingNodes}
        </div>
    )

}

export default BookingList;