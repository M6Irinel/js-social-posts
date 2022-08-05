const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


const $ = document.querySelector.bind(document);

const DOM_post = $('.posts');
const DOM_array = $('.array');
const DOM_data = $('.data');

function createElement_DOM({ id, content, media, author, likes, created }) {
    return `
    <li class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${author.image}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${author.name}</div>
                    <div class="post-meta__time">4 mesi fa</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${content}</div>
        <div class="post__image">
            <img src="${media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <button class="like-button  js-like-button" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </button>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                </div>
            </div> 
        </div>
    </li>
    `;
}

posts.forEach(e => {
    DOM_post.innerHTML += createElement_DOM(e);
});

const DOM_like_button = document.querySelectorAll('.likes');

const arrayDeiLike = [];
const divs = [];

DOM_like_button.forEach((e, i) => {

    const DOM_button_like = e.querySelector('.like-button');
    const DOM_js_likes_counter = e.querySelector('.js-likes-counter');

    const nameIdLike = 'like post id ' + (i + 1);
    arrayDeiLike.push({ [nameIdLike]: false });

    const div = document.createElement('div');
    divs.push(div);
    DOM_array.append(div);

    DOM_button_like.addEventListener('click', () => {

        DOM_button_like.classList.toggle('like');

        const defaultLike = parseInt(DOM_js_likes_counter.innerHTML);

        if (DOM_button_like.className === 'like-button js-like-button like') {
            DOM_js_likes_counter.innerHTML = defaultLike + 1;
            arrayDeiLike[i][nameIdLike] = true;
            divs[i].innerHTML = `Hai messo <span>mi piace</span> al post <span>${posts[i].id}</span>`;
        } else {
            DOM_js_likes_counter.innerHTML = defaultLike - 1;
            arrayDeiLike[i][nameIdLike] = false;
            divs[i].innerHTML = '';
        }
    });
});

const DOM_post_meta__icon = document.querySelectorAll('.post-meta__icon');

DOM_post_meta__icon.forEach((e, i) => {

    if (posts[i].author.image === null) {
        let c = '';
        posts[i].author.name.split(' ').forEach(h => {
            c += h.charAt().toUpperCase();
        });
        e.innerHTML = `<div class="letter_Upper_Case">${c}</div>`;
    }

    const [years, month, day] = posts[i].created.split('-');
    const div = document.createElement('div');
    div.innerHTML = `Data in formato <span>IT: ${day}-${month}-${years}</span> del post <span>${posts[i].id}</span>`;
    DOM_data.append(div);

});

