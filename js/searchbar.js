const links= document.getElementById("links");
const searchBar = document.getElementById("searchBar");
const canciones = [
{ title: "Al mar!<span class='soft'><br/>Manel<br/></span>", link: "Al_mar!.html" },
{ title: "back to friends<span class='soft'><br/>sombr<br/></span>", link: "back_to_friends.html" },
{ title: "Come Together<span class='soft'><br/>The Beatles<br/></span>", link: "Come_Together.html" },
{ title: "Corbelles<span class='soft'><br/>Zoo<br/></span>", link: "Corbelles.html" },
{ title: "Coti X Coti<span class='soft'><br/>The Tyets<br/></span>", link: "Coti_X_Coti.html" },
{ title: "Cul<span class='soft'><br/>Oques Grasses<br/></span>", link: "Cul.html" },
{ title: "Despacito<span class='soft'><br/>Luis Fonsi<br/></span>", link: "Despacito.html" },
{ title: "Don't Start Now<span class='soft'><br/>Dua Lipa<br/></span>", link: "Don't_Start_Now.html" },
{ title: "Esbarzers (Remix La Gossa Sorda)<span class='soft'><br/>Zoo<br/></span>", link: "Esbarzers_(Remix_La_Gossa_Sorda).html" },
{ title: "Fent voltes per Palma<span class='soft'><br/>Xanguito & Tomeu Penya<br/></span>", link: "Fent_voltes_per_Palma.html" },
{ title: "Killing in the Name<span class='soft'><br/>Rage Against the Machine<br/></span>", link: "Killing_in_the_Name.html" },
{ title: "LA PENÚLTIMA<span class='soft'><br/>La Fúmiga<br/></span>", link: "LA_PENULTIMA.html" },
{ title: "Mari Carmen<span class='soft'><br/>La Pegatina<br/></span>", link: "Mari_Carmen.html" },
{ title: "Seven Nation Army<span class='soft'><br/>The White Stripes<br/></span>", link: "Seven_Nation_Army.html" },
{ title: "Smells Like Teen Spirit<span class='soft'><br/>Nirvana<br/></span>", link: "Smells_Like_Teen_Spirit.html" },
{ title: "Sweet Child O' Mine<span class='soft'><br/>Guns N' Roses<br/></span>", link: "Sweet_Child_O'_Mine.html" },
{ title: "Sweet Home Alabama<span class='soft'><br/>Lynyrd Skynyrd<br/></span>", link: "Sweet_Home_Alabama.html" },
{ title: "Tobogàn<span class='soft'><br/>Zoo<br/></span>", link: "Tobogan.html" },
{ title: "Tusa<span class='soft'><br/>KAROL G & Nicki Minaj<br/></span>", link: "Tusa.html" },
{ title: "Zapatillas<span class='soft'><br/>El Canto del Loco<br/></span>", link: "Zapatillas.html" },
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
