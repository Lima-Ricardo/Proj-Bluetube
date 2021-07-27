import React, {userState, useRef} from "react";
import './Player.css';


function usePlayerState() {
  const [playerState, setPlayerState] = userState({
    playing: false,
    percentage: 0,
  });
    

   useEffect (() =>{
    playerState.playing ? $videoPlayer.current.play() : $videoPlayer.current.pause();

   }, [
     $videoPlayer,
    playerState.playing
   ]);


   console.log($videoPlayer);
    
   
   function toggleVideoPlay() {

      setPlayerState({
        ...playerState,
        playing:  !playerState.playing,
      })
    }
    
    function handleTimeUpdate() {
      const currentPercentage = ($videoPlayer.current.currentTime / $videoPlayer.current.duration) * 100;
      console.log('Upadate funcionou', $videoPlayer.current.currentTime);
      
      
      
      setPlayerState({
        ...playerState,
        percentage:  currentPercentage,
      })
    }

    function handChangeVideoPercentage(event) {
      const currentPercentageValue = event.target.value;
      $videoPlayer.current.currentTime = $videoPlayer.current.duration / 100 *
      
      setPlayerState({
        ...playerState,
        percentage:  currentPercentageValue,
      })
    
    }


    return {
      playerState,
      toggleVideoPlay,
      handleTimeUpdate,
      handleChangeVideoPorcentage
    }

}





//const videoUrl=
const videoUrl = "http://localhost:3000/video-exemplo.mp4";

export default function Player() {
  const $videoPlayer = useRef(null);
 
  const {
    playerState,
    toggleVideoPlay,
    handleTimeUpdate,
    handleChangeVideoPorcentage
  } = usePlayerState();

  console.log($videoPlayer);
  
  return (
    <div className="videoWrapper">
      
      <video 
        ref={$videoPlayer}
        src={videoURL}
        poster = "https://img.youtube.com/vi/5mz0CxSWrrc/maxresdefault.jpg">
        onTimeUpdat={handleTimeUpdate}
      </video>
      
      <div className="controls">
        
        <button onClick={toggleVideoPlay}> 
        {playerState.playing ? "Pause" : "Play"}
        </button>
        <input
          type="range"
          min="0"
          max ="100"
          onChange={handleChangeVideoPorcentage}
          value={playerState.percentage}
        />
        <select>
          {[1,2,3].map(speed =>(
           <option
            key={` speedChange_${Speed}`}
          >
            {speed}
          </option>

          ))};
        </select>
    
    
    </div>
  );




}