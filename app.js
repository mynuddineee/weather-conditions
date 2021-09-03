const API_key =`ebf9d212ef2b17c42e5e85eab85a032c`;
const cityName = document.getElementById('div-container');
const searchTemperature = () =>{
    const city = document.getElementById('city-name').value;
    cityName.textContent = ''
    //console.log(inputField);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => cityTemperature(data));
}

const cityTemperature = temp =>{
    console.log(temp);
    const div = document.createElement('div');
    div.innerHTML = `
        <img src="http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png" alt="">
        <h1>${temp.name}</h1>
        <h3><span>${temp.main.temp}</span>&deg;C</h3>
        <h1>${temp.weather[0].main}</h1>
    
    `;
    cityName.appendChild(div);
}