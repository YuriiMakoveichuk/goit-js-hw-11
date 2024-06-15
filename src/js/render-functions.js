export function galleriesTemplate(arr) {
  return arr.map(galleryTemplate).join('\n');
}

function galleryTemplate({
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return ` <li class="album-item">
            <img
              class='${webformatURL}'
              alt="${tags}"
            />
            <ul class="statistics-list">
              <li class="statistics-item text-marg-1">
                <p class="statistics-text">Likes</p>
                <p>${likes}</p>
              </li>
              <li class="statistics-item text-marg-2">
                <p class="statistics-text">Views</p>
                <p>${views}</p>
              </li>
              <li class="statistics-item text-marg-3">
                <p class="statistics-text">Comments</p>
                <p>${comments}</p>
              </li>
              <li class="statistics-item">
                <p class="statistics-text">Downloads</p>
                <p>${downloads}</p>
              </li>
            </ul>
          </li>`;
}

// const template = galleryTemplate([0]);
