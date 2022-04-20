import { useState, useEffect } from 'react';
import './App.css';

import {getBookings} from './BookingService';
import BookingList from './components/BookingList';
import BookingForm from './components/BookingForm';

function App() {

const [hotelBookings, setHotelBookings] = useState([]);

// useEffect call to retrieve all bookings
useEffect ( () => {
  getBookings()
    .then((allBookings) => {
      setHotelBookings(allBookings)
    })

}, []);

const addBooking = (booking) => {
  const copyOfBookings = hotelBookings.map(b => b); // Create copy of hoteBookings useState
  copyOfBookings.push(booking);
  setHotelBookings(copyOfBookings);

}

// Function to update booking useState

const changeBooking = (bookingToUpdate) => {
  const bookingIndex = hotelBookings.findIndex(
    booking => booking._id === bookingToUpdate._id
    );
  const copyOfBookings = [...hotelBookings];
  copyOfBookings[bookingIndex] = bookingToUpdate;
  setHotelBookings(copyOfBookings);

}

// function to delete a booking
const removeBooking = (id) => {
  const copyOfBookings = hotelBookings.map(b => b); // Create copy of hoteBookings useState
  const indexToDelete = copyOfBookings.map (b => b._id).indexOf(id); // Return index position of booking to be deleted

  copyOfBookings.splice(indexToDelete, 1);
  setHotelBookings(copyOfBookings);
};


  return (
    
    <>
      <BookingForm addBooking={addBooking} />
      <BookingList bookings={hotelBookings} removeBooking={removeBooking} changeBooking = {changeBooking} />

    </>
  );
}

export default App;
