document.addEventListener("DOMContentLoaded", () => {

  const elementos = document.querySelectorAll(".aparece");
  const form = document.getElementById("contact-form");
  const mensaje = document.getElementById("mensaje-enviado");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.4 });

  elementos.forEach(el => observer.observe(el));

  form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    mode: "no-cors", // 👈 CLAVE
  })
  .then(() => {
    mensaje.classList.remove("oculto");
    form.reset();
  });
});
});