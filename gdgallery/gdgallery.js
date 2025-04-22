const galleryContainer = document.getElementById("galleryContainer");
const viewMoreBtn = document.getElementById("viewMoreBtn");

const cardsData = [
  {
    title: "Trade Channel Scandinavia Logo",
    description: "Created a clean, professional logo for Trade Channel Scandinavia, reflecting trust, modernity, and the brand’s international trade focus.",
    image: "../public/trade channel scandinavia logos-04.jpg",
    link:"https://www.behance.net/gallery/223991745/Logo-Design-Brand-Identity"
  },
  {
    title: "Scandictech Poster",
    description: "Designed a bold and dynamic poster for Scanditach, capturing the brand’s energy and modern identity through striking visuals and balanced layout.",
    image: "../public/poster.jpg",
    link:"https://www.behance.net/gallery/223980427/Poster-Design"
  },
  {
    title: "Eid Mubarak Story",
    description: "Designed a festive Eid Mubarak story for Scandictech with elegant visuals and cultural warmth.",
    image: "../public/story.jpg",
    link:"https://www.behance.net/gallery/223990155/Eid-Mubarak-Instagram-Story"
  },
  {
    title: "Invitation Card Design",
    description: "Designed a stylish and elegant invitation card, combining clean typography and thoughtful layout to suit the occasion perfectly.",
    image: "../public/behance-04.jpg",
    link:"https://www.behance.net/gallery/223966587/Invitation-Card-Design"
  }
//   {
//     title: "Project Five",
//     description: "Description of Project Five.",
//     image: "public/INTRO.png"
//   },
//   {
//     title: "Project Six",
//     description: "Description of Project Six.",
//     image: "../public/INTRO.png"
//   },
//   {
//     title: "Project Seven",
//     description: "Description of Project Seven.",
//     image: "public/INTRO.png"
//   }
//   {
//     title: "Project Eight",
//     description: "Description of Project Eight.",
//     image: "public/INTRO.png"
//   },
//   {
//     title: "Project Nine",
//     description: "Description of Project Nine.",
//     image: "public/INTRO.png"
//   },
//   {
//     title: "Project One",
//     description: "Description of Project One.",
//     image: "public/INTRO.png"
//   },
//   {
//     title: "Project Two",
//     description: "Description of Project Two.",
//     image: "public/INTRO.png"
//   },
//   {
//     title: "Project Three",
//     description: "Description of Project Three.",
//     image: "public/INTRO.png"
//   },
//   {
//     title: "Project Four",
//     description: "Description of Project Four.",
//     image: "public/INTRO.png"
//   },
//   {
//     title: "Project Five",
//     description: "Description of Project Five.",
//     image: "public/INTRO.png"
//   },
//   {
//     title: "Project Six",
//     description: "Description of Project Six.",
//     image: "../public/INTRO.png"
//   },
//   {
//     title: "Project Seven",
//     description: "Description of Project Seven.",
//     image: "public/INTRO.png"
//   },
//   {
//     title: "Project Eight",
//     description: "Description of Project Eight.",
//     image: "public/INTRO.png"
//   },
//   {
//     title: "Project Nine",
//     description: "Description of Project Nine.",
//     image: "public/INTRO.png"
//   }
];

let currentVisibleRows = 2; // 6 cards initially (2 rows)
const cardsPerRow = 3;

function renderCards() {
  galleryContainer.innerHTML = "";
  const visibleCards = cardsData.slice(0, currentVisibleRows * cardsPerRow);
  visibleCards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.innerHTML = `
      <img src="${card.image}" alt="Card Image">
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
