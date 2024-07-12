const url = 'https://apidojo-booking-v1.p.rapidapi.com/currency/get-exchange-rates?base_currency=USD&languagecode=en-us';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e662d14ec6msha9cc702d53c6b66p102ebfjsna268a99eba76',
		'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}