const baseAddress = 'https://api.scryfall.com/';

const requestAPI = async (resource, register) => {

  let requestAddress = `${baseAddress}/${resource}`;

  requestAddress += register ? `/${register}` : '';

  const result = await fetch(requestAddress);

  return result.json();
}

const button = document.querySelector('#requestAPI');
const loading = document.querySelector('.loading');
const resultContent = document.querySelector('#api-result');
console.log(loading);

button.addEventListener('click', async (e) => {
  e.preventDefault();
  loading.innerHTML = 'Carregando...';

  const randomCard = await requestAPI('cards', 'random');
  const sets = await requestAPI('sets');
  const symbols = await requestAPI('symbology');

  const contentText = {
    randomCard,
    sets,
    symbols
  };

  resultContent.innerHTML = JSON.stringify(contentText);

  loading.innerHTML = '';
});
