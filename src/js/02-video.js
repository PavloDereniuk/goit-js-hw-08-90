import Player from '@vimeo/player';
import throttle from 'lodash.throttle'


const getTime = function(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

   
player.on('timeupdate', throttle(getTime, 1000));
    
let currantTime = localStorage.getItem('videoplayer-current-time') || 0;
   
player.setCurrentTime(currantTime);
