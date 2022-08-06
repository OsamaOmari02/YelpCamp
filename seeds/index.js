const path = require('path');
const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp');
const db = mongoose.connection;

db.on('error', err => {
    console.log(err);
});

db.once("open", () => {
    console.log("Database connected")
})

const sample = (array) => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            location: `${cities[random1000].city},${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                {
                  url: 'https://res.cloudinary.com/dyduu2jze/image/upload/v1659802505/YlpCamp/vgewxelikd0tzetpskln.jpg',
                  filename: 'YlpCamp/vgewxelikd0tzetpskln',
                },
                {
                  url: 'https://res.cloudinary.com/dyduu2jze/image/upload/v1659802505/YlpCamp/pdjwlgzpnum4d6qixukw.png',
                  filename: 'YlpCamp/pdjwlgzpnum4d6qixukw',
                },
                {
                  url: 'https://res.cloudinary.com/dyduu2jze/image/upload/v1659802505/YlpCamp/opmvtyfgqzqos5mei2le.jpg',
                  filename: 'YlpCamp/opmvtyfgqzqos5mei2le',
                }
              ],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: price,
            author: '62e97cc9e54d39b4f8f474f8',
        })
        await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
});
