const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

    const router = express.Router();

    // default path to disply all bookings
    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    });


    // show one booking
    router.get('/:id' , (req, res) => {
        const id = req.params.id;
        collection
        .findOne({ _id: ObjectID(id) })
        .then((doc) => res.json(doc))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    });

    // Add a new booking to hotel database
    router.post('/', (req,res) => {
        const newBooking = req.body;
        collection
        .insertOne(newBooking)
        .then((result) => res.json(result.ops[0]))
        .catch( (err) => {
            res.status(500);
            res.json({status: 500, errror: err});
        })
    });

    // Delete a booking from database
    router.delete('/:id' , (req, res) => {
        const id = req.params.id;
        collection
        .deleteOne({_id: ObjectID(id)})
        .then (result => res.json(result))
        .catch( (err) => {
            res.status(500);
            res.json({status: 500, errror: err});
        })
    });

    // Update a hotel booking
    router.put('/:id' , (req, res) => {
        const id = req.params.id;
        const updatedData = req.body;
        collection
        .updateOne( {_id: ObjectID(id)} , {$set: updatedData})
        .then (result => res.json(result))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err});
        });
    });

    return router;
};

module.exports = createRouter;