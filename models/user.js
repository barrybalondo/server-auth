const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  Define our model
const userSchema = new Schema({

  email: { type: String, unique: true, lowercase: true }, // before yous save in DB, make sure email is unique via 'unique: true'
  password: { type: String }

});

// Create the model class
const ModelClass = mongoose.model('user', userSchema);


// Export the model
module.exports = ModelClass;
