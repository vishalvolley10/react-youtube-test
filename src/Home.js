import React from 'react';
import YouTube from 'react-youtube';

class home extends React.Component {
    componentDidUpdate = () => {
        var tag = document.createElement('script');
        tag.id = 'iframe-demo';
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);        
    }

    // var player
    // var playButton = document.getElementById("play-button");
    // playButton.addEventListener("click", function () {
    //     player.playVideo();
    // });
    //}
    player;
    onYouTubePlayerAPIReady = () => {
         this.player = new YouTube.Player('video');
    }
    
    onPlayerReady = () => {
       
    }
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        return (
          
                <div>
                      <div class="video-block">
            <div class="testclass"></div>
            <div class="vid">
                <YouTube
                    videoId="2g811Eo7K8U"
                    opts={opts}
                    autoplay="1"
                    onPause={() => this.onPlayerReady()}  
                />
                </div>
                </div>
                </div>

           
        );
    }
}
// position: absolute;
// top: 0;
// left: 0;
// z-index: 999;
// background: rgba(0,0,0,.5);
// width: 100%;
// height: 80%;
// position: absolute;

export default home;