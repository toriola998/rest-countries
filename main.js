const wrapper = document.querySelector('.wrapper')
//const searchCountry = document.querySelector('#input-country')
//let html = "";
//let results = ""

fetchCountries();

function fetchCountries () {
    fetch('https://restcountries.com/v2/all')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        renderCountries(data);
    })
}

function renderCountries (data) {
    data.forEach( (country) => {
       wrapper.innerHTML += `
        <div class="container">
            <div class="box"> 
               <img src="${country.flags.svg}">
               <div class="details">  
                   <h3>${country.name}</h3>
                   <p><span>Population:</span>${country.population}</p>
                   <p><span>Region:</span>${country.region}</p>
                   <p><span>Capital:</span>${country.capital}</p>
               </div>
           </div>
        </div>`      
    }) 
}

