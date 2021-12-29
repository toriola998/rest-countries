const wrapper = document.querySelector('.wrapper')
const searchCountry = document.querySelector('#input-country')
let html = "";
let results = ""

fetchCountries();
function fetchCountries () {
    fetch('https://restcountries.com/v2/all')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        //renderCountries(data);
    })
}