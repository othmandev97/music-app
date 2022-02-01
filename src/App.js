import React, { useState, useRef } from "react";
import { Song } from "./components/Song";
import { Player } from "./components/Player";
import { Library } from "./components/Library";

import "./styles/app.scss";
import data from "./data";

function App() {
  //ref
  const playedAudio = useRef(null);
  //state
  const [songs, setSong] = useState(data);
  const [navbar, setNavbar] = useState("closed-sidar");
  const [nextSong, setNextSong] = useState(0);
  const [backSong, setBackSong] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[nextSong]);
  const [isPlaying, setIsPlaying] = useState(false);

  const [songInfo, setsongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const showSideBarHandler = () => {
    if (navbar == "closed-sidar") {
      setNavbar("");
    } else {
      setNavbar("closed-sidar");
    }
  };

  const onTimeUpdateHandler = (e) => {
    setsongInfo({
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    });
  };

  const changeVolume = (e) => {
    playedAudio.current.volume = e.target.value / 100;
  };

  return (
    <div className="App">
      <button
        onClick={showSideBarHandler}
        className="nav-btn"
        aria-label="navbar-dots"
      >
        <svg
          height="15"
          viewBox="0 0 184 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="white" />
          <circle cx="159" cy="25" r="25" fill="white" />
          <circle cx="92" cy="25" r="25" fill="white" />
        </svg>
      </button>
      <Library
        playedAudio={playedAudio}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        navbar={navbar}
        songs={songs}
        isPlaying={isPlaying}
        setSong={setSong}
      />
      <Song currentSong={currentSong} />

      <Player
        setSong={setSong}
        songs={songs}
        songInfo={songInfo}
        setsongInfo={setsongInfo}
        playedAudio={playedAudio}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        changeVolume={changeVolume}
      />
      <audio
        onTimeUpdate={onTimeUpdateHandler}
        onLoadedMetadata={onTimeUpdateHandler}
        ref={playedAudio}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
