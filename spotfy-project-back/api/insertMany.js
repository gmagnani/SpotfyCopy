import { artistArray } from "../database/artists.js";
import { songsArray } from "../database/songs.js";
import { db } from "./connect.js";

const newArtists = artistArray.map((artist) => {
  const newArtist = { ...artist };
  delete newArtist.id;
  return newArtist;
});

const newSongs = songsArray.map((song) => {
  const newSong = { ...song };
  delete newSong.id;
  return newSong;
});

const responseSongs = await db.collection("songs").insertMany(newSongs);
const responseArtists = await db.collection("artists").insertMany(newArtists);

console.log(responseSongs);
console.log(responseArtists);
