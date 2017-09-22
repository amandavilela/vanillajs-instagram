function createUserInfo(data) {
  return (`
    <img class="user-image" src="${data.image}" alt="${data.name}">
    <div class="user-info">
      <h1 class="user-name">${data.name}</h1>
      <ul class="user-links">
        <li>${data.posts.length} publicações</li>
        <li>${data.followers.length} seguidores</li>
        <li>seguindo ${data.following.length}</li>
      </ul>
      <p class="user-bio">${data.bio}</p>
    <div>
  `);
}

export default function renderUserInfo(data, element) {
  const markup = createUserInfo(data);
  element.innerHTML = markup;
};
