with open("song-template.html", "r", encoding="utf-8") as f: plantilla = f.read()
with open("songs.md", "r", encoding="utf-8") as f: lineas = f.readlines()

# Abrir y leer archivo
# Hacer un bucle infinito
# Buscar # (nueva cancion)
#
# Entrar en un bucle de cancion.
# Guardar Titulo
# Guardar Artista, Escala y BPM
# Guardar Acordes
# Guardar Letra

lineatitulo = None
for posicion, linea in enumerate(lineas):
    if linea[0] == '#':
        titulo = linea[2:-1]
        lineatitulo = posicion
        print(titulo, lineatitulo)

titulo = 'Al Mar!'
artista = 'Artista aqui'
escala = 'Dm'
bpm = '150 BPM'

acordes = """Dm - C - G - A
Dm - A - G - %"""

letra ="""lalalala lala al
la la la la la
mas letra por aqui eyc eyc
y acaba aqui"""

plantilla = plantilla.format(
    titulo=titulo,
    artista=artista,
    escala=escala,
    bpm=bpm,
    audio=titulo.replace(" ", "_"),
    acordes=acordes,
    letra=letra
)

# with open("web-generada.html", "w", encoding="utf-8") as f: f.write(plantilla)
