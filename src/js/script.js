// dropdown

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  document.addEventListener("click", (event) => {
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

  document.addEventListener("click", (event) => {
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

//  gallery load script

document.addEventListener("DOMContentLoaded", function () {
  var imagesToShow = 10;
  var imagesLoaded = imagesToShow;
  var imageContainer = document.querySelector("#gallery-container");
  var loadMoreBtn = document.querySelector("#load-more-btn");
  var loadMoreMask = document.querySelector("#gallery-load-mask");

  // Initially hide images beyond the first 9
  var images = imageContainer.querySelectorAll(".img-gallery");
  for (var i = imagesToShow; i < images.length; i++) {
    images[i].style.display = "none";
    images[i].setAttribute("loading", "lazy"); // Add lazy loading attribute
  }

  // Handle button click to show more images
  loadMoreBtn.addEventListener("click", function () {
    for (var i = imagesLoaded; i < imagesLoaded + imagesToShow; i++) {
      if (images[i]) {
        images[i].style.display = "block";
        images[i].setAttribute("loading", "lazy"); // Add lazy loading attribute
      }
    }
    imagesLoaded += imagesToShow;

    // Hide the "Load More" button if all images are shown
    if (imagesLoaded >= images.length) {
      loadMoreBtn.style.display = "none";
      loadMoreMask.style.display = "none";
    }
  });
});


