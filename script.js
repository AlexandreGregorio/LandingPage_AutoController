// Lógica do Dropdown dos Portais (Clique / Interação)
document.addEventListener("DOMContentLoaded", function () {
  const portalBtn = document.getElementById("portalBtn");
  const dropdownPortal = document.querySelector(".dropdown-portal");

  if (portalBtn && dropdownPortal) {
    portalBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdownPortal.classList.toggle("active");
    });

    // Fecha ao clicar fora
    document.addEventListener("click", function (e) {
      if (!dropdownPortal.contains(e.target)) {
        dropdownPortal.classList.remove("active");
      }
    });
  }

  // Controle do Menu Hamburguer (Mobile)
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Configuração do Acordeão do FAQ
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
      const faqItem = this.parentElement;
      faqItem.classList.toggle("active");
    });
  });
});

// Lógica das Abas Interativas (Tabs) estilo Infleet
function openTab(evt, tabName) {
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  const tabBtns = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Lógica do Simulador de Cotação
function calcularValores() {
  const tipoSelect = document.getElementById("tipo");
  const qtdInput = document.getElementById("qtd");
  const totalDisplay = document.getElementById("totalDisplay");

  const valorUnitario = parseFloat(tipoSelect.value);
  let quantidade = parseInt(qtdInput.value);

  if (isNaN(quantidade) || quantidade < 1) {
    quantidade = 1;
  }

  const total = valorUnitario * quantidade;

  totalDisplay.innerText = `R$ ${total.toFixed(2).replace('.', ',')}/mês`;
}

// Envio do Simulador para o WhatsApp
function enviarWhatsapp() {
  const tipoSelect = document.getElementById("tipo");
  const tipoNome = tipoSelect.options[tipoSelect.selectedIndex].text;
  const quantidade = document.getElementById("qtd").value;
  const totalDisplay = document.getElementById("totalDisplay").innerText;

  const telefoneEmpresa = "552134963942";
  const mensagem = `Olá! Fiz uma simulação no site e gostaria de uma proposta oficial:\n\n- *Tipo:* ${tipoNome}\n- *Quantidade:* ${quantidade}\n- *Valor Estimado:* ${totalDisplay}`;

  const url = `https://wa.me/${telefoneEmpresa}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}