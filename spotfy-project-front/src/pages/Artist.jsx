import "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import {artistArray} from '../assets/database/artists'
import {songsArray} from '../assets/database/songs'


function Artist() {
  const { id } = useParams();

  const {name, banner} = artistArray.filter((currentArtist) => currentArtist._id === id)[0];

  const songsList = songsArray.filter((song) => song.artist === name);

  const randonIndex = Math.floor(Math.random() * (songsList.length -1));
  const randonIdFromArtist = songsList[randonIndex]._id;

  return (
    <div className="artist">
      <div className="artist__header" style={{backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`}}>
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList songsArray={songsList} />
      </div>
      <Link to={`/song/${randonIdFromArtist}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
}

export default Artist;
