import React, { useRef } from "react";

export const LibrarySong = ({
  playedAudio,
  song,
  currentSong,
  setCurrentSong,
  isPlaying,
  setSong,
  id,
  songs,
}) => {
  const changeSongHandler = (e) => {
    setCurrentSong(song);
    if (isPlaying) {
      const playAudio = playedAudio.current.play();
      //? promise
      if (playAudio !== undefined) {
        playAudio.then(() => {
          playedAudio.current.play();
        });
      }
    }

    // console.log(id);
    // console.log(ClickSong.current.id);
    // if (currentSong.id == ClickSong.current.id) {
    //   ClickSong.current.classList.add("played-song");
    // } else {
    //   ClickSong.current.classList.remove("played-song");
    // }
  };
  return (
    <div
      onClick={changeSongHandler}
      className={`song_item ${song.active ? "played-song" : ""}`}
    >
      <img
        className="song_item_image"
        src={
          song.cover
            ? song.cover
            : process.env.PUBLIC_URL + "default_song_cover.png"
        }
        alt=""
      />
      <h3 className="song_item_title">{song.name}</h3>
    </div>
  );
};
