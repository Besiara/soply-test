let xhr = new XMLHttpRequest();
xhr.open("GET", 'profiles.json', false);
xhr.send();

let httpRequest = new XMLHttpRequest();
httpRequest.open("GET", 'http://api.icndb.com/jokes', false);
httpRequest.send();

export const CREATIVES = JSON.parse(xhr.responseText);
export const POSTS = JSON.parse(httpRequest.responseText);
export const APP_CONTAINER_ID = 'app';