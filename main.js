//Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
// user enter city and country
//event listener at click
//collect input of city store in variable 
//collect input of country store in variable
//return TEMP in Fahrenheit <h3>

const APIkey= "f8c4c9fbfffe0029705c3398152d222f";

const apiURL= `https://api.openweathermap.org/data/2.5/weather?q={city},{country_code}&appid=${APIkey}`;

document.querySelector('button').onclick = getWEATHER

function getWEATHER(){
//get user input for city and country

const inputCITY = document.querySelector(".city").value;
console.log(inputCITY);

const inputCOUNTRY = document.querySelector(".country").value;
console.log(inputCOUNTRY);
}

//fetch requests
// fetch(apiURL) 
// .then((response) => response.json())
// .then((answer) => console.log(answer))
// .catch()