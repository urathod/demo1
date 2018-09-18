const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'eeb752b76479d9722234ffcd0763f42d';
let city = argv.c || 'San Francisco';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
