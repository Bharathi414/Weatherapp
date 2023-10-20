const apiKey = 'e97948a5bed34e5ad5b28f438ee894b7';

const weatherinfo = document.getElementById('weatherinfo');
const cityname = document.getElementById('cityname');
const temperature = document.getElementById('temparature');
const description = document.getElementById('description');

document.getElementById('search').addEventListener('click', () =>
{
    const cityinput = document.getElementById('city').value;
    if(cityinput)
    {
        getweather(cityinput);
    }
});

async function getweather(city)
{
    try
    {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const data = await response.json();
        if(data.cod == 200)
        {
            cityname.textContent = data.name;
            temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
            description.textContent = data.weather[0].description;
            weatherinfo.style.display = 'block';
        }
        else
        {
            alert("City not found, Please try again");
        }
    }
    catch (error)
    {
        console.error("Error fetching weather data", error);
    }
}
