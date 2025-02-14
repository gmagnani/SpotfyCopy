/* eslint-disable react/prop-types */
import {useState} from "react";
import SongItem from "./SongItem";

function SongList({ songsArray }) {
    const [items, setItems] = useState(5);
  return (
    <div className="song-list">
      {songsArray.filter((currentValue, index) => index < items).map((currentSong, index) => (
        <SongItem key={index} index={index} {...currentSong} />
      ))}      

      <p className="song-list__see-more" onClick={() => {
        setItems(items + 5);
      }}>Ver mais</p>
    </div>
  );
}

export default SongList;
