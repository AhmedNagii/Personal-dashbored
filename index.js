


fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
   .then((res) => res.json())
   . then((data) => {
    
   document.body.style.backgroundImage = `url(${data.urls.regular})`
   document.getElementById("author").textContent = `By: ${data.user.name}`

   })

   .catch(err => {
      document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1465451382350-bd4d4926f7f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTYwMDIzODg&ixlib=rb-1.2.1&q=80&w=1080)`
   })


   

fetch(`https://api.coingecko.com/api/v3/coins/dogecoin?tickers=false&market_data=false&
community_data=false&developer_data=false&sparkline=false`)
.then((res) => res.json())
.then(data => console.log(data))

