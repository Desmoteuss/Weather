const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data)=> {
    const cityDets = data.citiDets;
    const weather = data.weather;

    details.innerHTML=``;
  if(card.classList.contains('d-none')) {

  
    card.classList.remove('d-none');
    }
}

const updateCity  = async (city) => {

const choosenCity = await getCity(city);
const weather = await getWeather ( choosenCity.Key);
return {choosenCity,weather};

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

cityForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();
    
    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();
  
    // update the ui with new city
    updateCity(city)
      .then(data => updateUI(data))
      .catch(err => console.log(err));
  });