const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    product : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Posts' , OrderSchema)