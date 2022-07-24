fetch("https://api.genderize.io?")
.then(Response => response.json())
.then(json => console.log(json));