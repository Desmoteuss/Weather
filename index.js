const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updateUI = (data)=> {
    const { cityDets, weather } = data;
    details.innerHTML = `
    <h5 class="my-3">${weather.WeatherIcon}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);
  
  let timeSrc = null;
  if(weather.IsDayTime){
    timeSrc = 'img/day.svg';
  } else {
    timeSrc = 'img/night.svg';
  }
  time.setAttribute('src', timeSrc);


  if(card.classList.contains('d-none')) {

  
    card.classList.remove('d-none');
    }
};

const updateCity  = async (city) => {

const choosenCity = await getCity(city);
const weather = await getWeather(choosenCity.Key);
return {choosenCity,weather};

};

// cityForm.addEventListener('submit', x => {

//     //getting City value
//     x.preventDefault();
//     const city = cityForm.city.value.trim();
//     cityForm.reset();

//     //update UI
// updateCity(city)
// .then(data => console.log (data))
// .catch(err => console.log(err));

// });

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