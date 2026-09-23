document.addEventListener("DOMContentLoaded", () => {
  
  const buttons = document.querySelectorAll(".skill-filter");
  const cards = document.querySelectorAll(".skill-card");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => { item.classList.remove("active"); });
      button.classList.add("active");

      const type = button.dataset.type;
      cards.forEach((card) => {
        card.hidden = type !== "all" && card.dataset.type !== type;
      });
    });
  });
});
