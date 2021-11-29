window.onload = function () {
    //Validaciones del formulario
      document.querySelector('body').style.backgroundColor='pink';
    let formularioAgregar = document.getElementById('formularioAgregar');
    
    formularioAgregar.addEventListener('submit', (event) => {
      let errores = [];
      let tituloFormulario = document.getElementById('titulo')
      let rating = document.getElementById('rating');
      let premios = document.getElementById('premios');
      let lanzamiento = document.getElementById('lanzamiento');
      let duracion = document.getElementById('duracion');
      let genero = document.getElementById('genero');
    
      if (tituloFormulario.value == '') {
        errores.push('El campo titulo no puede estar vacío');
        tituloFormulario.classList.add('is-invalid');
      } else {
        tituloFormulario.classList.add('is-valid');
        tituloFormulario.classList.remove('is-invalid');
        formularioAgregar.rating.focus();
      };
      if (rating.value <= 0 || rating.value > 10.0) {
        errores.push('El campo calificación no puede ser menor a cero ni mayor a 10');
        rating.classList.add('is-invalid');
      } else {
        rating.classList.add('is-valid');
        rating.classList.remove('is-invalid');
        formularioAgregar.premios.focus();
      };
      if (premios.value <= 0 || premios.value > 10) {
        errores.push('El campo premios no puede ser menor a cero ni mayor a 10');
        premios.classList.add('is-invalid');
      } else {
        premios.classList.add('is-valid');
        premios.classList.remove('is-invalid');
        formularioAgregar.lanzamiento.focus();
      };
      if (lanzamiento.value == "") {
        errores.push('El campo fecha de creación no puede estar vacio');
        lanzamiento.classList.add('is-invalid');
      } else {
        lanzamiento.classList.add('is-valid');
        lanzamiento.classList.remove('is-invalid');
        formularioAgregar.duracion.focus();
      };
      if (duracion.value < 60 || duracion.value > 360) {
        errores.push('El campo duración no puede ser menor a 60 ni mayor a 360 minutos');
        duracion.classList.add('is-invalid');
      } else {
        duracion.classList.add('is-valid');
        duracion.classList.remove('is-invalid');
        formularioAgregar.genero.focus();
      };
      if (genero.value == '') {
        errores.push('El campo género no puede estar vacío');
        genero.classList.add('is-invalid');
      } else {
        genero.classList.add('is-valid');
        genero.classList.remove('is-invalid');
      };
    
      //Acá muestro la lista de errores
    
      if (errores.length > 0) {
        event.preventDefault();
        let ulErrores = document.getElementById('errores');
        ulErrores.classList.add('alert-warning');
        ulErrores.innerHTML = '';
        for (let i = 0; i < errores.length; i++) {
          ulErrores.innerHTML += `<li >  ${errores[i]} </li>`;
        };
      } else {
        alert('Se editó la pelicula.')
        formularioAgregar.submit();
      }
    
    })
    }