# Santiago Vargas Domínguez · Web personal · Versión 4

Sitio estático en español para GitHub Pages. Diseño propio inspirado en una presentación editorial de la trayectoria académica, la investigación y la divulgación. No requiere instalar dependencias. Para verlo localmente, abre `index.html` en un navegador.

## Publicación en GitHub Pages

1. Descomprime el ZIP.
2. Sube el contenido de la carpeta `web-santiago` al repositorio elegido. `index.html` debe estar en la raíz junto a los otros HTML, `styles.css`, `script.js`, `assets/` y `data/`.
3. En GitHub abre Settings → Pages → Build and deployment → Source → Deploy from a branch.
4. Selecciona la rama `main`, carpeta `/(root)` y guarda.
5. GitHub mostrará la dirección del sitio cuando termine el despliegue.

[Documentación oficial](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Contenido

| Archivo | Contenido |
| --- | --- |
| index.html | Inicio, membresía correspondiente en la Academia, GoSA y accesos |
| trayectoria.html | Formación, experiencia posdoctoral, investigador visitante y distinciones |
| investigacion.html | GoSA, proyectos, publicaciones y estadísticas |
| docencia.html | Cursos y 30 tesis; 11 enlaces cotejados |
| comunidad.html | Membresías, gestión y evaluación académica |
| divulgacion.html | Libros, Ciencia Viral, Conocimiento y Sociedad y columnas |
| columnas.html | 248 registros de columnas y artículos; 230 con enlace |
| medios.html | Entrevistas destacadas, videos y 57 apariciones con enlaces |
| arte.html | Exposiciones, arte y ciencia, diseño de piezas y logos |
| data/ | Inventarios de columnas y entrevistas usados en esta versión |

Los archivos JSON son copias estructuradas del inventario. La web funciona sin peticiones de datos: los registros se incluyen también en el HTML. Para actualizar el inventario, modifica el JSON y el HTML correspondiente; no existe sincronización automática. Los filtros buscan títulos, temas y medios sin distinguir tildes ni mayúsculas. El archivo completo sigue siendo legible sin JavaScript.

## Fuentes y criterios editoriales

- CV suministrado por el autor, actualizado en agosto de 2026; texto biográfico y hoja de estadísticas adjuntos.
- La membresía correspondiente de la Academia se destaca a solicitud del autor. El archivo registra elección en mayo de 2025 y posesión en abril de 2026.
- Los indicadores de Scholar (1.757 citas, h=22, i10=32) son los consignados en el CV, con corte en agosto de 2026. El perfil en vivo bloqueó la consulta automatizada. No se muestra un total de publicaciones: el propio CV advierte homónimos y duplicados en la exportación; un conteo de filas no sería un total científico fiable.
- El botón de publicaciones abre el catálogo completo del perfil indicado por el autor, ordenado por fecha. Puede ser necesario pulsar “Show more” en Google Scholar para recorrer todas sus entradas.
- Las 9 obras editoriales corresponden a la selección de libros presentada en la web, como autor o coautor.
- El archivo de columnas reúne todos los registros con título y año de la hoja adjunta, no todas las columnas de la trayectoria desde 2014. Los registros sin enlace permanecen identificados. Los 57 registros del archivo de medios cuentan con URL pública en la hoja; se excluyeron datos personales de invitados y anotaciones internas.
- Las estancias de investigador visitante se transcribieron del CV. El puesto de 2008 en Dutch Open Telescope conserva su denominación de astrónomo de apoyo; no se cambia a una beca posdoctoral sin evidencia en el CV.
- No se incluyen teléfonos privados, contactos de terceros, propuestas evaluadas ni informes de arbitraje. Tampoco se distribuye el CV original sin editar.
- Las fotografías personales no se atribuyen a una exposición concreta ni a una estancia fechada sin identificación suficiente.
- Objetos Astrofísicos fue retirado de cursos. Los estados de finalización de las tesis no se infieren de un inventario con contradicciones.

## Imágenes y enlaces

Las fotografías personales, el logo GoSA y la imagen Conocimiento y Sociedad proceden de los adjuntos. La imagen de docencia es la foto real de Corferias 2018; la ilustración de mentoría con IA fue eliminada.

- GoSA y fotografía del grupo: https://group-of-solar-astrophysics.github.io/GOSAPagina/
- Sunrise, imagen solar alusiva al proyecto: https://www.mps.mpg.de/solar-physics/sunrise
- Hinode, imagen de la misión: https://science.nasa.gov/mission/hinode/
- DynaSun: https://cordis.europa.eu/project/id/101131534
- Beyond Research: https://ciencias.bogota.unal.edu.co/internacionalizacion/convocatorias_convenios_y_programas_especiales/
- Ciencia Viral, imagen oficial: https://www.spreaker.com/podcast/ciencia-viral--4779937
- Portada Mujer es Ciencia: https://mujeresconciencia.com/2021/10/02/mujer-es-ciencia/
- Portadas Julio Garavito Armero: https://catalogoferias.unal.edu.co/julio-garavito-armero-7qgsg.html
- Miniaturas de entrevistas: imágenes públicas de los videos enlazados; los títulos de epiSTEMas y Frecuencia UNAL se contrastaron con los metadatos de YouTube.
- Se conserva la ilustración artística de una galaxia de la versión anterior, identificada como generada con IA.

## Pendientes que requieren material del autor

- Portadas: la extracción y restauración con IA ensayada cambió letras y detalles, por lo que fue descartada. Se conservan las cubiertas reales, incluidas las de mayor resolución ya recuperadas. Para conseguir recortes sin fondo fieles y en alta calidad se requieren los archivos individuales originales, PDF de cubierta o imágenes grandes. No se incluye la composición generada que alteró los libros.
- TikToks: se describe esta faceta pero no se inventó un nombre de cuenta ni enlaces a videos propios. Faltan la URL del perfil y los enlaces seleccionados.
- Diseño: se abrió la sección de piezas y logos y se incluyó Jueves bajo las estrellas. Falta el archivo de afiches y otros logos para mostrar una galería de trabajos identificados. La imagen GoSA se presenta como identidad del grupo, sin inferir créditos individuales de diseño.
- Disponibilidad de enlaces: se contrastaron las fuentes principales; no se comprobó individualmente la disponibilidad actual de los 287 enlaces del archivo. Algunos medios requieren suscripción o inicio de sesión.

## Verificación

Se revisaron estructura HTML, referencias a archivos locales, anclas, sintaxis JavaScript e integridad de imágenes. El entorno no dispone de un navegador ejecutable, por lo que sigue pendiente la revisión visual en navegador de escritorio y móvil. Conviene comprobar el menú, filtros de año/búsqueda y enlaces externos al publicar.
