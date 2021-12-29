const wrapper = document.querySelector('.wrapper')
const searchCountry = document.querySelector('#input-country')
let html = "";
let results = ""
// Make a request for a user with a given ID
axios.get('https://restcountries.com/v2/all')
  .then(function (response) {
    // handle success
     results = response.data;
    
    if(results.length) { 
            results.forEach(country=> { 
            html += `
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
            </div>
        `;
        wrapper.innerHTML = html;     
    })
    }    
    searchCountry.addEventListener('keyup', (e) => {
        let inputValue = e.target.value.toLowerCase();
        results.forEach( (item) => {
           let countryNames = item.name.toLowerCase();
            if (countryNames.indexOf(inputValue) != -1){
                item.style.display = 'block'
            }else {
                item.style.display = 'none'
            }
        })
    })

    /*let allCountries = [...wrapper.children] //convert nodeList to array
    const detailedPage = document.querySelector('.detailed-page')
    const main = document.querySelector('main');
    console.log(allCountries);
    allCountries.forEach( (item) => {
        if(item.className == 'container'){
            item.addEventListener('click', (e) => {
                console.log('red');
                detailedPage.style.display = 'block';
                main.style.display = 'none';
                html += `
                <div>
                <img>
                <h3>${e.target.name}</h3>
                <p><span>Native name:</span></p>
                <p><span>Population:</span></p>
                <p><span>Region:</span></p>
                <p><span>Sub region:</span></p>
                <p><span>Capital:</span></p>
                <p><span>Top level domain:</span></p>
                <p><span>Currencies:</span></p>
                <p><span>Languages:</span></p>
    
                <div>
                    <p><span>Border Countries:</span></p>
                    <button><a></a></button>
                </div>
                </div>
                `
                detailedPage.innerHTML = html;
            })
        }
    })*/
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log(results);
  });

 
