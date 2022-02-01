import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faChevronLeft,
  faChevronRight,
  faPause,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

export const Player = ({
  playedAudio,
  currentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setsongInfo,
  songs,
  setCurrentSong,
  setSong,
  changeVolume,
}) => {
  // const playedAudio = useRef(null);
  const IconPlayPause = useRef(null);
  const aud = useRef(null);
  const [visibleVolume, setvisibleVolume] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      // playSongHandler();
      //! make the song play auto when it ends
    });
    // aud.current.onended = () => {
    //   alert("ended");
    // };

    // console.log(currentSong);
    // if (isPlaying) {
    //   if (songInfo.duration == songInfo.currentTime) {
    //     console.log("salat");
    //   }
    // }

    // if (songInfo.duration === songInfo.currentTime) {
    //   console.log("salat");
    // }

    //add active state
    const newSong = songs.map((song) => {
      // console.log(song.id);
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSong(newSong);
  }, [currentSong]);

  const playSongHandler = () => {
    if (isPlaying) {
      playedAudio.current.pause();
      setIsPlaying(false);
    } else {
      playedAudio.current.play();
      setIsPlaying(true);
    }
  };

  const dragHandler = (e) => {
    playedAudio.current.currentTime = e.target.value;
    setsongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const formatTime = (time) => {
    return (
      // Math.floor(time / 60) + ":" + (time < 10 ? "0" : "") + Math.floor(time % 60)
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).substr(-2)
    );
  };

  const skipHandler = (type) => {
    let indexOfSong = songs.findIndex((song) => song.id === currentSong.id);

    if (type === "next") {
      setCurrentSong(songs[(indexOfSong + 1) % songs.length]);
    } else {
      if (indexOfSong == 1) {
        setCurrentSong(songs[0]);
      }
      if (indexOfSong > 1) {
        setCurrentSong(songs[(indexOfSong - 1) % (songs.length - 1)]);
      }
    }

    if (isPlaying) {
      const playAudio = playedAudio.current.play();
      //? promise
      if (playAudio !== undefined) {
        playAudio.then(() => {
          playedAudio.current.play();
        });
      }

      // if (songInfo.duration === songInfo.currentTime) {
      //   skipHandler("skip");
      // }
    }
  };

  const showVolumeHandler = () => {
    if (visibleVolume === "") {
      setvisibleVolume("make_volume_visible");
    } else {
      setvisibleVolume("");
    }
  };

  return (
    <div className="player">
      <div className="player_info">
        <label htmlFor="range"></label>
        <p>{formatTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
          onChange={dragHandler}
          name="range"
          id="range"
          className="inputSong"
          ref={aud}
        />
        <p>{formatTime(songInfo.duration)}</p>
        {/* <div className="player_volume">
          <FontAwesomeIcon
            icon={faVolumeUp}
            onClick={showVolumeHandler}
          ></FontAwesomeIcon>
          <input
            onChange={changeVolume}
            type="range"
            defaultValue="100"
            className={`progressBarvolume bar volume ${visibleVolume}`}
          />
        </div> */}
      </div>
      <div className="player_control">
        <div className="player_control_back">
          <FontAwesomeIcon
            onClick={() => skipHandler("back")}
            icon={faChevronLeft}
            size="2x"
          />
        </div>
        <div className="player_control_play" ref={IconPlayPause}>
          <FontAwesomeIcon
            onClick={playSongHandler}
            icon={isPlaying ? faPause : faPlay}
            size="2x"
          />
        </div>
        <div className="player_control_next">
          <FontAwesomeIcon
            onClick={() => skipHandler("next")}
            icon={faChevronRight}
            size="2x"
          />
        </div>
      </div>
    </div>
  );
};
