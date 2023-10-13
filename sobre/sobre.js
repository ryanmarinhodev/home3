const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");

menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};

cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
};

searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
        
// Seletor para a logo
const logoLink = document.getElementById('logo-link');

// Adicionar um ouvinte de evento de clique à logo
logoLink.addEventListener('click', () => {
    // Redirecionar para a página principal
    window.location.href = 'index.html'; // Substitua 'index.html' pela URL da sua página principal
});





// Mapeamento das imagens associadas a cada imagem principal
const galerias = [
  [
      '/imagenscasacor/IMG_8777-_1_.jpg',
      '/imagenscasacor/foto3.webp',
  ],
  [
      // Aqui você pode adicionar os URLs das imagens correspondentes à galeria com o ID 2
      '/imagensgmi/premiojoao.webp',
      '/imagensgmi/IMG_7074-_2_.webp',
  ],
  [
      '/imagensgmi/expo.webp',
  ],

];


let galeriaAtual = 0; // Inicializa com a primeira imagem
const imagens = []; // Array de URLs de imagens

function abrirGaleria(galeriaId) {
  const galeria = document.getElementById('galeria');
  galeria.style.display = 'block'; // Mostra a galeria

  // Obtém as imagens da galeria selecionada
  imagens.length = 0; // Limpa o array de imagens
  imagens.push(...galerias[galeriaId - 1]);

  // Exibe a primeira imagem
  mostrarImagem(0);
}

function mostrarImagem(n) {
  galeriaAtual += n;

  // Verifica os limites das imagens
  if (galeriaAtual >= imagens.length) {
    galeriaAtual = 0;
  }
  if (galeriaAtual < 0) {
    galeriaAtual = imagens.length - 1;
  }

  // Exibe a imagem atual
  const imagemGaleria = document.getElementById('imagemGaleria');
  imagemGaleria.src = imagens[galeriaAtual];
}

function fecharGaleria() {
  const galeria = document.getElementById('galeria');
  galeria.style.display = 'none'; // Esconde a galeria
}






