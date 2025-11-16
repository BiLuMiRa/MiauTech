import vets from "./vets"
// Pega a string da url
const string_url = window.location.search

// Cria um objeto para facilitar a busca
const urlparams = new URLSearchParams(string_url)

const id_vet = urlparams.get('id')

const vet = vets.find(a => a.id == id_vet)

if (vet) {
    document.getElementById('vet-image').src = vet.image
    // document.getElementById('vet-imagem').alt = vet.nome;
    document.getElementById('vet-name').textContent = vet.name;
    document.getElementById('vet-desc').textContent = vet.description;
    document.getElementById('vet-specialty').textContent = vet.specialty
    document.getElementById('vet-location').textContent = vet.location;
  } else {
    document.body.innerHTML = '<h1 class="vet-não-encontrado">vet não encontrado!</h1>';
  }

