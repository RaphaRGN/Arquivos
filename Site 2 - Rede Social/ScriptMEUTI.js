    const btnEditar = document.getElementById('btnEditar');
    const camposEditaveis = document.querySelectorAll('#tabela tbody td[contenteditable="false"]');

    btnEditar.addEventListener('click', function() {
      camposEditaveis.forEach(function(campo) {
        campo.contentEditable = 'true';
      });
    })