// Ejecutar en la página del perfil de Google Scholar
// (https://scholar.google.com/citations?hl=en&user=9DDaTaAAAAAJ&view_op=list_works&sortby=pubdate)
// Devuelve el JSON que espera .scholar/actualizar.py
(() => {
  const n = t => parseInt((t || "").replace(/\D/g, ""), 10);
  const td = [...document.querySelectorAll("#gsc_rsb_st td.gsc_rsb_std")].map(x => x.textContent);
  if (td.length < 6) return { error: "No se encontró la tabla de citas (¿CAPTCHA?)" };
  const metricas = { "citas": n(td[0]), "citas-2021": n(td[1]), "h": n(td[2]),
                     "h-2021": n(td[3]), "i10": n(td[4]), "i10-2021": n(td[5]) };
  const publicaciones = [...document.querySelectorAll("tr.gsc_a_tr")].map(r => {
    const g = r.querySelectorAll(".gs_gray");
    const a = r.querySelector(".gsc_a_at");
    return {
      titulo: a?.textContent.trim(),
      enlace: a?.href,
      autores: g[0]?.textContent.trim(),
      revista: (g[1]?.textContent || "").replace(/,\s*\d{4}\s*$/, "").trim(),
      anio: r.querySelector(".gsc_a_y span")?.textContent.trim(),
      citas: r.querySelector(".gsc_a_c a")?.textContent.trim()
    };
  });
  return { metricas, publicaciones };
})()
