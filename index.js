const image = document.querySelectorAll('img')
const countryName = document.querySelector('h3')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const capital = document.querySelector('.capital')
const wrapper = document.querySelector('.wrapper')

let html = "";

// Make a request for a user with a given ID
axios.get('https://restcountries.com/v2/all')
  .then(function (response) {
    // handle success
    let results = response.data;
    console.log(results);
    if(results.length) { 
            results.forEach(country=> { 
            html += `
            <div class="flex container">
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
            
    })}


  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

 
