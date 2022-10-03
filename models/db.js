const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://prince2316:1234@cluster0.c13fbt4.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on("connected", function(){
    console.log("Application is connected to Databse");
})