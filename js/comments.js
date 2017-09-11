export default function createMarkupComments(comments) {
  return comments.map(comment =>
    `<li>
      <strong>${comment.user}</strong>
      <span>${comment.comment}</span>
    </li>`
    ).join('');
}
