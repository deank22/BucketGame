import goldcoinUrl from './assets/goldcoin.png';
let assetDiv : HTMLDivElement =document.querySelector('#assets');

assetDiv.style.display='none';

export let goldcoinImage = document.createElement('img');
goldcoinImage.src = goldcoinUrl;
assetDiv.appendChild(goldcoinImage); 

