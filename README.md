# Santiago Vargas Domínguez · Web personal · Versión 10

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
| docencia.html | Cursos y 31 trabajos del archivo histórico y 10 estudiantes actuales; 11 enlaces cotejados |
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
- Citas (1.757) e índice i10 (32) proceden del CV de agosto de 2026; el índice h es 23 por actualización del autor. El perfil en vivo bloqueó la consulta automatizada. No se muestra un total de publicaciones: el propio CV advierte homónimos y duplicados en la exportación; un conteo de filas no sería un total científico fiable.
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

## Alcance y datos por completar

- Índice h: 23, según actualización del autor en septiembre de 2026. Citas 1757 e índice i10 32 conservan el corte del CV (agosto de 2026).
- Se cuentan 31 trabajos de grado/tesis en el archivo de docencia. La tarjeta numérica anteriormente rotulada como columnas pasa a «Producción Académica» por indicación del autor. El botón abre todas las publicaciones del perfil de Google Scholar.
- Los años de tesis distinguen publicación, sustentación, entrega e inicio. Cuando falta una fecha se indica expresamente.
- Hipótesis: se incluyeron los diez artículos identificados en CV y catálogo Dialnet; no se garantiza que sean toda la producción histórica. Un texto conserva acceso a la revista porque no se localizó su enlace individual.
- El volumen aportado corresponde a IAU 358, no 357. IAU 400 se presenta como simposio y memorias, sin afirmar que el libro esté publicado. La imagen de RMxAC es la cubierta de la serie, no una cubierta específica creada para el volumen 49.
- No se localizó un logo verificable de Sunrise (observatorio en globo). Se incorpora fotografía oficial y enlaces; no se utilizó el de SunRISE, una misión de CubeSats diferente.
- Se incorporaron los logos de OAN, GoSA, DynaSun, IPhO 2026, IJSO, CoCoA y Andean Office.
- Los enlaces sociales pueden requerir inicio de sesión. No todos los enlaces del archivo histórico fueron comprobados individualmente.

## Imágenes nuevas de v6

Las ocho cubiertas se recortaron de la composición de alta resolución proporcionada por el usuario. Se eliminó el fondo cuadriculado con máscaras geométricas, conservando el diseño y texto del archivo recibido. Esa composición contiene letras estilizadas o alteradas: para fidelidad editorial completa conviene reemplazarla por los originales individuales.

La fotografía principal fue restaurada digitalmente con ImageGen, conservando la escena y la silueta. Instrucción: mejorar nitidez y reducir artefactos de compresión sin modificar identidad, pose, manos ni composición solar. La foto real de docencia permanece sin sustitución por IA.

Fuentes nuevas: IAC (primer lanzamiento Sunrise, 8/6/2009), NAOJ (imagen del observatorio), sitio IAUS400 (afiche), RMxAC/UNAM (cubierta de la serie), catálogo Dialnet del autor 2556183 (Hipótesis), Casa Hoffmann (Mikrón), Las2Orillas (Quanta). Los retratos, capturas de entrevistas y logos restantes fueron proporcionados por el autor.

## Verificación

Se revisaron estructura HTML, referencias a archivos locales, anclas, sintaxis JavaScript e integridad de imágenes. El entorno no dispone de un navegador ejecutable, por lo que sigue pendiente la revisión visual en navegador de escritorio y móvil. Conviene comprobar el menú, filtros de año/búsqueda y enlaces externos al publicar.

## Galería de diseño · versión 6

`diseno.html` contiene las 183 piezas suministradas en Archive.zip, organizadas por año y semestre según sus carpetas originales. Incluye programaciones, collages y cuatro registros fotográficos; 183 es un conteo de archivos, no de conferencias únicas. El PDF se representa por su primera página. No se atribuyeron títulos a partir de lecturas inciertas: las etiquetas conservan el periodo y el nombre del archivo.

`data/diseno.json` conserva el inventario y la correspondencia con las fuentes. Los afiches se adaptaron para la web con miniaturas y versiones ampliadas; los originales no se modificaron. Los nuevos logos se conservan sin rediseñar.

La vista ampliada permite navegar con botones o flechas del teclado, cerrar con Escape y abrir la imagen completa. Sin JavaScript, los enlaces abren las imágenes directamente.

## Cambios de la versión 7

Nueva fotografía GoSA, imagen de Persea y captura de Conversaciones en Casa. Se retiró la referencia a Dr. Cosmos; formación ICTP y maestría IAC/ULL, enlaces institucionales, estancias DynaSun 2024, membresías enlazadas y coordinación NAEC actualizadas. La lista histórica añade a Javier Sánchez; el listado de supervisión actual contiene los diez nombres indicados por el autor. No se inventaron el año ni el enlace de la tesis de Javier.

Correcciones de fechas: el eclipse total observado desde Oregón fue el 21 de agosto de 2017 (NASA), no 2027. La foto de Japón se identifica con NAOJ sin año: 2028 es futuro y requiere confirmación. La entrada del CV sobre estancia de 2007 permanece diferenciada del pie de foto.

La imagen del cometa se reemplazó en la versión 8 por 3iatlas.jpg, proporcionada por el autor.

DynaSun: las visitas de 2024 son información del autor. Referentes: directorio https://wis.kuleuven.be/CmPA/dynasun/consortium (actualizado abril de 2026) y comité https://sites.google.com/view/dynasun2024/. MPS: se diferencia Pradeep Chitta, comité 2024, de Regina Aznar, contacto actual; no se atribuye retrospectivamente este cargo.

Imágenes de contexto: NASA Image and Video Library, con crédito y enlace individual en cada tarjeta. Descripciones de libros ampliadas; enlaces a fichas individuales cuando se localizaron y catálogos generales claramente identificados para los demás. No se garantizan existencias ni precios.

Animación al entrar y salir de pantalla con desplazamiento, escala, giro leve y desenfoque. Se desactiva con la preferencia del sistema de reducir movimiento. Sin JavaScript las imágenes permanecen visibles.

## Versión 9 · presentación en tercera persona

Todos los textos de presentación, biografía, investigación, docencia, divulgación y arte se redactaron en tercera persona. «Sobre mí» pasó a «Perfil y trayectoria». Los títulos originales de libros y artículos se conservan, incluido «Mi Primer Libro del Sol».

Incorporadas las fotografías Grupo(1).png, persea(1).jpg, Conversaciones en CAsa(1).png, 3iatlas.jpg, ipho.jpg y solarpulse.jpg. Quantum Sphere se identifica como obra expuesta en Quanta, Estudio 74 (2017). Frecuencias Visibles incluye Solar Pulse, Colombo Americano (2013), según información del autor. Moisés Vargas enlaza a su artículo de Wikipedia.

El encuadre de la fotografía de Historias del Cosmos utiliza la parte inferior para mostrar a Santiago sin cortar su cabeza; el recorte se realiza en la presentación web. La portada de Reportajes Cósmicos tiene una máscara CSS ajustada al contorno derecho para ocultar los restos del fondo cuadriculado. Las imágenes originales permanecen disponibles.

Los enlaces externos y documentos PDF se abren en una pestaña nueva con protección noopener/noreferrer. La navegación interna y los visores de la galería mantienen su comportamiento dentro del sitio.

Las fotografías combinan entrada por desplazamiento/escala, transición de tonos y movimiento suave ligado al scroll. Libros y logos conservan sus colores. La preferencia de movimiento reducido desactiva los efectos; sin JavaScript se ve todo el contenido.

Comprobaciones: integridad de imágenes, referencias locales y anclas, sintaxis JavaScript, enlaces externos con target/rel y búsqueda de primera persona en las descripciones. No se dispone de navegador ejecutable para una revisión visual completa; conviene revisar los encuadres al abrir index.html en escritorio y móvil. El ZIP se extrajo completo y sus archivos se compararon con los originales antes de entregarse.

## Versión 9

Se sustituyeron las imágenes de las publicaciones sobre el jardín histórico, Parker Solar Probe y turbulencia de plasma por jardin.jpg, parker.jpg y plasma.png. La figura científica se muestra completa con object-fit:contain. Aprender haciendo utiliza santi.jpg y su pie de foto ya no atribuye la imagen a NASA. Se añadió la fotografía nueva de Quanta.

La tarjeta de 248 se rotula «Producción Académica», siguiendo la corrección solicitada por el autor. Se añade por separado «550 · Artículos divulgativos y columnas», cifra facilitada por el autor en septiembre de 2026. Los 248 registros del archivo de columnas siguen siendo el tamaño de ese inventario parcial; no se han generado 550 enlaces ficticios ni modificado el inventario histórico.

Once ilustraciones originales, una por tarjeta de Hipótesis y otras revistas, fueron creadas con la herramienta integrada ImageGen. Los prompts completos y rutas de los archivos se incluyen en data/ilustraciones-v9.json. Son imágenes editoriales de contexto, no datos, mediciones o fotografías de sucesos reales; cada tarjeta lo identifica.

Reportajes Cósmicos se presenta dentro de una caja de la misma altura que las demás cubiertas, conservando el recorte del contorno y las proporciones. Las imágenes de las tarjetas de medios tienen altura uniforme de 220px; 3I/ATLAS se recorta al centro para mostrar el título sin ampliar la tarjeta. Solar Pulse tiene un ancho máximo de 520px. La descripción del diseño destaca que Santiago Vargas disfruta de crear piezas para promocionar la ciencia.


## Actualización de la versión 10

Título de Sunrise corregido. Se incorporan las cuatro imágenes nuevas y se traslada la fotografía de inclusión a su apartado. eSPECTRA aparece en trayectoria e investigación, con siete portadas del sitio oficial en Diseño. Se amplía Yongaritmo y los Polinomios con enlaces a la serie y al podcast. Los enlaces externos abren en una pestaña nueva.
