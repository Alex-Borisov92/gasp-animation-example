window.addEventListener("load", () => {
    // Анимация заголовка и кнопки при загрузке страницы
    gsap.fromTo(".headline", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" });
    gsap.fromTo(".cta-button", { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 0.5, duration: 1 });
  
    // Анимация контента при скролле
    gsap.from(".content-title", {
      scrollTrigger: ".content-title",
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power2.out"
    });
  
    gsap.from(".content-description", {
      scrollTrigger: ".content-description",
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power2.out",
      delay: 0.2
    });
  
    // Анимация кнопки при наведении
    const button = document.querySelector(".cta-button");
    button.addEventListener("mouseenter", () => {
      gsap.to(button, { scale: 1.1, backgroundColor: "#ff4500", duration: 0.3 });
    });
  
    button.addEventListener("mouseleave", () => {
      gsap.to(button, { scale: 1, backgroundColor: "#ff6347", duration: 0.3 });
    });
  });
  