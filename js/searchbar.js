const links= document.getElementById("links");
const searchBar = document.getElementById("searchBar");
import { canciones } from './canciones.js';

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredSongs = canciones.filter((song) => {
    return song.title.toLowerCase().includes(searchString);
  });
  displaySongs(filteredSongs);
});

const displaySongs = (songs) => {
  const htmlString = songs
    .map((song) => {
      return `
              <li>
                <a href="songs/${song.link}">${song.title}</a>
              </li>
            `;
    })
    .join(""); // remove commas

  links.innerHTML = htmlString; // inject HTML string into the <ul>
};

displaySongs(canciones);
