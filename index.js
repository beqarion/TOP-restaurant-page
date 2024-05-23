const navbar = document.querySelector(".nav");

navbar.addEventListener("click", function (e) {
  const childNodes = Array.from(this.children);
  if (
    e.target.classList.contains("tab") &&
    !e.target.classList.contains("active")
  ) {
    childNodes.forEach((n) => n.classList.remove("active"));
    e.target.classList.add("active");
  }
});
