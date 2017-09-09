/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posts_js__ = __webpack_require__(2);



const data = {
  "user" : "_amanda_vilela",
  "name" : "Amanda Vilela",
  "bio" : "Descrição aqui",
  "image" : "https://instagram.fsod2-1.fna.fbcdn.net/t51.2885-19/s150x150/20582732_1949294061959056_158778442647601152_a.jpg",
  "posts" : [
    {
      "image": "https://instagram.fsod2-1.fna.fbcdn.net/t51.2885-15/e35/21434031_157722141475085_2323822816056573952_n.jpg",
      "description": "Descrição do post",
      "likes": [
        {
          "user": "bernardes.felipe"
        },
        {
          "user": "biadelmont"
        },
        {
          "user": "julliasaad"
        }
      ],
      "comments": [
        {
          "user": "bernardes.felipe",
          "comment": "+qd+"
        },
        {
          "user": "biadelmont",
          "comment": "muito bom"
        },
        {
          "user": "julliasaad",
          "comment": "legal"
        }
      ]
    },
    {
      "image": "https://instagram.fsod2-1.fna.fbcdn.net/t51.2885-15/e35/21434031_157722141475085_2323822816056573952_n.jpg",
      "description": "Descrição do post",
      "likes": [
        {
          "user": "bernardes.felipe"
        },
        {
          "user": "biadelmont"
        },
        {
          "user": "julliasaad"
        }
      ],
      "comments": [
        {
          "user": "bernardes.felipe",
          "comment": "+qd+"
        },
        {
          "user": "biadelmont",
          "comment": "muito bom"
        },
        {
          "user": "julliasaad",
          "comment": "legal"
        }
      ]
    },
    {
      "image": "https://instagram.fsod2-1.fna.fbcdn.net/t51.2885-15/e35/21434031_157722141475085_2323822816056573952_n.jpg",
      "description": "Descrição do post",
      "likes": [
        {
          "user": "bernardes.felipe"
        },
        {
          "user": "biadelmont"
        },
        {
          "user": "julliasaad"
        }
      ],
      "comments": [
        {
          "user": "bernardes.felipe",
          "comment": "+qd+"
        },
        {
          "user": "biadelmont",
          "comment": "muito bom"
        },
        {
          "user": "julliasaad",
          "comment": "legal"
        }
      ]
    }
  ],
  "followers": [
    {
      "user": "bernardes.felipe"
    },
    {
      "user": "biadelmont"
    },
    {
      "user": "julliasaad"
    }
  ],
  "following": [
    {
      "user": "bernardes.felipe"
    },
    {
      "user": "biadelmont"
    },
    {
      "user": "julliasaad"
    }
  ]
}

const user = document.getElementById('user');
const listPosts = document.getElementById('listPosts');

Object(__WEBPACK_IMPORTED_MODULE_0__user_js__["a" /* default */])(data, user);
Object(__WEBPACK_IMPORTED_MODULE_1__posts_js__["a" /* default */])(data.posts, listPosts);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderUserInfo;
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

function renderUserInfo(data, element) {
  const markup = createUserInfo(data);
  element.innerHTML = markup;

  return data;
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderUserPosts;
function createMarkupPosts(posts) {
  return posts.map(post => `
    <div class="post">
      <img src="${post.image}" alt="${post.description}" width="200" />
      <p class="likes">${post.likes.length}</p>
      <p class="comments">${post.comments.length}</p>
    </div>`).join('');
}

function renderUserPosts(data, element) {
  const markup = createMarkupPosts(data);
  element.innerHTML = markup;

  return data;
}


/***/ })
/******/ ]);