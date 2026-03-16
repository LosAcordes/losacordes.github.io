const links= document.getElementById("links");
const searchBar = document.getElementById("searchBar");
const canciones = [
  { title: "Tobogàn - Zoo", link: "Tobogan.html" },
  { title: "Corbelles - Zoo", link: "Corbelles.html" },
  { title: "Esbarzers (Remix La Gossa Sorda) - Zoo", link: "Esbarzers_(Remix_La_Gossa_Sorda).html" },
  { title: "Al mar! - Manel", link: "Al_mar!.html" },
  { title: "Killing in the Name - Rage Against the Machine", link: "Killing_in_the_Name.html" },
  { title: "Zapatillas - El Canto del Loco", link: "Zapatillas.html" },
  { title: "Mari Carmen - La Pegatina", link: "Mari_Carmen.html" },
  { title: "Sweet Child O' Mine - Guns N' Roses", link: "Sweet_Child_O'_Mine.html" },
  { title: "Sweet Home Alabama - Lynyrd Skynyrd", link: "Sweet_Home_Alabama.html" },
  { title: "Come Together - The Beatles", link: "Come_Together.html" },
  { title: "Despacito - Luis Fonsi", link: "Despacito.html" },
  { title: "Tusa - KAROL G & Nicki Minaj", link: "Tusa.html" },
  { title: "Seven Nation Army - The White Stripes", link: "Seven_Nation_Army.html" },
  { title: "Coti X Coti - The Tyets", link: "Coti_X_Coti.html" },
  { title: "Cul - Oques Grasses", link: "Cul.html" },
  { title: "Fent voltes per Palma - Xanguito & Tomeu Penya", link: "Fent_voltes_per_Palma.html" },
  { title: "LA PENÚLTIMA - La Fúmiga", link: "LA_PENULTIMA.html" },
  { title: "Smells Like Teen Spirit - Nirvana", link: "Smells_Like_Teen_Spirit.html" },
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
