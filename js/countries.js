const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries)
    const allCountriesHTML = countries.map(country => getCountryHTML(country))
    // console.log(allCountriesHTML)
    const container = document.getElementById('countries')
    container.innerHTML = allCountriesHTML.join(' ');
}

//derectly destructuring in perameter
const getCountryHTML = ({ name, flags, area, region }) => {
    return `
    <div class="country">
    <h2>${name.common}</h2>
    <p>Area:${area}</p>
    <p>contenent:${region}</p>
    <img src="${flags.png}"</img>
    </div>
    `
}
// const getCountryHTML = country => {
//main form
//     return `
//     <div class="country">
//     <h2>${country.name.common}</h2>
//     <img src="${country.flags.png}"</img>
//     </div>
//     `
// }

// const getCountryHTML = country => {
//option 1
//     const { name, flags } = country;
//     return `
//     <div class="country">
//     <h2>${name.common}</h2>
//     <img src="${flags.png}"</img>
//     </div>
//     `
// }
loadCountries()
