// const { create } = require('../models/user');
const { find } = require('../models/user');
const user = require('../models/user');

function getAllUsers(req,res){
    user.find({}).then(function (data) {
        res.status(200).json({success:true, message:'All users retrieved', data})
    }).catch(function (error) {
        res.status(404).json({success:false, message:'User not retrieved: '+error.message})
    })
};

function postUser(req,res){
    user.create({
        "first_name":"Don",
        "last_name":"Simon",
        "date_of_birth":1998-09-11,
        "school":"Latebeokorshie Senior High School",
    },
    {
        "first_name":"Peter",
        "last_name":"Parker",
        "date_of_birth":1993-11-21,
        "school":"Latebeokorshie University",
    },
    {
        "first_name":"Peter",
        "last_name":"Piper",
        "date_of_birth":2009-02-02,
        "school":"Latebeokorshie Elementry",
    }).then(function (data) {
        res.status(200).json({success:true, message:'User created', data})
    }).catch(function (error) {
        res.status(404).json({success:false, message:'unable to create user: '+error.message})
    })
};

module.exports = {getAllUsers,postUser}