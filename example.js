const mongoose = require('mongoose');

//this line only needs to run once to connect the application to the database
mongoose.connect('mongodb://localhost/W4D5L1_Mongoose');

//this line creates the initial structure of the database
//Mongoose allow this variable to be used as a constructor function that interacts with the 'Cats' collection
//First object 'Cat' is the collection
//Second object "{ name: String }is known as the schema
//mongo will pluralize the model collection name cat ==> cats
const Cat = mongoose.model('Cat', { name: String });

//Creates a new object 'kitty' with details that fit the schema
//this object has not been persisted to the database, yet
const kitty = new Cat({ name: 'Ginger' });

//Saves the object 'kitty' to the database
//kitty.save(); will save to database without error checking  [db.cats.insertOne({ name: 'Gingere'})]
kitty.save((err) => {
  if(err) {
    throw err;
  }
  console.log(`${kitty._id} saved to the database.`);
});

//this will query the list of documents (items) in the Cat collection
//Sample line for searching with depricated commands - Cat.find({}, {_id: 0, name: 1}, (err, results) => {
Cat.find( (err, results) => {
  results.forEach((dog) => {
    console.log(`----> ${dog.name}`);
  });
});
//Closes database collection after 1 second 
setTimeout(() => mongoose.disconnect(), 1000);
