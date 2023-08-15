// dropdown

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  document.addEventListener("click", event => {
    if (toggleButton.contains(event.target)) {
      dropdownMenu.classList.toggle("hidden");
    } else if (!dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.add("hidden");
    }
  });
});


// search input
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-input");
  const searchButton = document.querySelector(".search-button");

  document.addEventListener("click", event => {
    if (searchButton.contains(event.target)) {
      searchInput.classList.toggle("active");
      if (!searchInput.classList.contains("hidden")) {
        searchInput.focus();
      }
    } else if (!searchInput.contains(event.target)) {
      searchInput.classList.remove("active");
    }
  });
});

