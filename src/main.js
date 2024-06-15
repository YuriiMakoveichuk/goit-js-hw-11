import { userRequest } from './js/pixabay-api.js';
import { galleriesTemplate } from './js/render-functions.js';

const searchForm = document.querySelector('.js-form');
const ulElem = document.querySelector('.album-list');

const request = searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const userSearch = e.target.elements.query.value;
  if (userSearch !== '') {
    userRequest(userSearch)
      .then(data => {
        console.log(data);
        const markup = galleriesTemplate(data);
        ulElem.innerHTML = markup;
      })
      .catch(err => {});
  }
  searchForm.reset();
});
