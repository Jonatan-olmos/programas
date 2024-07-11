let key ='f9be095625c0901cf411cc239274b322';
let ciudad = document.getElementById('city');
let boton = document.getElementById('btn-clima');
let resultado = document.getElementById('resultado')

let get_weather = () => {
    let city_name = ciudad.value  ;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&lang=es&appid=${key}&units=metric`
    fetch(url).then((resp) => resp.json()).then(data =>{
        console.log(data);
        resultado.innerHTML = `<h2>${data.name}<h2>
        <h1>Temperatura ${data.main.temp}<h1>
        <h2>Temperatura minima ${data.main.temp_min}<h2>
        <h2>Temperatura minima ${data.main.temp_max}<h2>
        <h2>humedad ${data.main.humidity}%<h2>



        <h4>${data.weather[0].description}<h4>
        `

    });
}
boton.addEventListener('click', get_weather);