// File: script.js
//efeito de carregamento de página
document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.querySelector('.loading-screen');
  loadingScreen.style.display = 'none'; // Esconde a tela de carregamento após o carregamento do DOM
});

// Efeito de carregamento das seções com pequeno delay
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.opacity = 0;
    setTimeout(() => {
      section.style.transition = 'opacity 0.6s';
      section.style.opacity = 1;
    }, 400 * index); // 400ms de delay entre cada seção
  });
});


// Define o ano atual no rodapé
document.getElementById('year').textContent = new Date().getFullYear();