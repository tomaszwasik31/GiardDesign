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

document.addEventListener("DOMContentLoaded", () => {
  const imageContainer = document.querySelector("#gallery-container");
  const loadMoreBtn = document.querySelector("#load-more-btn");
  const loadMoreMask = document.querySelector("#gallery-load-mask");

  // Determine how many images to show initially based on screen width
  let imagesToShow = window.innerWidth < 768 ? 3 : 10;
  let imagesLoaded = imagesToShow;
  const images = imageContainer.querySelectorAll(".img-gallery");

  // Function to toggle image display and lazy loading
  const toggleImageDisplay = (start, end, display) => {
    for (let i = start; i < end; i++) {
      if (images[i]) {
        images[i].style.display = display;
        images[i].setAttribute("loading", "lazy");
      }
    }
  };

  // Initially hide images beyond the first 'imagesToShow'
  toggleImageDisplay(imagesToShow, images.length, "none");

  // Handle button click to show more images
  loadMoreBtn.addEventListener("click", () => {
    // Show the next batch of images
    toggleImageDisplay(imagesLoaded, imagesLoaded + imagesToShow, "block");
    imagesLoaded += imagesToShow;

    // Hide the "Load More" button if all images are shown
    if (imagesLoaded >= images.length) {
      loadMoreBtn.style.display = "none";
      loadMoreMask.style.display = "none";
    }
  });
});

