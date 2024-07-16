let key = 'f9be095625c0901cf411cc239274b322';
let ciudad = document.getElementById('city');
let boton = document.getElementById('btn-clima');
let resultado = document.getElementById('resultado')

let get_weather = () => {
    
    let city_name = ciudad.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&lang=es&appid=${key}&units=metric`
    fetch(url).then((resp) => resp.json()).then(data => {
        console.log(data);
       


        resultado.innerHTML = `
         <div class="weather-box">
            <div class="box">
                <div class="info-weather">
                    <div class="weather">
                    <img src="/images/clima/${data.weather[0].main}.png">
                        <h2>${data.name}<h2>
                        <p class="temperature"> ${data.main.temp} <span> °C</span><p>        
                       <p class="description">${data.weather[0].description}<p>
                    
                   </div>
                </div>
            </div>
        </div>
          <div class="weather-details">
                <div class="humidity">
                    <i class="bx bx-water"></i>
                    <div class="text">
                        <div class="info-humidity">
                            <span>${data.main.humidity} %</span>

                        </div>
                        <p>Humedad</p>
                    </div>
                </div>

                <div class="wind">
                    <i class='bx bx-wind'></i>
                    <div class="text">
                        <div class="info-wind">
                            <span>${data.wind.speed} km/h</span>

                        </div>
                        <p>viento</p>
                    </div>
                </div>
            </div>
        `


    });
    
}
boton.addEventListener('click', get_weather);