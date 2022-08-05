
const posts = [
    createObject_for_post(
        1,
        "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iustAd ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "https://unsplash.it/600/300?image=171",
        "Phil Mangione",
        "https://unsplash.it/300/300?image=15",
        80,
        "2021-06-25"
        ),

    createObject_for_post(
        2,
        "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "https://unsplash.it/600/400?image=112",
        "Sofia Perlari",
        "https://unsplash.it/300/300?image=10",
        120,
        "2021-09-03"
        ),

    createObject_for_post(
        3,
        "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "https://unsplash.it/600/400?image=234",
        "Chiara Passaro",
        "https://unsplash.it/300/300?image=20",
        78,
        "2021-05-15"
        ),

    createObject_for_post(
        4,
        "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "https://unsplash.it/600/400?image=24",
        "Luca Formicola",
        null,
        56,
        "2021-04-03"
        ),

    createObject_for_post(
        5,
        "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "https://unsplash.it/600/400?image=534",
        "Alessandro Sainato",
        "https://unsplash.it/300/300?image=29",
        95,
        "2021-03-05"
        )
];

function createObject_for_post(id, content, media, name, image, likes, created) {
    return { id, content, media, author: {name,image}, likes, created };
};

console.log(posts);