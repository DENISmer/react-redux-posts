const domain = `https://jsonplaceholder.typicode.com/`;

export const MAIN_URLS = {
    GET_USERS : `${domain}users`,
    GET_POSTS : `${domain}posts`,
    GET_ALBUMS : `${domain}albums`,
    GET_PHOTOS : `${domain}photos`,
}
export const SINGLE_URLS = {
    GET_USER : `${domain}users/`, //...users/{number}
    GET_POST : `${domain}posts/`, //...posts/{number}
    GET_ALBUM : `${domain}albums/`, //...albums/{number}
    GET_PHOTO : `${domain}photos/`, //...photos/{number}
}

export const URL_BY_INFO = {
    GET_POSTS_BY_USER : `${domain}posts?userId=`, //={number}
    GET_ALBUMS_BY_USER : `${domain}albums?userId=`,
    GET_PHOTOS_BY_ALBUM : `${domain}photos?albumId=`,
    GET_COMMENTS_BY_POST : `${domain}comments?postId=`,
}
