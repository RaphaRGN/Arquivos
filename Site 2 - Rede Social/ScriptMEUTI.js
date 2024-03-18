document.addEventListener('DOMContentLoaded', function () {
  const btnEditar = document.getElementById('btnEditar');
  const btnSalvar = document.getElementById('btnSalvar');
  const camposEditaveis = document.querySelectorAll('#tabela tbody td[contenteditable="false"]');

  btnEditar.addEventListener('click', function () {
      camposEditaveis.forEach(function (campo) {
          campo.contentEditable = 'true';
          campo.style.backgroundColor = '#f8f8f8';
      });
  });

  btnSalvar.addEventListener('click', function () {
      camposEditaveis.forEach(function (campo) {
          campo.contentEditable = 'false';
          campo.style.backgroundColor = ''; 
      });
  });
});