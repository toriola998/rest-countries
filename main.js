const wrapper = document.querySelector('.wrapper')
const searchCountry = document.querySelector('#input-country')
const continent = document.querySelector('#region')
const detailedPage = document.querySelector('.detailed-page')

async function getCountries() {
    const url = await fetch('https://restcountries.com/v2/all');
    const res = await url.json()
    console.log(res)
    res.forEach(count => {
        showCountry(count)
    });
}

getCountries();

function showCountry(data) {
    const country = document.createElement('div');
    country.innerHTML = `
    <div>
        <div class="country-img">
        <img class="country-flag" src="${data.flag}"/>
        </div>

        <div class="country-info">
            <h5 class="country-name">${data.name}</h5>
            <p><strong>${data.population}:</strong></p>
            <p class="country-region">${data.region}:</p>
            <p><strong>${data.capital}</strong></p>
        </div>
    </div>
   `
    wrapper.appendChild(country)

    //for each of the inner page to show
    country.addEventListener('click', () => {
       showCountryDetails(data)
    })
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

function showCountryDetails (data) {
    detailedPage.style.display = 'block';
    detailedPage.innerHTML =  `
    <div class="">
    <div class="box"> 
    <div class="country-img">
    <img class="country-flag" src="${data.flag}"/>
 </div>
       <div class="details">  
           <h3 class="country-name">${data.numericCode}</h3>
           <p><span>Population:</span>${data.population}</p>
           <p><span>Region:</span><span class="country-region">${data.region}<span></p>
           <p><span>Capital:</span>${data.capital}</p>
       </div>
   </div>
</div>`
}