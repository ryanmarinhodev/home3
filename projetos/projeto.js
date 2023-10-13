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











const galerias = [
    [
        '/projetos/fotosautomacao/IMG_2981.webp',
        '/projetos/fotosautomacao/IMG_3269.webp',
        '/projetos/fotosautomacao/IMG_8409.webp',
    ],
    [
        '/projetos/fotosautomacao/IMG_2981.webp',
        '/projetos/fotosautomacao/IMG_3269.webp',
        '/projetos/fotosautomacao/IMG_8409.webp',
    ],
];

let galeriaAtual = 0;
const imagens = [];
const galeria = document.getElementById('galeria');
const slider = document.querySelector('#galeria .slider');
const imagemGaleria = document.getElementById('imagemGaleria');

function abrirGaleria(galeriaId) {
    galeriaAtual = galeriaId - 1;

    imagens.length = 0;
    imagens.push(...galerias[galeriaAtual]);

    imagemGaleria.src = imagens[0];
    slider.classList.add('visivel'); // Tornar o slider visível
    galeria.style.display = 'block';
}

function mostrarImagem(n) {
    galeriaAtual += n;

    if (galeriaAtual >= imagens.length) {
        galeriaAtual = 0;
    }
    if (galeriaAtual < 0) {
        galeriaAtual = imagens.length - 1;
    }

    imagemGaleria.src = imagens[galeriaAtual];
}

function fecharGaleria() {
    slider.classList.remove('visivel'); // Ocultar o slider ao fechar
    galeria.style.display = 'none';
}