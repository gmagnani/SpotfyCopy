import "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

// eslint-disable-next-line react/prop-types
function Main({ type }) {
  return (
    <div className="main">
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas Populares"
          items={10}
          itemsArray={artistArray}
          path="/artists"
          idPath="artist"
        />
      ) : (
        <></>
      )}

      {type === "songs" || type === undefined ? <ItemList
        title="Musicas Populares"
        items={20}
        itemsArray={songsArray}
        path="/songs"
        idPath="song"
      /> : <></>}
      
    </div>
  );
}

export default Main;
