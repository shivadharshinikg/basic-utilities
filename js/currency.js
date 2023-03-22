const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");
updateRate()

function updateRate() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a59fa8eefemshf083c1bb67e72d7p1f972ejsnc82bc3f331c5',
            'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${currencyFirstEl.value}&want=${currencySecondEl.value}&amount=${worthFirstEl.value}`, options)
        .then(response => response.json())
        .then(response => {

            console.log(response);

            // exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${response.new_amount + " " + currencySecondEl.value}`;
            worthSecondEl.value = (response.new_amount).toFixed(2)

        })
        .catch(err => console.error(err));
}



currencyFirstEl.addEventListener("change", updateRate);




currencySecondEl.addEventListener("change", updateRate);




worthFirstEl.addEventListener("input", updateRate);