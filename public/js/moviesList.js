window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let logo = document.querySelector('figure')
        
    logo.addEventListener('mouseover', () => {
        //Luego de pasar el mouse en el logo, cambio el body
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
        moviesListTitulo.style.color = 'white';
        moviesListTitulo.style.backgroundColor = 'teal';
    })
    
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.padding = '20px';

}