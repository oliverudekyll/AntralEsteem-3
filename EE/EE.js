document.addEventListener("DOMContentLoaded", function () {
  var contact = document.getElementById("contact");

  var contactAlternates = [
    "Võta ühendust",
    "Küsi",
    "Palka",
    "Osta",
    "Vestle",
    "Soeta",
    "Päri",
    "Email",
    "Kontakt",
    "Investeeri",
    "Saada sõnum",
  ];

  var i = 0;

  function changeText() {
    contact.textContent = contactAlternates[i];
    i = (i + 1) % contactAlternates.length;
  }

  changeText();

  setInterval(changeText, 1000);
});

var textsPaths = [
  {
    title: "Glass Struggle",
    caption: "Manifest and photographic essay",
    link: "../EN/Texts/Texts.html",
  },
  {
    title: "Transparency Register",
    caption: "Essay and photography",
    link: "",
  },
  {
    title: "Hübriid ≠ avangard",
    caption: `<em>Performance</em>-kunsti festivali arvustus.`,
    link: "",
  },
  {
    title: "From the Peripheries",
    caption: "Texts on windows",
    link: "",
  },
  {
    title: "On The Role of Mental Images in Reasoning",
    caption: "Degree work",
    link: "",
  },
  {
    title: "Kunstnik, kes valis Roosiaia asemel tänava",
    caption: "Article by Krister Kivi",
    link: "https://leht.postimees.ee/7200134/kunstnik-kes-valis-roosiaia-asemel-tanava",
  },
];

var textsContainer = document.getElementById("texts-container");

for (i = 0; i < textsPaths.length; i++) {
  var textLink = document.createElement("a");
  textLink.className = "text-article";
  textLink.href = textsPaths[i].link;

  var h1 = document.createElement("h1");
  h1.textContent = textsPaths[i].title;

  var p = document.createElement("p");
  p.innerHTML = textsPaths[i].caption;
  p.className = "caption";

  var paddingDiv = document.createElement("div");
  paddingDiv.className = "padding";

  textLink.appendChild(h1);
  textLink.appendChild(p);
  textsContainer.appendChild(textLink);
}

var worksPaths = [
  {
    images: [
      "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-1.jpg",
      "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-2.jpg",
      "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-3.jpg",
      "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-4.jpg",
      "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-5.jpg",
      "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-6.jpg",
      "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-7.jpg",
    ],
    title: "Pimenurgad",
    caption: "Kanal galerii, 2022",
    href: "/EE/Works/Works.html#pimenurgad",
  },
  {
    images: [
      "../Images/Content/Klaasvastupanu/1.jpg",
      "../Images/Content/Klaasvastupanu/2.jpg",
      "../Images/Content/Klaasvastupanu/3.jpg",
      "../Images/Content/Klaasvastupanu/4.jpg",
      "../Images/Content/Klaasvastupanu/5.jpg",
    ],
    title: "Klaasvastupanu",
    caption: "EKA galerii, 2021",
    href: "/EE/Works/Works.html#klaasvastupanu",
  },
  {
    images: [
      "../Images/Content/VaenukoneEelnoust/StenEltermaa-VaenukoneEelnoust-1.jpg",
      "../Images/Content/VaenukoneEelnoust/StenEltermaa-VaenukoneEelnoust-2.jpg",
    ],
    title: "Vaenukõne eelnõust",
    caption: "Tallinna tänavad, 2021",
    href: "/EE/Works/Works.html#vaenukone-eelnoust",
  },
  {
    images: [
      "../Images/Content/LabipaistvuseRegister/1.jpg",
      "../Images/Content/LabipaistvuseRegister/2.jpg",
      "../Images/Content/LabipaistvuseRegister/3.jpg",
      "../Images/Content/LabipaistvuseRegister/4.jpg",
    ],
    title: "Läbipaistvuse register",
    caption: "Draakoni galerii, 2020",
    href: "/EE/Works/Works.html#labipaistvuse-register",
  },
  {
    images: [
      "../Images/Content/BrusseliPreluud/1.jpg",
      "../Images/Content/BrusseliPreluud/2.jpg",
      "../Images/Content/BrusseliPreluud/3.jpg",
      "../Images/Content/BrusseliPreluud/4.jpg",
    ],
    title: "Brüsseli prelüüd: liminaalne tsoon",
    caption: "Tartu Kunstimuuseum, 2017",
    href: "/EE/Works/Works.html#brusseli-preluud",
  },
];

var worksContainer = document.getElementById("works-container");

function changeImage(index) {
  var currentImageIndex = 0;
  return function () {
    var img = this;
    img.src = worksPaths[index].images[currentImageIndex];
    currentImageIndex =
      (currentImageIndex + 1) % worksPaths[index].images.length;
  };
}

for (var i = 0; i < worksPaths.length; i++) {
  var a = document.createElement("a");
  a.className = "work";
  a.href = worksPaths[i].href;
  var b = document.createElement("b");
  b.textContent = worksPaths[i].caption;
  a.textContent = worksPaths[i].title;
  var img = document.createElement("img");
  img.className = "works";
  img.src = worksPaths[i].images[0];
  var worksDiv = document.createElement("div");
  worksDiv.className = "project";

  worksDiv.appendChild(img);
  a.appendChild(b);
  worksDiv.appendChild(a);
  worksContainer.appendChild(worksDiv);

  img.addEventListener("click", changeImage(i));
}

document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll(".works");

  images.forEach(function (image) {
    image.addEventListener("click", function () {
      var imageWidth = image.clientWidth;
      var viewportWidth = window.innerWidth;
      var scrollPosition = image.offsetLeft - (viewportWidth - imageWidth) / 2;

      window.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    });
  });
});

var worksButton = document.getElementById("works");
var worksContainer = document.getElementById("works-container");
var textsButton = document.getElementById("texts");
var textsContainer = document.getElementById("texts-container");
var cvButton = document.getElementById("cv");
var cvContainer = document.getElementById("cv-container");
var columnContainer = document.getElementById("column-container");

if (window.location.hash === "#works") {
  worksButton.classList.add("active");
  worksContainer.classList.add("active");
  columnContainer.style.mixBlendMode = "difference";
}

if (window.location.hash === "#texts") {
  textsButton.classList.add("active");
  textsContainer.classList.add("active");
}

if (window.location.hash === "#cv") {
  cvButton.classList.add("active");
  cvContainer.classList.add("active");
}

// WORKS BUTTON
worksButton.addEventListener("click", function () {
  worksButton.classList.toggle("active");
  worksContainer.classList.toggle("active");

  if (worksButton.classList.contains("active")) {
    window.location.hash = "works";
    columnContainer.style.mixBlendMode = "difference";
  } else {
    window.location.hash = "";
    columnContainer.style.mixBlendMode = "normal";
  }
});

// TEXTS BUTTON
textsButton.addEventListener("click", function () {
  textsButton.classList.toggle("active");
  textsContainer.classList.toggle("active");

  if (textsButton.classList.contains("active")) {
    window.location.hash = "texts";
  } else {
    window.location.hash = "";
  }
});

// CV BUTTON
cvButton.addEventListener("click", function () {
  cvButton.classList.toggle("active");
  cvContainer.classList.toggle("active");

  if (cvButton.classList.contains("active")) {
    window.location.hash = "cv";
  } else {
    window.location.hash = "";
  }
});

/* var allElements = document.getElementsByTagName("a")

function changeText(event) {
  const originalText = event.target.textContent;
  event.target.setAttribute('data-original-text', originalText);  event.target.textContent = `Do you accept cookies? Do you accept cookies? Do you accept cookies? Do you accept cookies?`;
}

function revertText(event) {
  const originalText = event.target.getAttribute('data-original-text');;
}

for (let i = 0; i < allElements.length; i++) {
  const element = allElements[i];
  element.addEventListener('mouseover', changeText);
  element.addEventListener('mouseout', revertText);
}
   */
