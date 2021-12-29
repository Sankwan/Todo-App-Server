const mongoose = require ('mongoose');
const userSchema = mongoose.Schema({
    first_name:String,
    last_name:String,
    date_of_birth:Date,
    school:String
},{timestamps:true});

const user = mongoose.model('user',userSchema);
module.exports = user;