let menu = document.createElement('div');
    menu.style.display = 'none';
    menu.id = 'menu';
    document.querySelector('#desplegable').append(menu);
    let p= document.createElement('p');


    let p2= document.createElement('p');
    menu.append(p2);
    let a2= document.createElement('a');
    a2.href = 'https://julinza2007.github.io/biograf-a/';
    a2.textContent = 'Mi Biografía';
    p2.append(a2);

    
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
        event.target.style = 'width: 150px; height: 150px;';
    }
    else{
    menu.style.display = 'none';
    event.target.src = 'img/UsuarioSAO.png';
    event.target.style = 'width: 150px; height: 150px;';
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

const COLORS = [
  "#fff2",
  "#fff4",
  "#fff7",
  "#fffc",
  "#ffd7d7",
  "#ffc5c5",
  "#ffb6b6",
  "#ff99cc",
  "#ff66cc",
  "#ff33cc",
  "#cc66ff",
  "#cc33ff",
  "#9966ff",
  "#6633ff",
  "#3300ff",
  "#0000ff",
  "#00ccff",
  "#00ffff",
  "#33cccc",
  "#66cccc",
  "#99cccc",
  "#cccccc",
  "#ffcc00",
  "#ffd700",
  "#ff9900",
  "#ff6600",
  "#ff3300",
  "#cc3300",
  "#993300",
  "#663300",
  "#330000",
];

const generateSpaceLayer = (size, selector, totalStars, duration) => {
  const layer = [];
  for (let i = 0; i < totalStars; i++) {
    let color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
  }
  const container = document.querySelector(selector);
  container.style.setProperty("--size", size);
  container.style.setProperty("--duration", duration);
  container.style.setProperty("--space-layer", layer.join(","));
};

const updateStarsColor = (selector, colors, interval) => {
  const stars = document.querySelectorAll(selector);
  let currentColorIndex = 0;
  setInterval(() => {
    stars.forEach((star) => {
      star.style.setProperty("--color", colors[currentColorIndex]);
    });
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  }, interval);
};

generateSpaceLayer("2px", ".space-1", 250, "25s");
generateSpaceLayer("3px", ".space-2", 100, "20s");
generateSpaceLayer("6px", ".space-3", 25, "15s");

updateStarsColor(".star", COLORS, 5000);