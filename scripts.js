document.querySelectorAll('.tab-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Remove "active" das outras abas
    document.querySelectorAll('.tab-link').forEach(el => el.classList.remove('active'));
    this.classList.add('active');

    // Oculta todas as seções
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));

    // Mostra a aba selecionada
    const selected = this.getAttribute('data-tab');
    document.getElementById(selected).classList.remove('hidden');
  });
});
