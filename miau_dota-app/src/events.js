import "./style.css";

const events = [
  {
    id: "1",
    image: "../public/imgs/miaudota/evento1.png",
    name: "ONG Adota Aí",
    local: "Rua dos Bobos, 0",
  },
  {
    id: "2",
    image: "../public/imgs/miaudota/evento2.png",
    name: "ONG Adota Ali",
    local: "Rua dos Bobos, 0",
  },
];

export function createEvent(event) {
  return `
    <div class="card-evento">
        <img src="${event.image}">
        <p class="nome-evento">${event.name}</p>
        <p class="local-evento">${event.local}</p>
    </div>
    `;
}

export const section = document.querySelector(".events");

events.forEach((event) => {
  let card = createEvent(event);
  section.insertAdjacentHTML("beforeend", card);
});
