let slideIndex = 1;
let currentImageIndex = 0;
let lastHighlightedColumn = 0;
  let currentSlide1 = 3;
  const slidesToShow = 3; 
const images = [
  "/assets/Rectangle 6683.svg",
  "/assets/Rectangle 6684.svg",
  "/assets/Group 1000004277.png",
  "/assets/Group 1000003951.svg",
  "/assets/green1_1 1.svg",
  "/assets/green2_1 1.svg",
  "/assets/green2_1 2.svg",
  "/assets/green2_1 3.svg",
];
function myFunction(x) {
  x.classList.toggle("change");
}
///////////////////////////////counting/////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const counts = document.querySelectorAll(".count");

  const countUp = (element) => {
    const target = parseInt(element.getAttribute("data-count"));
    let count = 0;

    const updateCount = () => {
      count++;
      element.textContent = count + "%";
      if (count < target) {
        requestAnimationFrame(updateCount);
      } else {
        element.textContent = target + "%";
      }
    };

    requestAnimationFrame(updateCount);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counts.forEach((countElement) => countUp(countElement));
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(document.querySelector(".adjust"));
});


//////////////////////////////////////////////////////////////////
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active"); 
}
document.addEventListener("DOMContentLoaded", () => {
  const flavorButtons = document.querySelectorAll(".flavor-btn");

  flavorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFlavor = button.getAttribute("data-flavor");
      alert(
        `You have selected the flavor: ${
          selectedFlavor.charAt(0).toUpperCase() + selectedFlavor.slice(1)
        }`
      );
    });
  });

  const addToCartButton = document.getElementById("add-to-cart");
  addToCartButton.addEventListener("click", () => {
    alert("Item added to cart!");
  });
});

let currentIndex = 0;

//searchbar///////////////////////////////////////
// Variables to track the state of the search sidebar
let searchSidebarOpen = false;

document.getElementById("searchButton").addEventListener("click", function () {
  const searchContainer = document.getElementById("searchContainer");
  searchContainer.classList.toggle("hidden");
});


function toggleSidebar() {
  const sidebar = document.getElementById("search-sidebar");

  searchSidebarOpen = !searchSidebarOpen;
  sidebar.style.display = searchSidebarOpen ? "block" : "none";
}


window.onclick = function (event) {
  const sidebar = document.getElementById("search-sidebar");

  if (
    searchSidebarOpen &&
    event.target !== sidebar &&
    !sidebar.contains(event.target)
  ) {
    searchSidebarOpen = false;
    sidebar.style.display = "none";
  }
};
  
//////////////////////radio/////////////////////////

document.querySelectorAll(".flavor").forEach(function (item) {
  item.addEventListener("click", function () {
    document
      .querySelectorAll('.flavor input[type="radio"]')
      .forEach(function (radio) {
        radio.checked = false;
      });

    const radio = item.querySelector('input[type="radio"]');
    radio.checked = true;
  });
});

function selectFlavor(flavor) {
  const radio = document.getElementById(`flavor-${flavor.toLowerCase()}`);
  if (radio) {
    radio.checked = true;
  }
}


/////////////////////below radio////////////////////////////
function toggleContent() {
  
  document.getElementById("singleContent").style.display = "none";
  document.getElementById("doubleContent").style.display = "none";
  document.getElementById("tryContent").style.display = "none";

  
  if (document.getElementById("single").checked) {
    document.getElementById("singleContent").style.display = "block";
    
  } else if (document.getElementById("double").checked) {
   
    document.getElementById("doubleContent").style.display = "block";
    
  } else if (document.getElementById("try").checked) {
    document.getElementById("tryContent").style.display = "block";
    
  }
}


toggleContent();
function selectFlavor1(subscription) {
  const radio = document.getElementById(`subscription-${subscription.toLowerCase()}`);
  if (radio) {
    radio.checked = true;
  }
}
///////////////////////////////////////////////////////////////////////////////////
function selectSubscription(type) {
  const subscriptions = ["single", "double", "try"];
  subscriptions.forEach((sub) => {
    document.getElementById(`${sub}Content`).style.display = "none";
    document.getElementById(`${sub}`).checked = false;
  });

  document.getElementById(`${type}Content`).style.display = "block";
  document.getElementById(type).checked = true;
}

function addToCart() {
  const selectedSubscription = document.querySelector(
    'input[name="subscription"]:checked'
  ).value;
  const prices = {
    "Single Kit": "$37 USD",
    "Double Kit": "$68 USD",
    "Try Once": "$46 USD",
  };

  document.getElementById(
    "cartDetails"
  ).innerText = `You have added "${selectedSubscription}" subscription to your cart. Price: ${prices[selectedSubscription]}`;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

//................................flavor slect and subscription.........................//

////////purchase highlight column////////////////////////////////////////////////////////////////////////

function selectColumn(columnIndex) {
  const table = document.getElementById("benefitsTable");
  const headers = table.getElementsByTagName("th");
  const rows = table.getElementsByTagName("tr");

 
  if (lastHighlightedColumn >= 0) {
    for (let row of rows) {
      row.cells[lastHighlightedColumn + 1].classList.remove("highlight");
    }
  }


  for (let row of rows) {
    row.cells[columnIndex + 1].classList.add("highlight");
  }

  lastHighlightedColumn = columnIndex;
}

window.onload = function () {
  selectColumn(0);
};

////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////

function updateImage() {
  const sliderImage = document.getElementById("sliderImage");
  sliderImage.src = images[currentImageIndex];
   updateDots();
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateImage();
}



function currentSlide(index) {
  currentImageIndex = index;
  updateImage();
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentImageIndex);
  });
}


updateImage();
// container9///////////////////////////////////
function toggleAnswer(questionElement) {
  const answerElement = questionElement.nextElementSibling;

  if (
    answerElement.style.display === "none" ||
    answerElement.style.display === ""
  ) {
    answerElement.style.display = "block";
    questionElement.querySelector(".icon").textContent = "−"; 
  } else {
    answerElement.style.display = "none";
    questionElement.querySelector(".icon").textContent = "+"; 
  }
}

///////////////////////////Review///////////////////////////////////////////////////


function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots1 = document.querySelectorAll(".dot1");

 
  currentSlide1 = (index + slides.length) % slides.length;


  slides.forEach((slide) => slide.classList.remove("active"));
  dots1.forEach((dot1) => dot1.classList.remove("active"));


  for (let i = 0; i < slidesToShow; i++) {
    if (slides[currentSlide1 + i]) {
      slides[currentSlide1 + i].classList.add("active");
    }
  }


  const activeDotIndex = Math.floor(currentSlide1 / slidesToShow);
  if (dots1[activeDotIndex]) {
    dots1[activeDotIndex].classList.add("active");
  }
}

function moveSlide(direction) {
  showSlide(currentSlide1 + direction * slidesToShow);
}

showSlide(currentSlide1);
//footer.....................................................
function subscribe() {
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value;

  if (emailValue) {
    alert(`${emailValue}! Thank you for subscribing with Alcami`);
    emailInput.value = ""; // Clear the input field after subscription
  } else {
    alert("Please enter a valid email address.");
  }
}
