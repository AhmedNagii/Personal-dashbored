const e = document.createElement('h1');



fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
   .then((res) => res.json())
   . then((data) => {
    console.log(data.user.name)
   document.body.style.backgroundImage = `url(${data.urls.regular})`
   document.getElementById("author").textContent = `By: ${data.user.name}`

   })