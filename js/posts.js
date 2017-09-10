function createMarkupPosts(posts) {
  return posts.map(post =>
    `<li class="post">
        <a href="#post-${post.id}">
          <img src="${post.image}" alt="${post.description}" width="100%" />
          <div>
            <span class="likes"><i class="fa fa-heart" aria-hidden="true"></i> ${post.likes.length}</span>
            <span class="comments"><i class="fa fa-comment" aria-hidden="true"></i> ${post.comments.length}</span>
          </div>
        </a>
      </li>
      <a id="post-${post.id}" class="modal" href="#close">
        <div>
          <img src="${post.image}" alt="${post.description}" width="500" />
        </div>
      </a>`
    ).join('');
}

export default function renderUserPosts(data, element) {
  const markup = createMarkupPosts(data);
  element.innerHTML = markup;

  return data;
}
