import unicodedata
def remove_accents(string): return "".join(c for c in unicodedata.normalize("NFD", string) if not unicodedata.combining(c)) 

def crear_archivo(titulo, artista, escala, bpm, inicio_acordes, fin_acordes, posicion):
    acordes = ''.join(lineas[inicio_acordes+1:fin_acordes])[:-1]
    letra = ''.join(lineas[fin_acordes+2:posicion-1])[:-1]
    nombre_archivo = remove_accents(titulo).replace(' ', "_")

    rellenado = plantilla.format(
        titulo=titulo,
        artista=artista,
        escala=escala,
        bpm=bpm,
        audio=nombre_archivo,
        acordes=acordes,
        letra=letra)
    with open("../songs/"+nombre_archivo+".html", "w", encoding="utf-8") as f: f.write(rellenado)
    print("{"+f" title: \"{titulo} - {artista}\", link: \"{nombre_archivo}.html\" "+"},")

with open("song-template.html", "r", encoding="utf-8") as f: plantilla = f.read()
with open("songs.md", "r", encoding="utf-8") as f: lineas = f.readlines()

titulo, inicio_acordes, fin_acordes = None, None, None
for posicion, linea in enumerate(lineas):
    if linea[0] == '#':
        if titulo != None: crear_archivo(titulo, artista, escala, bpm, inicio_acordes, fin_acordes, posicion)
        titulo = linea[2:-1]
        artista = lineas[posicion+1][2:-1]
        escala = lineas[posicion+2][2:-1]
        bpm = lineas[posicion+3][2:-1]
    if linea[0:3] == '```':
        inicio_acordes = fin_acordes
        fin_acordes = posicion
else: crear_archivo(titulo, artista, escala, bpm, inicio_acordes, fin_acordes, posicion)

