document.getElementById('input-btn').addEventListener('click', () =>{
    document.getElementById('spinner').style.display = 'block';
    const API_KEY = '34b90c4034ff817f432bb5063be3d9dc'
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    if(inputText == ''){
        document.getElementById('error').style.display = 'block';
    }else{
        document.getElementById('error').style.display = 'none';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${API_KEY}&units=metric`
        fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
    }

    // clear input
    inputField.value = '';
})

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}

const displayTemperature = data =>{
    console.log(data)
    setInnerText('city', data.name);
    setInnerText('temp', data.main.temp);
    setInnerText('condition', data.weather[0].main);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weatherIcon');
    imgIcon.setAttribute('src', url)
    document.getElementById('spinner').style.display = 'none';
}