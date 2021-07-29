import React from 'react'  ;
import ReactPlayer from 'react-player';
import './App.css';


function Video() {
    return (

        <div className='App'>
            <ReactPlayer
                width='480px'
                heigth ='240px'
                controls
                url='https://youtu.be/Jcp_bkk22zM'
                onReady={() => console.log('onReady callback')}
                onStart={() => console.log('onStart callback')}
                onPause={() => console.log('onPause callback')}
                onEnded={() => console.log('onEnded callback')}
                onError={() => console.log('onError callback')}
            >
            </ReactPlayer>

        </div>



    );
}
export default Video;
