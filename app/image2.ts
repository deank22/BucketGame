import greenbucketUrl from './assets/greenbucket.png';
let assetDiv : HTMLDivElement = document.querySelector('#assets');

assetDiv.style.display='none';

export let greenbucketImage = document.createElement('img');
greenbucketImage.src = greenbucketUrl;
assetDiv.appendChild(greenbucketImage);