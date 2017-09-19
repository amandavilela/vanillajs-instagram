import renderUserInfo from './user.js';
import renderUserPosts from './posts.js';
import http from './http.js';

const user = document.getElementById('user');
const listPosts = document.getElementById('list-posts');

async function getData() {
  return await http('http://www.mocky.io/v2/59bb3b940f0000c007622abb', 'GET');
}

getData().then(function(data){
    data = JSON.parse(data);
    renderUserInfo(data, user);
    renderUserPosts(data.posts, listPosts);
  })
  .catch(function(err){
    console.log('err: ', err);
  });
