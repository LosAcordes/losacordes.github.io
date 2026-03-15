const links= document.getElementById("links");
const searchBar = document.getElementById("searchBar");
const canciones = [
  { title: "Al mar! - Manel", link: "Al_mar!.html" },
  { title: "Come Together - The Beatles", link: "Come_Together.html" },
  { title: "Corbelles - Zoo", link: "Corbelles.html" },
];

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
              <a href="songs/${song.link}">${song.title}</a>
              <br>
            `;
    })
    .join(""); // remove commas

  links.innerHTML = htmlString; // inject HTML string into the <ul>
};

displaySongs(canciones);
