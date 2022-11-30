import React from "react";
import ReactDOM from 'react-dom';
const fs = require("fs");
const SpotifyWebApi = require("spotify-web-api-node");

//TODO - Find a way to automatically pull and regenerate this token from getToken.js
const token = fs.readFileSync("token.txt");
const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

//Takes authenticated user and spits out JSON file of saved albums and links to their album art.
async function jsonifyUserSavedAlbums() {
  //Use API call to get info on all of a user's saved albums
  const data = await spotifyApi.getMySavedAlbums();

  //Starts of a json file
  let output = "[";

  for (let album of data.body.items) {
    //Create a struct for each album that contains its name and its album art url (VERY EASILY EXPANDABLE IF NEW INFO IS NEEDED)
    let album_info = {
      name: album.album.name,
      image_url: album.album.images[0].url,
      artist_name: album.album.artists[0].name,
    };

    //Appends the prior info to the string that will be spit into the json file, with comma for item seperation
    output += JSON.stringify(album_info, null, 2);
    output += ",";
  }

  //Weird string manip that ensures the file ends in a ']' and that the final comma is removed
  output = output.slice(0, -1) + "]";

  //Put all this info into Data.json
  fs.writeFileSync("Data.json", output);
}

jsonifyUserSavedAlbums();

/////////////////////////////////////////////////////////////////

//Get's authenticated user's data (TESTING PURPOSES ONLY)
function getMyData() {
  (async () => {
    const me = await spotifyApi.getMe();
    console.log(me.body);
    getUserPlaylists(me.body.id);
  })().catch((e) => {
    console.error(e);
  });
}

//Get authenticated user's saved albums (TESTING PURPOSES ONLY)
async function getUserSavedAlbums() {
  const data = await spotifyApi.getMySavedAlbums();
  console.log("----------------------------");
  let albums = [];

  for (let album of data.body.items) {
    console.log(album.album.name);
    console.log(album.album.images[0].url);
  }
}

//Get's authenticated user's playlists (TESTING PURPOSES ONLY)
async function getUserPlaylists(userName) {
  const data = await spotifyApi.getUserPlaylists(userName);

  console.log("----------------------------------");
  let playlists = [];

  for (let playlist of data.body.items) {
    console.log(playlist.name + " " + playlist.id);

    let tracks = await getPlaylistTracks(playlist.id, playlist.name);
    //console.log(tracks)

    /* const tracksJSON = { tracks }
        let data = JSON.stringify(tracksJSON)
        fs.writeFileSync(playlist.id+'.json', data) */
  }
}

//Gets tracks from a playlist (TESTING PURPOSES ONLY)
async function getPlaylistTracks(playlistID, playlistName) {
  const data = await spotifyApi.getPlaylistTracks(playlistID, {
    offset: 0,
    limit: 100,
    fields: "items",
  });

  console.log("The playlist contains these tracks");

  let tracks = [];

  for (let track_obj of data.body.items) {
    const track = track_obj.track;
    tracks.push(track);
    console.log(track.name + " : " + track.artists[0].name);
  }

  console.log("---------------------");
  return tracks;
}
