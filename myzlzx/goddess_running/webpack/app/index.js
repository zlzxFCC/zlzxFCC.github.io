// require('./main.css');
var sub = require('./sub');
var $ = require('jquery');
var moment = require('moment');

let app = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
  $('body').append('<p style="color:red">promise result is ' + number +
    ' now is ' + moment().format() + '</p>');
});
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());
