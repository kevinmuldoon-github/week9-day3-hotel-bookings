use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Tanya" , 
        email: "tanya@email.com" , 
        checkedin: true
    },
    {
        name: "Kevin" , 
        email: "kevin@hotmail.com" , 
        checkedin: false
    },
    {
        name: "Jon Z" , 
        email: "jon@gmail.com" , 
        checkedin: true
    }
]);