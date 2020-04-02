const cityForm = document.querySelector('form');

const updateCity  = async (city) => {

const choosenCity = await getCity(city);
const weather = await getWeather ( choosenCity.Key);
return {

choosenCity: choosenCity,
weather : weather
};

};

cityForm.addEventListener('submit', x => {

    //getting City value
    x.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update UI
updateCity(city)
.then(data => console.log (data))
.catch(err => console.log(err));

});