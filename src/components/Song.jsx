import React from "react";

export const Song = ({ currentSong }) => {
  return (
    <div className="song">
      <div className="song_image ">
        <img
          src={
            currentSong.cover
              ? currentSong.cover
              : process.env.PUBLIC_URL + "default_song_cover.png"
          }
          alt=""
        />
      </div>
      <p className="song_title">{currentSong.name}</p>
    </div>
  );
};
