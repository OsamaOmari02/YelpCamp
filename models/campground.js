const mongoose = require('mongoose');
const schema = mongoose.Schema;

const campGroundSchema = new schema({
    title: String,
    price: Number,
    desc: String,
    location: String,
    image: String,
})
module.exports = mongoose.model('Campground', campGroundSchema);