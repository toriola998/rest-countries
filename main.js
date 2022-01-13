const wrapper = document.querySelector('.wrapper')
const searchCountry = document.querySelector('#input-country')
const continent = document.querySelector('#region')
const detailedPage = document.querySelector('.detailed-page')
const backBtn = document.querySelector('.back-btn-wrap');

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
    <div class="box">
        <div class="country-img">
            <img class="country-flag" src="${data.flag}"/>
        </div>

        <div class="country-info">
            <h3 class="country-name">${data.name}</h3>
            <p><span>Population:</span>${data.population}</p>
            <p class="country-region"><span>Region:</span>${data.region}</p>
            <p><span>Capital:</span>${data.capital}</p>
        </div>
    </div>
   `
    wrapper.appendChild(country)

    //for each of the inner page to show
    country.addEventListener('click', () => {
       showCountryDetails(data);
       wrapper.style.display = 'none'
       backBtn.addEventListener('click', () => {
        detailedPage.style.display = 'none'
    })
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
    <div>
    <div class="container"> 
        <div>
            <div>
                <div class="back-btn-wrap">
                    <img src="./assets/back-btn.svg" alt="go-back-arrow" class="back-btn-img"/>
                    <button class="back-btn">Back</button>
                </div>
                <img src="${data.flag}" alt="country-flag" class="flag-img"/>
            </div>
            <div class="country-information"> 
                <div>
                    <h3 class="country-name"><span>Native name:</span> ${data.name}</h3>
                    <div class="flex-tab">
                        <div class=""> 
                            <p><span>Population:</span>${data.population}</p>
                            <p><span>Region:</span>${data.region}<span></p>
                            <p><span>Sub-Region:</span>${data.subregion}</p>
                            <p><span>Capital:</span>${data.capital}</p>
                        </div>

                        <div class="div2">
                            <p><span>Top Level Domain:</span>${data.topLevelDomain}</p>
                            <p><span>Currencies:</span>${data.currencies.map(currency => currency.name)}</p>
                            <p><span>Languages:</span>${data.languages.map(lang => lang.name).join(', ')} </> 
                        </div>
                    </div>
                    
                    <div class="border-country">
                        <p class="border">Border countries</p>
                        <div class="border-btn">
                            <ul> ${data.borders.map(border => `<button>${border}</button>`).join("")} </ul> 
                        </div> 
                    </div>
                </div>
            </div>    
        </div>
    </div>
</div>`
}
