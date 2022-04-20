import BookingItem from "./BookingItem";

const BookingList = ({bookings, removeBooking, changeBooking}) => {

    const bookingNodes = bookings.map ( (booking) => {

        return <BookingItem key={booking._id} booking={booking} removeBooking={removeBooking} changeBooking={changeBooking} />

    });


    return (
        <div>
        <h2>Hotel Bookings</h2>
            {bookingNodes}
        </div>
    )

}

export default BookingList;