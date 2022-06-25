fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=anime"
)
  .then((res) => res.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById("author").textContent = `By: ${data.user.name}`;
  })

  .catch((err) => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1465451382350-bd4d4926f7f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTYwMDIzODg&ixlib=rb-1.2.1&q=80&w=1080)`;
  });

fetch(`https://api.coingecko.com/api/v3/coins/dogecoin?tickers=false&
community_data=false&developer_data=false&sparkline=false`)
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong");
    }
 
    return res.json();
  })
  .then((data) => {
    //data.market_data.ath.usd
    document.getElementById(
      "crypto-top").innerHTML = `<img src="${data.image.small}" alt="Dogecoin image">
   <p>${data.name}<p/>`
   
   document.getElementById("crypto").innerHTML +=`
   <p>🎯: ${data.market_data.current_price.usd}<p/>
   <p>👆 : ${data.market_data.high_24h.usd}<p/>
   <p>👇 : ${data.market_data.low_24h.usd}<p/>
   `;
  })
  .catch((err) => console.error(err));

function UpdateTime (){
   const date = new Date();
   let currentTime = date.toLocaleTimeString("en-us",{timeStyle: "short"});
   document.getElementById('time').textContent = currentTime
   
}



setInterval(UpdateTime, 1000)


   navigator.geolocation.getCurrentPosition((position)=>{
  
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
    .then((res) => {
      if (!res.ok) {
        throw Error("Weather data not available")
    }
    return  res.json()})
    .then(data => {
      const celsius = Math.round((data.main.temp - 32) * 5/9)

   console.log(celsius)
     
      document.getElementById('weather-top').innerHTML =`
      <img class ="weather-icon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
      <p class = "temp-text">${celsius}°C<p/>
      `
      document.getElementById('weather').innerHTML +=`<p class = "city-name">${data.name}<p/>`
  }).catch(err => console.log(err))
})




