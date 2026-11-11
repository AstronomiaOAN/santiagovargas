#!/usr/bin/env python3
"""Actualiza investigacion.html con datos de Google Scholar.

Uso:  python3 .scholar/actualizar.py datos.json

datos.json (lo produce el script de extracción en el navegador, ver LEEME.md):
{
  "metricas": {"citas": 1811, "citas-2021": 712, "h": 24, "h-2021": 14,
               "i10": 34, "i10-2021": 20},
  "publicaciones": [
    {"titulo": "...", "autores": "...", "revista": "...", "anio": "2026",
     "citas": "3", "enlace": "https://scholar.google.com/..."}
  ]
}

Solo cambia las cifras marcadas con data-scholar, la fecha de revisión y la
lista entre los comentarios SCHOLAR-RECIENTES. El resto de la página no se toca.
"""
import datetime
import html
import json
import re
import sys

PAGINA = "investigacion.html"
CUANTAS = 10
MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
         "agosto", "septiembre", "octubre", "noviembre", "diciembre"]


def miles(n):
    return f"{int(n):,}".replace(",", ".")


def main(ruta):
    datos = json.load(open(ruta, encoding="utf-8"))
    s = open(PAGINA, encoding="utf-8").read()
    original = s

    m = datos["metricas"]
    for clave in ["citas", "citas-2021", "h", "h-2021", "i10", "i10-2021"]:
        valor = miles(m[clave])
        s, n = re.subn(rf'(data-scholar="{clave}">)[^<]*(<)', rf"\g<1>{valor}\g<2>", s)
        assert n == 1, f"marcador {clave} no encontrado"

    hoy = datetime.date.today()
    s, n = re.subn(r'(data-scholar="fecha">)[^<]*(<)',
                   rf"\g<1>{MESES[hoy.month - 1]} de {hoy.year}\g<2>", s)
    assert n == 1

    pubs = [p for p in datos["publicaciones"] if p.get("titulo")][:CUANTAS]
    assert len(pubs) >= 3, "muy pocas publicaciones: ¿se leyó bien la página?"
    filas = []
    for p in pubs:
        e = lambda k: html.escape((p.get(k) or "").strip())
        citas = (p.get("citas") or "").strip()
        etiqueta = f"{citas} cita" + ("" if citas == "1" else "s") if citas else ""
        titulo = f'<a href="{e("enlace")}" target="_blank" rel="noopener noreferrer">{e("titulo")}</a>' if p.get("enlace") else e("titulo")
        detalle = " · ".join(x for x in [e("autores"), e("revista")] if x)
        filas.append(
            f'<li><span class="pub-year">{e("anio") or "—"}</span>'
            f'<div><h3>{titulo}</h3><p>{detalle}</p></div>'
            f'<span class="pub-cites">{etiqueta}</span></li>')
    bloque = ("<!-- SCHOLAR-RECIENTES:INICIO -->\n<ol>\n" + "\n".join(filas) + "\n</ol>\n"
              f'<p class="small">Fuente: Google Scholar, ordenado por fecha de publicación. '
              f'Actualizado el {hoy.day} de {MESES[hoy.month - 1]} de {hoy.year}.</p>\n'
              "<!-- SCHOLAR-RECIENTES:FIN -->")
    s, n = re.subn(r"<!-- SCHOLAR-RECIENTES:INICIO -->.*?<!-- SCHOLAR-RECIENTES:FIN -->",
                   lambda _: bloque, s, flags=re.S)
    assert n == 1

    if s != original:
        open(PAGINA, "w", encoding="utf-8").write(s)
        print("investigacion.html actualizado")
    else:
        print("sin cambios")


if __name__ == "__main__":
    main(sys.argv[1])
