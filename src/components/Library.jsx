import React from "react";
import { LibrarySong } from "./LibrarySong";

export const Library = ({
  songs,
  navbar,
  currentSong,
  setCurrentSong,
  playedAudio,
  isPlaying,
  setSong,
}) => {
  return (
    <div className={`library ` + navbar}>
      <div className="library_header">library</div>
      <div className="song-item-contanier">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setSong={setSong}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            song={song}
            key={song.id}
            id={song.id}
            playedAudio={playedAudio}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};
