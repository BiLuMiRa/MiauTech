import vets from "./vets"
// Pega a string da url
const string_url = window.location.search

// Cria um objeto para facilitar a busca
const urlparams = new URLSearchParams(string_url)

const id_vet = urlparams.get('id')

const vet = vets.find(a => a.id == id_vet)

if (vet) {
    document.getElementById('vet-image').src = vet.image
    document.getElementById('vet-name').textContent = vet.name;
    document.getElementById('vet-desc').textContent = vet.description;
    document.getElementById('vet-specialty').textContent = vet.specialty
    document.getElementById('vet-location').textContent = vet.location;

  const btn = document.querySelector(".btnAgendar");
  btn.dataset.vetId = vet.id;

  //----------evento no botão de agendar consulta----------//

  const vetId = btn.dataset.vetId;

  let marcado = localStorage.getItem("Agendar_" + vetId) === "true";

  atualizarbotao(btn, marcado);

  btn.addEventListener("click", () => {

    // Ele vai alterar de true/false
    marcado = !marcado;

    // Vao salvar a mudança no localStorage
    localStorage.setItem("Agendar_" + vetId, marcado)

    // Vai atualizar o botao
    atualizarbotao(btn,marcado);
  });

  } else {
    document.body.innerHTML = '<h1 style="color: black;" class="vet-não-encontrado">Veterinário não encontrado!</h1>';
  }

//------------------------------//

function atualizarbotao(btn, marcado) {
  if(marcado){
    btn.textContent = "Desmarcar Consulta";
    btn.style.backgroundColor = "#243a69";
  }
  else {
    btn.textContent = "Agendar Consulta";
    btn.style.backgroundColor = "";
  }
}