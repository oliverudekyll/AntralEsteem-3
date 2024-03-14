document.addEventListener("DOMContentLoaded", function () {
  var contact = document.getElementById("contact");

  var contactAlternates = [
    "Contact",
    "Ask",
    "Hire",
    "Buy",
    "Connect",
    "Chat",
    "Purchase",
    "Inquire",
    "Email",
    "Employ",
    "Invest",
    "Message",
  ];

  var i = 0;

  function changeText() {
    contact.textContent = contactAlternates[i];
    i = (i + 1) % contactAlternates.length;
  }

  changeText();

  setInterval(changeText, 1000);
});

var worksPaths = [
  //Pimenurgad
  {
    images: [
      "/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-1.jpg",
      "/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-2.jpg",
      "/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-3.jpg",
      "/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-4.jpg",
      "/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-5.jpg",
      "/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-6.jpg",
      "/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-7.jpg",
    ],
    title: "Dark Corners",
    caption: "Kanal Gallery, 2022",
    captionEmphasis: "UV-print on car windows, car parts",
    text: `When it comes to garages, one immediately notices the absence of windows. A car and a garage complete each other. The car has windows that offer a 360-degree panoramic view. The views from the car windows are both static and moving. The car is mobile, and through its windows, one can always see something new. Unexpected scenes and spectacles continuously unfold before your eyes.
        
From this seed grew the idea to use a garage-gallery to exhibit views from both moving and stationary cars. The exhibition can also be viewed as an act of spatial compensation, for what is a garage without a car, and what is a car without windows? The garage remains incomplete until it has a car and the views that extend from it.

The car is a fortress that is used to comfortably and safely observe from a distance. Looking out of the car windows is also a cinematic activity, as the movement of the car becomes a sequence of images. The views from the car windows invite contemplation on time and existence, serving as a therapeutic form for enduring pain and suffering that heal with time and movement. While the world around me moves and changes, I remain still inside the car, observing without interference.`,
  },
  //Klaasvastupanu
  {
    images: [
      "/Images/Content/Klaasvastupanu/1.jpg",
      "/Images/Content/Klaasvastupanu/2.jpg",
      "/Images/Content/Klaasvastupanu/3.jpg",
      "/Images/Content/Klaasvastupanu/4.jpg",
      "/Images/Content/Klaasvastupanu/5.jpg",
    ],
    title: "Glass Struggle",
    caption: `EKA Gallery, <a href="">www.struggle.glass</a>, 2021`,
    captionEmphasis: "Mixed media, various dimensions",
    text: `“Glass Struggle” is a continuous artistic search that deals with glass as a paradox: brittle on one hand, tough and extremely resilient on the other. For example, high security facilities are made of glass — and even the pope rides in a car reinforced with bulletproof glass. Innovative glass manufacturing technologies have brought along significant changes in production processes, the quality of materials, and their availability.

Glass can also be viewed as a symbol of democracy — as an open, transparent, and equal dialogue between the people and the state. But similarly it can refer to totalitarianism — to the divide between social strata and to the possibility of an incipient or already actualized corporate nightmare. Are any of us not transparent yet? Are there any that do not see their own (distorted) reflection from a screen, from a window?
      
To hide itself from public interest, the state apparatus uses reflective-transparent camouflage. In architecture, this provides glass and windows with either an inclusive (transparent) or exclusive (reflective) meaning, creating either an open or an enclosed space. The pain points of “Glass Struggle” congregate around the binaries of the viewer/viewed and the observer/observed.
      
Glass has two different ontological statuses: material and virtual. Glass is liminal by nature. It can be viewed as a barrier between social groups. In the context of governmental, ruling, and/or financial institutions, the virtuality of the window manifests as a self-portrait that depicts the environment within and reenacts it as a play; this happens in both directions — depending on which side the observer stands and whether the surface is transparent or not. Or both.
      
One instrument of the powers that be is surveillance. During turbulent times, this also illustrates the vulnerability of power itself. Surveillance capitalism is growing fast, wooing people with promises of luxury in order to commodify them through their personal data. Data trafficking is a new hybrid form of human trafficking. The only apparent revolution we can imagine today is a privacy-based confrontation. This encompasses both daily life as well as a wider mentality and attitude. Data-peddling corporations that cosmically tower over us have to be made accountable for both the reliability of their content and the truthfulness of their tax reports.
      
In cooperation with playwright and poet Maria Lee, the “Glass Struggle” satellite <a href="">www.struggle.glass</a> is available for viewing both on the web as well as in-person, as one of the sculptures (“S.D.O. or the Satellite with a Deviated Orbit”). The graphic designer and conceptualizer of the web version is Maria Muuk, assisted by Patrick Zavadskis. The designer of the exhibition is Arvi Anderson.
`,
  },
  //Vaenukõne eelnõust
  {
    images: [
      "/Images/Content/VaenukoneEelnoust/StenEltermaa-VaenukoneEelnoust-1.jpg",
      "/Images/Content/VaenukoneEelnoust/StenEltermaa-VaenukoneEelnoust-2.jpg",
    ],
    title: "On the Hate Speech<br>Draft Legislation",
    caption: `Streets of Tallinn, 2021`,
    captionEmphasis: "20 burnt photos (ca 80 x 52 cm)",
    text: `“On the Hate Speech Draft Legislation” is a pseudonymous street art project executed in different parts of Tallinn (Tondi, Mustamäe, Kopli, Kalamaja, Kristiine, Old Town, etc.)

The goal of the work is to raise questions about the necessity of the hate speech draft bill, its content, and its dangerous nature: The Molotov cocktail motif can be interpreted in various ways in the context of the draft bill — the bill itself is dangerous and ambiguous, serving as a weapon for the power apparatus, and its adoption and implementation may result in completely opposite consequences from those intended. The selection of bottles was based on events happening in the world: Spain and Catalonia, Minsk and Belarus, Russia, Hong Kong, etc. The images were placed according to the semantic field associated with each bottle: a Black Nun beer bottle along with a unisex perfume near St. Charles's Church; a soy sauce bottle from Hong Kong and vodka produced in Minsk near the Ministry of Foreign Affairs, where a Chinese restaurant is also located; a Tõmmu Hiid (the Dark Giant) beer bottle placed near the Keenia (“Kenya”) bus stop opposite Tallinn University of Technology; a Coca-Cola bottle placed near the cinema of the cosmos, and so on.
`,
  },
  //Läbipaistvuse Register
  {
    images: [
      "/Images/Content/LabipaistvuseRegister/1.jpg",
      "/Images/Content/LabipaistvuseRegister/2.jpg",
      "/Images/Content/LabipaistvuseRegister/3.jpg",
      "/Images/Content/LabipaistvuseRegister/4.jpg",
    ],
    title: "Transparency Register",
    caption: `Draakon Gallery, 2020`,
    captionEmphasis: `8 photographs, various sizes (ca 1-1.5 m²)<br>
      Transparent-reflective film on the gallery’s windows<br>
      Booklet, 27 x 20 cm, 50 pages (32 color photographs and an essay).
      `,
    text: `“Transparency Register” is a visual and linguistic project that makes the windows and facades of governance and power institutions visible to the public. The work consists of different layers: a reflective-transparent film on the gallery's windows, photos on the walls and showcase table, and an investigative publication.

The title of the exhibition refers to a database called the Transparency Register, created in 2011 in the United States as a means to disclose the objectives of communication between lobbyists and representatives of European Union institutions.

The project includes photographs taken between 2016 and 2019 in Brussels, The Hague, and Tallinn. The photos depict many iconic buildings where institutions such as the European Parliament, European Commission, Council of the European Union, Eurojust, Europol, International Criminal Court, and the International Criminal Tribunal for the Former Yugoslavia operate. Additionally, several local institutions in The Hague, such as the Supreme Court of the Netherlands, the Hoftoren skyscraper, the headquarters of the Dutch police, the City Council, as well as various ministry and embassy buildings feature in the images. In Brussels, the photographs also capture several auxiliary buildings related to the European Union in the European Quarter, as well as embassy buildings and local government institutions. In Tallinn, the photos include the “superministry”, the eu-LISA headquarters, Ministry of Foreign Affairs, Harju County Court, and Tallinn City Council.

`,
  },
  //Brüsseli Prelüüd
  {
    images: [
      "/Images/Content/BrusseliPreluud/1.jpg",
      "/Images/Content/BrusseliPreluud/2.jpg",
      "/Images/Content/BrusseliPreluud/3.jpg",
      "/Images/Content/BrusseliPreluud/4.jpg",
    ],
    title: "Brussels Prelude:<br>The Liminal Zone",
    caption: `Tartu Art Museum, 2017`,
    captionEmphasis: `Object, 250 × 140cm (steel, glass, acrylic painting, silicone, granite)<br>
      7 photographs, 140 × 94 cm<br>
      Publication with an interview and essay
      `,
    text: `“Brussels prelude: The Liminal Zone” consists of seven photographs and a sculptural object. The latter, made from the materials featured in the photographs, can be regarded as an extension of the images.

The work focuses on the European Union, represented via the administrative buildings in the European Quarter in Brussels. This type of architecture can be successfully described through reflections and transparency. In addition, reflections and transparency are metaphors that can be used to effectively analyze the role of the subject within this supranational organization.

The project, therefore, is a spatial study that investigates the impact of institutional space on the subject.
`,
  },
  {
    images: ["/Images/Content/Mull/1.jpg", "/Images/Content/Mull/2.jpg"],
    title: "The Bubble",
    caption: `Kai Art Centre, 2021`,
    captionEmphasis: `Photographic installation`,
    text: `The Bubble series is part of the ongoing artistic research, Glass Struggle, which deals with glass as a material—paradoxically both fragile and extremely resilient. Glass, windows, and screens can suggest both inclusion (if transparent) and exclusion (if reflective). With a dual ontological nature, glass is both a physical object and a virtuality, pure liminality, belonging neither here nor there. The virtual aspect of the window—in the context of institutions of power, governance and finance — can be seen as a self-portrait in the environment surrounding the architectural object and/or as a spectacle within the space.
`,
  },
];

var worksContainer = document.getElementById("works-container");
var infoContainer = document.getElementById("info-container");

var currentProjectIndex = false;

if (window.location.hash === "#pimenurgad") {
  currentProjectIndex = 0;
}

if (window.location.hash === "#klaasvastupanu") {
  currentProjectIndex = 1;
}

if (window.location.hash === "#vaenukone-eelnoust") {
  currentProjectIndex = 2;
}

if (window.location.hash === "#labipaistvuse-register") {
  currentProjectIndex = 3;
}

if (window.location.hash === "#brusseli-preluud") {
  currentProjectIndex = 4;
}

if (window.location.hash === "#mull") {
  currentProjectIndex = 5;
}

if (worksPaths[currentProjectIndex]) {
  var title = document.createElement("h1");
  title.innerHTML = worksPaths[currentProjectIndex].title;

  var captionEmphasis = document.createElement("i");
  captionEmphasis.innerHTML = worksPaths[currentProjectIndex].captionEmphasis;
  captionEmphasis.className = "caption";

  var caption = document.createElement("b");
  caption.innerHTML = worksPaths[currentProjectIndex].caption;
  caption.className = "caption";

  var text = document.createElement("div");
  text.innerHTML = worksPaths[currentProjectIndex].text;
  text.className = "body";

  var lineBreak1 = document.createElement("br");
  var lineBreak2 = document.createElement("br");
  var lineBreak3 = document.createElement("br");

  var padding = document.createElement("div");
  padding.className = "padding";

  infoContainer.appendChild(title);
  infoContainer.appendChild(caption);
  infoContainer.appendChild(lineBreak1);
  infoContainer.appendChild(captionEmphasis);
  infoContainer.appendChild(lineBreak2);
  infoContainer.appendChild(lineBreak3);
  infoContainer.appendChild(text);
  infoContainer.appendChild(padding);

  for (var j = 0; j < worksPaths[currentProjectIndex].images.length; j++) {
    var img = document.createElement("img");
    img.className = "work";
    img.src = worksPaths[currentProjectIndex].images[j];
    var worksDiv = document.createElement("div");
    worksDiv.className = "project";

    worksDiv.appendChild(img);
    worksContainer.appendChild(worksDiv);
  }
}

var exhibitionText = document.getElementById("exhibition-text");

exhibitionText.addEventListener("click", function () {
  exhibitionText.classList.toggle("active");
  infoContainer.classList.toggle("active");
});
