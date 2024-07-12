
const url = 'https://ai-trip-planner.p.rapidapi.com/?days=${NUMBER_DAYS}&destination=${DESTINATION}%2CUK';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8091602d46mshf99e8ea64c4cfb5p1e8025jsnf2f259281391',
		'X-RapidAPI-Host': 'ai-trip-planner.p.rapidapi.com'
	}
};

Find Out{
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
const x = document.getElementById("demo");

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}



