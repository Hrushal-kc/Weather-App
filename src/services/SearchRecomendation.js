const BaseURL = 'https://weatherapi-com.p.rapidapi.com';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '603dc9ed29mshd3f9bb74ffe31c3p124b36jsn662f3737c4d7',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
};

async function getSearch(string) {
  const response = await fetch(`${BaseURL}/search.json?q=${string}`, options)
    .then(response => response.json())
    .catch(err => console.error(err));

  return response;
}

export default getSearch;
