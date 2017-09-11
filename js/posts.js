import createMarkupComments from './comments.js';

function createMarkupPosts(posts) {

  let postList = posts.map(post => {
    return `<li class="post">
        <label for="post-${post.id}">
          <img src="${post.image}" alt="${post.description}" width="100%" />
          <div>
            <span class="likes"><i class="fa fa-heart" aria-hidden="true"></i> ${post.likes.length}</span>
            <span class="comments"><i class="fa fa-comment" aria-hidden="true"></i> ${post.comments.length}</span>
          </div>
        </label>
      </li>
      <input class="modal-state" id="post-${post.id}" type="checkbox" />
      <div class="modal">
        <label class="modal__bg" for="post-${post.id}"></label>
        <label class="modal__close" for="post-${post.id}"></label>
        <div class="post-details">
          <img src="${post.image}" alt="${post.description}" width="650" />
          <div>
            <p>${post.description}</p>
            <ul class="comments">${createMarkupComments(post.comments)}</ul>
          </div>
        </div>
      </div>`
    }).join('');

    return postList;
}

export default function renderUserPosts(data, element) {
  const markup = createMarkupPosts(data);
  element.innerHTML = markup;

  renderUserInfo(data, user);

  return data;
}
