document.addEventListener("DOMContentLoaded",() => {
  loadComponent("components/header.html", document.getElementById("header"));
  loadComponent("components/footer.html", document.getElementById("footer"));
});

function loadComponent(file, element) {
  if (!element) return;

  fetch(file)
    .then((response) => {
      if (!response.ok) throw new Error("Could not load " + file);
      return response.text();
    })
    .then((html) => {
      element.innerHTML = html;
      if (file.includes("header")) setupHeader();
      if (file.includes("footer")) setupFooter();
    })
    .catch((error) => {
      console.log(error);
    });
}

function setupHeader() {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const themeBtn = document.getElementById("themeBtn");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeBtn.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
  });

  const currentPage = location.pathname.split("/").pop() || "index.html";

  navLinks.querySelectorAll("a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

function setupFooter() {
  document.getElementById("footerYear").textContent = new Date().getFullYear();
}
