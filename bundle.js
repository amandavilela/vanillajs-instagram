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
      "id": 1,
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
          "comment": "okie dokie"
        },
        {
          "user": "julliasaad",
          "comment": "legal"
        }
      ]
    },
    {
      "id": 2,
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
          "comment": "okie dokie"
        },
        {
          "user": "julliasaad",
          "comment": "legal"
        }
      ]
    },
    {
      "id": 3,
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
          "comment": "okie dokie"
        },
        {
          "user": "julliasaad",
          "comment": "legal"
        }
      ]
    },
    {
      "id": 4,
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
          "comment": "okie dokie"
        },
        {
          "user": "julliasaad",
          "comment": "legal"
        }
      ]
    },
    {
      "id": 5,
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
          "comment": "okie dokie"
        },
        {
          "user": "julliasaad",
          "comment": "legal"
        }
      ]
    },
    {
      "id": 6,
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
          "comment": "okie dokie"
        },
        {
          "user": "julliasaad",
          "comment": "legal"
        }
      ]
    },
    {
      "id": 7,
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
          "comment": "okie dokie"
        },
        {
          "user": "julliasaad",
          "comment": "legal"
        }
      ]
    },
    {
      "id": 8,
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
          "comment": "okie dokie"
        },
        {
          "user": "julliasaad",
          "comment": "legal"
        }
      ]
    },
    {
      "id": 9,
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
          "comment": "okie dokie"
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
const listPosts = document.getElementById('list-posts');

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comments_js__ = __webpack_require__(3);


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
            <ul class="comments">${Object(__WEBPACK_IMPORTED_MODULE_0__comments_js__["a" /* default */])(post.comments)}</ul>
          </div>
        </div>
      </div>`
    }).join('');

    return postList;
}

function renderUserPosts(data, element) {
  const markup = createMarkupPosts(data);
  element.innerHTML = markup;

  renderUserInfo(data, user);

  return data;
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createMarkupComments;
function createMarkupComments(comments) {
  return comments.map(comment =>
    `<li>
      <strong>${comment.user}</strong>
      <span>${comment.comment}</span>
    </li>`
    ).join('');
}


/***/ })
/******/ ]);