const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  HomeBtn = body.querySelector(".nav-link"),
  Sr = body.querySelector(".bx-search"),
  modeSwich = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

HomeBtn.addEventListener("click", () => {
  sidebar.classList.add("close");
});

Sr.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

modeSwich.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light Mode";
  } else {
    modeText.innerText = "Dark Mode";
  }
});

