fetch("http://www.omdbapi.com/?s=Iron+man&apikey=5144a88a")
 .then((movies) => { movies.json().then(console.log) } )
 .catch((error)=>{ console.log(error)});



