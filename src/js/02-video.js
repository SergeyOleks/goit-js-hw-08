import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', throttle(function(timeupdate) {     
        localStorage.setItem(KEY,timeupdate.seconds),1000;        
    }));

    player.setCurrentTime(Number(localStorage.getItem(KEY)));

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
