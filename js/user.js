function createUserInfo(data) {
  return (`
    <img class="user-image" src="${data.image}" alt="${data.name}">
    <p class="user-name">${data.name}</p>
    <p class="user-publications">${data.posts.length} publicações</p>
    <p class="user-followers">${data.followers.length} seguidores</p>
    <p class="user-following">seguindo ${data.following.length}</p>
    <p class="user-bio">${data.bio}</p>
  `);
}

export default function renderUserInfo(data, element) {
  const markup = createUserInfo(data);
  element.innerHTML = markup;

  return data;
};
