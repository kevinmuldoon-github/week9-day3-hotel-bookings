const baseURL = 'http://localhost:5000/api/bookings/';

// Function to retrieve all bookings
export const getBookings = () => {
    return fetch (baseURL)
        .then (res => res.json());
};

// Function to add a booking to the database
export const postBooking = (booking) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json());
}

// Function to delete a booking
export const deleteBooking = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

// Function to update booking
export const updateBooking = (booking) => {
    return fetch(baseURL + booking._id, {
        method: 'PUT',
        body: JSON.stringify({ // Don't pass ID in update request
            name: booking.name,
            email: booking.email,
            checkedin: booking.checkedin
        }),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json());
}