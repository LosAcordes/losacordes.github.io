from pathlib import Path
import unicodedata
def remove_accents(string): return "".join(c for c in unicodedata.normalize("NFD", string) if not unicodedata.combining(c)) 

def crear_archivo(titulo, artista, escala, bpm, inicio_acordes, fin_acordes):
    acordes = ''.join(lineas[inicio_acordes+1:fin_acordes])[:-1]
    letra = ''.join(lineas[fin_acordes+2:-1])[:-1]
    nombre_archivo = archivo.name[:-3]

    if nombre_archivo in pdfs:
        titulo_link = f"<a href='../song-data/{nombre_archivo}.pdf'>{titulo} 📄</a>"
    else: titulo_link = titulo

    rellenado = plantilla.format(
        titulo=titulo,
        titulo_link=titulo_link,
        artista=artista,
        escala=escala,
        bpm=bpm,
        audio=nombre_archivo,
        acordes=acordes,
        letra=letra)
    with open("../songs/"+nombre_archivo+".html", "w", encoding="utf-8") as f: f.write(rellenado)
    print("{"+f" title: \"{titulo}<span class='soft'><br/>{artista}<br/></span>\", link: \"{nombre_archivo}.html\" "+"},")


with open("song-template.html", "r", encoding="utf-8") as f: plantilla = f.read()

pdfs = []
for archivo in Path("../song-data/").iterdir():
    if archivo.is_file() and archivo.name[-4:] == ".pdf":
        pdfs.append(archivo.name[:-4])

for archivo in Path("../song-data/").iterdir():
    if archivo.is_file() and archivo.name[-3:] == ".md":
        with archivo.open("r", encoding="utf-8") as f: lineas = f.readlines()

        titulo= lineas[0][2:-1]
        artista = lineas[1][2:-1]
        escala = lineas[2][2:-1]
        bpm = lineas[3][2:-1]
        inicio_acordes = 5

        for posicion, linea in enumerate(lineas[inicio_acordes+1:]):
            if linea[0:3] == "```":
                fin_acordes = posicion+6
                break
        crear_archivo(titulo, artista, escala, bpm, inicio_acordes, fin_acordes)
