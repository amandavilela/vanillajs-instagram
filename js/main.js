import renderUserInfo from './user.js';
import renderUserPosts from './posts.js';

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

renderUserInfo(data, user);
renderUserPosts(data.posts, listPosts);
