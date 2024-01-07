const html = document.querySelector('html')
const mode = document.querySelector('.header__mode')

mode.addEventListener('click', () => {
    html.classList.toggle('active')

})


class Countries {
    fOpen = async (url) => {
        let response = await fetch(url);

        if (response.ok) return response.json()
        else throw new Error(`Bu manzildagi ma'lumotga ulanolmadik ${url}`)
    }
    getCountryAll = () => this.fOpen(`https://restcountries.com/v3.1/all`);
    getCountry = () => this.fOpen()

}

const countryData = new Countries();



function renderCountry() {
    countryData.getCountryAll().then((data, i) => {

         
        // console.log(info)
       data.slice(0,15).forEach(item => {
            const countryCards = document.querySelector('.flags__cards');
            const countryCard = document.createElement('a');
            countryCard.classList.add('card')
            countryCard.href = `E:/WEB/Countries/german.html?name=${item.altSpellings[1]}`
            console.log(item)
            countryCard.innerHTML = `
               <img src="${item.flags.png}" alt="Country germany" class="flag">
               <div class="card__desc">
               <h3 class="title">${item.altSpellings[1]}</h3>
               <p class="card__text">Population: <span class="card__span"> ${item.capitalInfo['latlng']}</span></p>
               <p class="card__text">Region: <span class="card__span"> ${item.region}</span></p>
               <p class="card__text">Capital: <span class="card__span"> ${item.capital}</span></p>
               </div>
       `
            countryCards.append(countryCard)

    
    
        });
    })

    // const descTitle =document.querySelector('.desc__title')
    // const text =document.querySelectorAll('.text')
    // const borderName = document.querySelectorAll('.border__name')
    //  const img = document.querySelector('img')
    // const flag = document.querySelector('.flag');

    // img.innerhtml = `
    // <img src="${.flags.png}" alt="Country germany" class="flag">

    // `


}
renderCountry()