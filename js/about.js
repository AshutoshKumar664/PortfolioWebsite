document.addEventListener("DOMContentLoaded",  ()=>{
  const button = document.getElementById("moreBtn");
  const extra = document.getElementById("extraText");

  if (button && extra) {
    button.addEventListener("click", () => {
      extra.hidden = !extra.hidden;
      button.textContent = extra.hidden ? "Read More" : "Show Less";
    });
  }
});
