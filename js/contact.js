document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    let valid = true;

    if (name.value.trim() === "") {

      document.getElementById("nameError").textContent = "Please enter your name.";
      valid = false;

    } else{ 
      document.getElementById("nameError").textContent = "";
    }

    if (!email.value.includes("@")) {
      document.getElementById("emailError").textContent = "Please enter a valid email.";
      valid = false;

    } 
      else {document.getElementById("emailError").textContent = "";}

    if (message.value.trim() === "") {
      document.getElementById("messageError").textContent = "Please write a message.";
      valid = false;
    } else {document.getElementById("messageError").textContent = "";}

    if (valid) {
      formMessage.textContent = "Thanks! Your message is ready to be sent.";
      formMessage.classList.add("show");
      form.reset();
    }
  });
});
