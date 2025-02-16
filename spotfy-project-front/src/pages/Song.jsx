import  'react'
import Player from '../components/Player'
import { Link, useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'

function Song() {
  const { id } = useParams();

  const {image,name,artist, duration, audio} = songsArray.filter((currentSong) => currentSong._id === id)[0];
  
  const artistObj = artistArray.filter((currentArtistObj) => currentArtistObj.name === artist)[0];

  const songsList = songsArray.filter((song) => song.artist === artist);

  const randonIndex = Math.floor(Math.random() * (songsList.length -1));
  const randonIdFromArtist = songsList[randonIndex]._id; 
  const randonIndex2 = Math.floor(Math.random() * (songsList.length -1));
  const randonIdFromArtist2 = songsList[randonIndex2]._id;
  return (
    <div className='song'>
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className='song__artist-image'>
          <img width={75} height={75} src={artistObj.image} alt={`Imagem do artista ${artistObj.name}`} />
        </Link>
        <Player duration={duration} audio={audio} randomId={randonIdFromArtist} randomId2={randonIdFromArtist2} />
        <div>
          <p className='song__name'>{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  )
}

export default Song