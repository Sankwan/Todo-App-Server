const express = require('express');
const  mongoose  = require('mongoose');
const userController = require('./controllers/userController');
app = express();
app.use(express.json());


mongo_url = 'mongodb://localhost:27017/users_info'

app.listen(27017,function () {
    console.log('Server is running');
    mongoose.connect(mongo_url).then(function () {
        console.log('DB is running')
        app.get('/user',userController.getAllUsers);
        app.post('/user', userController.postUser);
    }
    ).catch(function (error) {
        console.log('DB is not running: ', error.message);
    })
})