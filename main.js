let menu = document.createElement('div');
    menu.style.display = 'none';
    menu.id = 'menu';
    document.querySelector('#desplegable').append(menu);
    let p= document.createElement('p');
    
    menu.append(p);
    let a = document.createElement('a');
    a.href = 'https://julinza2007.github.io/SAO';
    a.textContent = 'Pagina SAO';
    p.append(a);

    let p1= document.createElement('p');
    menu.append(p1);
    let a1= document.createElement('a');
    a1.href = 'https://julinza2007.github.io/julinza/';
    a1.textContent = 'Pagina Pessi';
    p1.append(a1);
    let cont = 0;
function desplegar(event){
    if(menu.style.display === 'none'){
        menu.style.display = 'block';
        event.target.src = 'img/UsuarioSAO_naranja.png';
        event.target.style = 'width: 100px; height: 100px;';
    }
    else{
    menu.style.display = 'none';
    event.target.src = 'img/UsuarioSAO.png';
    event.target.style = 'width: 100px; height: 100px;';
    }

    cont++;
    console.log(cont);

    if(cont == 7){
        let saludo= document.createElement('p');
        menu.append(saludo);
        saludoA = document.createElement('a');
        saludoA.href = 'https://julinza2007.github.io/biograf-a/';
        saludoA.textContent = '?';
        saludo.style.textAlign = 'center';
        saludo.append(saludoA);
    }
}