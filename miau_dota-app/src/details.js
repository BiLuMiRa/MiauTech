import pets from "./pets"
// Pega a string da url
const string_url = window.location.search

// Cria um objeto para facilitar a busca
const urlparams = new URLSearchParams(string_url)

const id_pet = urlparams.get('id')

const pet = pets.find(a => a.id == id_pet)

if (pet) {
    document.getElementById('pet-image').src = pet.image
    // document.getElementById('pet-imagem').alt = pet.nome;
    document.getElementById('pet-name').textContent = pet.name;
    document.getElementById('pet-desc').textContent = pet.desc;
    document.getElementById('pet-sexo').textContent = pet.sexo
    document.getElementById('pet-age').textContent = pet.age;

    // Adiciona o ID do pet no botão
    const btn = document.querySelector(".btnAdotar");
    btn.dataset.petId = pet.id;

    //-----------evento no botão de adotar----------//

  const petID = btn.dataset.petId;
  let marcado = localStorage.getItem("Adotar_" + petID) === "true";
  
  atualizarbotao(btn,marcado);

  btn.addEventListener("click", () => {
    marcado = !marcado;
    localStorage.setItem("Adotar_" + petID, marcado);
    atualizarbotao(btn, marcado);
  });
  
  } else {
    document.body.innerHTML = '<h1 style="color:black;"class="pet-não-encontrado">Pet não encontrado!</h1>';
  }

//-------------------------------------------------//

function atualizarbotao(btn, marcado){
  if(marcado){
    btn.textContent = "Adotado!";
    btn.style.backgroundColor = "#d62e2e"
  }
  else {
    btn.textContent = "Quero Adotar!";
    btn.style.backgroundColor = "";
  }
}