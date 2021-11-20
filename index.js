const wrapper = document.querySelector(".wrapper");
const input = document.getElementById("input-country");
const continentSelect = document.getElementById("region");
let results = [];

input.oninput = render;
continentSelect.onchange = render;

function render() {
  let html = "";
  const search = input.value;
  const continent = continentSelect.value;
  if (results.length) {
    results
      .filter((country) => {
        return country.region.includes(continent) && country.name.toLowerCase().includes(search.toLowerCase());
      })
      .forEach((country) => {
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
      });
    wrapper.innerHTML = html;
  }
}

// Make a request for a user with a given ID
axios
  .get("https://restcountries.com/v2/all")
  .then(function (response) {
    // handle success
    results = response.data;
    render();
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
