function createMarkupPosts(posts) {
  return posts.map(post => `
    <div class="post">
      <img src="${post.image}" alt="${post.description}" width="200" />
      <p class="likes">${post.likes.length}</p>
      <p class="comments">${post.comments.length}</p>
    </div>`).join('');
}

export default function renderUserPosts(data, element) {
  const markup = createMarkupPosts(data);
  element.innerHTML = markup;

  return data;
}
