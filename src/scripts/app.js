const elementos = document.querySelectorAll(".aparece");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); 
      }
    });
  }, {
    threshold: 0.4 // se activa cuando el 40% del elemento es visible
  });

  elementos.forEach(el => observer.observe(el));