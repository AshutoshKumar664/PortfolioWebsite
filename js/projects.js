document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".filter");
  const projects = document.querySelectorAll(".project-card");

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      filters.forEach((item) => { item.classList.remove("active"); });
      filter.classList.add("active");

      const type = filter.dataset.filter;
      projects.forEach((project) =>{

        if (type === "all" || project.dataset.category === type) {
          project.classList.remove("hidden");
        } else {
          project.classList.add("hidden");
        }
        
      });
    });
  });
});
