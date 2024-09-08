async function getWeather(e){
    e.preventDefault(); // to prevent website from refreshing

    const api_key='60ca385bf9a64412990112246240209'
    // get input field's value
    const search_input=document.getElementById('search-input')
    let city=search_input.value

    const city_name=document.getElementById('city_name')
    city_name.innerHTML=city

    //fetching the data for that particular city
   const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`)
   const data =await response.json()
    console.log(data)
    /// fetch done.
   const curr_temp= document.getElementById('current-temperature')
   curr_temp.innerHTML=data.current.temp_c
   const weather_type= document.getElementById('weather-type')
   weather_type.innerHTML=data.current.condition.text
  const humidity=document.getElementById('humidity')
  humidity.innerHTML=data.current.humidity
  const wind_kmph=document.getElementById('wind')
  wind_kmph.innerHTML=data.current.wind_kph

  // formatting time and date.
    const current_time=document.getElementById('current-time')
    let time=data.current.last_updated.split(" ")
    console.log(time)
    current_time.innerHTML=time[1]

}

const form = document.getElementById('search-form')
form.addEventListener('submit',(e)=>{
 
    getWeather(e)
})

async function getDefaultData(){
    const api_key='60ca385bf9a64412990112246240209'
    let city='Satara'
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`)
   const data =await response.json()
    console.log(data)
    /// fetch done.
    const city_name=document.getElementById('city_name')
    city_name.innerHTML=city
   const curr_temp= document.getElementById('current-temperature')
   curr_temp.innerHTML=data.current.temp_c
   const weather_type= document.getElementById('weather-type')
   weather_type.innerHTML=data.current.condition.text
  const humidity=document.getElementById('humidity')
  humidity.innerHTML=data.current.humidity
  const wind_kmph=document.getElementById('wind')
  wind_kmph.innerHTML=data.current.wind_kph

  // formatting time and date.
    const current_time=document.getElementById('current-time')
    let time=data.current.last_updated.split(" ")
    console.log(time)
    current_time.innerHTML=time[1]

}



















// function fetchData(){
//     fetch('https://api.weatherapi.com/v1/current.json?key=60ca385bf9a64412990112246240209&day=5&q=bangalore&days=5')
//     .then(res=>res.json())
//     .then(data=>console.log(data))
// }
//getWeather()
//fetchData()

//fetch - is an inbuilt js function used to make api calls.
//fetch returns a promise
//first parameter of fetch is required - url 