const baseURL = 'http://localhost:5000/api/bookings/';

// Function to retrieve all bookings
export const getBookings = () => {
    return fetch (baseURL)
        .then (res => res.json())
};

// Function to add a booking to the database
export const postBooking = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}


// Function to delete a booking
export const deleteBooking = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}