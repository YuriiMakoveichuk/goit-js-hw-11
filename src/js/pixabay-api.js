export function userRequest(userSearch) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const param = new URLSearchParams({
    key: '44363608-aeb5e859d1804b8d255aa00c3',
    g: userSearch,
    image_type: 'photo',
  });
  const url = `${BASE_URL}${END_POINT}?${param}`;
  return fetch(url).then(res => res.json());
}
