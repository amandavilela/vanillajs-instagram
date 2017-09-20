import renderUserInfo from "./user.js";
import renderUserPosts from "./posts.js";

const user = document.getElementById("user");
const listPosts = document.getElementById("list-posts");

async function getData(url) {
  try {
    const response = await fetch(url);
    response.json().then(function(data){
      renderUserInfo(data, user);
      renderUserPosts(data.posts, listPosts);
    });
  }
  catch (err) {
    console.log("fetch failed", err);
  }
}

getData("http://www.mocky.io/v2/59bb3b940f0000c007622abb");
