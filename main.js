const wrapper = document.querySelector('.wrapper')
const searchCountry = document.querySelector('#input-country')
const continent = document.querySelector('#region')
const detailedPage = document.querySelector('.detailed-page')
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
                   <h3 class="country-name">${country.name}</h3>
                   <p><span>Population:</span>${country.population}</p>
                   <p><span>Region:</span><span class="country-region">${country.region}<span></p>
                   <p><span>Capital:</span>${country.capital}</p>
               </div>
           </div>
        </div>` 

        const allCountries = [...wrapper.children];  
        allCountries.forEach( (countryy) => {
            countryy.addEventListener('click', () => {
                detailedPage.style.display = 'block';
                wrapper.style.display = 'none'
                renderDetails(country);
            });
        })     
    }) 
}

function renderDetails (detail) {
    detailedPage.innerHTML = `
    <div class="">
            <div class="box"> 
              
               <div class="details">  
                   <h3 class="country-name">${detail.numericCode}</h3>
                   <p><span>Population:</span>${detail.population}</p>
                   <p><span>Region:</span><span class="country-region">${detail.region}<span></p>
                   <p><span>Capital:</span>${detail.capital}</p>
               </div>
           </div>
        </div>` 
}

function searchCountryByName(){
    searchCountry.addEventListener('input', () => {
        const countryName = [...document.querySelectorAll('.country-name')]
        let inputValue = searchCountry.value;
        countryName.forEach( (count) => {
            console.log(count.parentElement.parentElement)
             if(count.textContent.toLowerCase().includes(inputValue.toLowerCase())) {
                count.parentElement.parentElement.style.display = 'block';
             } else {
                count.parentElement.parentElement.style.display = 'none';
             }
        })
    })
} 
searchCountryByName();

function searchCountryByContinent (){
    continent.addEventListener('change', () => {
        const countryRegion = [...document.querySelectorAll('.country-region')]
        let inputValue = region.value;
        countryRegion.forEach( (countReg) => {
            //console.log(count.parentElement.parentElement)
            if(countReg.textContent.toLowerCase().includes(inputValue.toLowerCase())) {
                countReg.parentElement.parentElement.parentElement.style.display = 'block';
             } else {
                countReg.parentElement.parentElement.parentElement.style.display = 'none';
             }
        })
    })
}
searchCountryByContinent();