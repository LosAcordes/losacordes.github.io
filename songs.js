const songs = [
  {
    name: "Nombre de la Canción",
    artist: "El Solista",
    bpm: "120",
    key: "Do Mayor",
    chords: "C - G - [Estrofa] - Am - F - C - G - [Estribillo x2] - C - F",
    lyrics: `Esta es la primera línea de la letra.
Y esta es la segunda línea.`,
    hasAudio: true
  },
  {
    name: "Otra Canción Sin Letra",
    bpm: "90",
    key: "Sol Menor",
    chords: "Gm - D7 - Gm - Cm - Gm - D7 - [Solo] - Gm",
    // lyrics property is omitted
    hasAudio: true
  },
  {
    name: "Canción Sin Audio",
    key: "La Menor",
    chords: "Am - G - C - F",
    lyrics: "Una canción simple sin archivo de audio.",
    hasAudio: false // or you can just omit this line
  },
  {
    name: "Tobogàn",
    artist: "Zoo",
    key: "La Menor",
    bpm: "120",
    chords: `
Dm - F - C - Bb
    
[Pont]
Am - C - G - F [x4]
    
[Welcome my friends]
F - C - Em - F`,
    lyrics: `
Dins el país una illa,
dins eixa illa, al final,
una urbanització cara,
un paradís amagat.
Dins el paradís set cases
pengen d'un penya-segat,
7 propietats exclusives,
""que bo (que) és Rafa Nadal"".
Dins el palau quatre cotxes,
3 motos, bicis, i un quad;
un casupet per al servici
que viu allà netejant.
Dins el jardí una piscina,
una piscina gegant,
d'aigua salada i jacuzzi,
però ningú ho ha notat que....
Un tobogan, li falta un tobogan,
que vaja algú i li'l pose, que està passant-ho mal!
Un tobogan, li falta un tobogan
al pobre home, diners no donen la felicitat!!
Qui no voldria un tobogan? Qui no té un capritxet a sa casa?
Als pobres tot vos sembla mal. Potser no vas fer mèrits, res passa per atzar.
Ell s'ho va haver de currar, ell és bo, té talent i té traça.
Llepem-li el cul els morts de fam, que déu salve a la reina, sigam-li tots lleials!!
Welcome my friends,
colonitzats vos saluden,
comunistes manipulen (indepenazis no ajuden)
hem millorat en l'anglés!!!!
Todos muy bien (yes very well!!),
borratxo com una cuba,
la merda se'ns acumula,
ja ho netejarem després!!`,
hasAudio: true
  },
  
  // Add more songs here
];
