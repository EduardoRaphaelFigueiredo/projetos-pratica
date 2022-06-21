'use strict'

const modal = document.querySelector('.modal');
const sobreposicao = document.querySelector('.sobreposicao');
const botaoFecharModal = document.querySelector('.fechar-modal');
const botaoMostrarModal = document.querySelectorAll('.mostrar-modal');

const mostrarModal = function () {
    modal.classList.remove('escondido');
    sobreposicao.classList.remove('escondido');
};
const fecharModal = function () {
    modal.classList.add('escondido');
    sobreposicao.classList.add('escondido');
};

for (let i = 0; i < botaoMostrarModal.length; i++)
    botaoMostrarModal[i].addEventListener('click', mostrarModal);

botaoFecharModal.addEventListener('click', fecharModal)

sobreposicao.addEventListener('click', fecharModal)

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('escondido')) {
        fecharModal();
    }
});