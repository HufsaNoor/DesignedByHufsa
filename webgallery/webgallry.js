const galleryContainer = document.getElementById("galleryContainer");
const viewMoreBtn = document.getElementById("viewMoreBtn");

const cardsData = [
  {
    title: "Spotify-Clone",
    description: "Built a full-stack Spotify clone using Next.js and React with dynamic routing, music playback, and a responsive UI.",
    image: "../public/spotify.jpg",
    link: "https://spotify-clone-xi-pearl.vercel.app/"
  },
  {
    title: "Amazon-Clone",
    description: "Built a full-stack Amazon clone with product listings, user authentication, cart functionality, and a responsive UI.",
    image: "../public/amazon-01.jpg",
    link: "https://amzon-clone-ten.vercel.app/"
  },
  {
    title: "Aseer Group of Companies",
    description: "Developed a professional website for Aseer Group of Companies to showcase their diverse business ventures and services with a clean, corporate design.",
    image: "../public/assergroupofcompanies-01.jpg",
    link: "https://aseertransportservice.com/home.html"
  },
  {
    title: "Designed By Hufsa",
    description: "Designed and developed a sleek, personal portfolio website to showcase Hufsa’s creative work in UI/UX, web development, and graphic design.",
    image: "../public/designedbyhufsa.jpg"
  }
  // {
  //   title: "Project Five",
  //   description: "Description of Project Five.",
  //   image: "public/INTRO.png"
  // },
  // {
  //   title: "Project Six",
  //   description: "Description of Project Six.",
  //   image: "../public/INTRO.png"
  // },
  // {
  //   title: "Project Seven",
  //   description: "Description of Project Seven.",
  //   image: "public/INTRO.png"
  // },
  // {
  //   title: "Project Eight",
  //   description: "Description of Project Eight.",
  //   image: "public/INTRO.png"
  // },
  // {
  //   title: "Project Nine",
  //   description: "Description of Project Nine.",
  //   image: "public/INTRO.png"
  // },
  // {
  //   title: "Project One",
  //   description: "Description of Project One.",
  //   image: "public/INTRO.png"
  // },
  // {
  //   title: "Project Two",
  //   description: "Description of Project Two.",
  //   image: "public/INTRO.png"
  // },
  // {
  //   title: "Project Three",
  //   description: "Description of Project Three.",
  //   image: "public/INTRO.png"
  // },
  // {
  //   title: "Project Four",
  //   description: "Description of Project Four.",
  //   image: "public/INTRO.png"
  // },
  // {
  //   title: "Project Five",
  //   description: "Description of Project Five.",
  //   image: "public/INTRO.png"
  // },
  // {
  //   title: "Project Six",
  //   description: "Description of Project Six.",
  //   image: "../public/INTRO.png"
  // },
  // {
  //   title: "Project Seven",
  //   description: "Description of Project Seven.",
  //   image: "public/INTRO.png"
  // },
  // {
  //   title: "Project Eight",
  //   description: "Description of Project Eight.",
  //   image: "public/INTRO.png"
  // },
  // {
  //   title: "Project Nine",
  //   description: "Description of Project Nine.",
  //   image: "public/INTRO.png"
  // }
];

let currentVisibleRows = 2; 
const cardsPerRow = 3;

// function renderCards() {
//   galleryContainer.innerHTML = "";
//   const visibleCards = cardsData.slice(0, currentVisibleRows * cardsPerRow);
//   visibleCards.forEach((card) => {
//     const cardElement = document.createElement("div");
//     cardElement.className = "card";
//     cardElement.innerHTML = `
//       <img src="${card.image}" alt="Card Image">
//       <h3>${card.title}</h3>
//       <p>${card.description}</p>
//     `;
//     galleryContainer.appendChild(cardElement);
//   });

//   if (currentVisibleRows * cardsPerRow >= cardsData.length) {
//     viewMoreBtn.style.display = "none";
//   }
// }

function renderCards() {
  galleryContainer.innerHTML = "";
  const visibleCards = cardsData.slice(0, currentVisibleRows * cardsPerRow);

  visibleCards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";

    // If link exists, wrap image in anchor tag
    const imageHTML = card.link
      ? `<a href="${card.link}" target="_blank" rel="noopener noreferrer">
           <img src="${card.image}" alt="${card.title}">
         </a>`
      : `<img src="${card.image}" alt="${card.title}">`;

    cardElement.innerHTML = `
      ${imageHTML}
      <h3>${card.title}</h3>
      <p>${card.description}</p>
    `;

    galleryContainer.appendChild(cardElement);
  });

  if (currentVisibleRows * cardsPerRow >= cardsData.length) {
    viewMoreBtn.style.display = "none";
  }
}

viewMoreBtn.addEventListener("click", () => {
  currentVisibleRows += 2;
  renderCards();
});

renderCards();

