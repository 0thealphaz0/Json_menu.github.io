// Estructura de datos JSON para el menú
var menuData = [
  { "menu": "Inicio", "clase": "menu"},
  { "menu": "Acerca de nosotros", "clase": "menu"},
  { 
    "menu": "Productos", 
    "clase": "menu",
    "submenu": [
      { "menu": "Producto 1", "clase": "sub_menu" },
      { "menu": "Producto 2", "clase": "sub_menu" }
    ]
  },
  { "menu": "Contacto", "clase": "menu"}
];

// Función para crear el menú
function crearMenu(data, clase) {
  let menu = document.createElement('ul');
  menu.className = clase;

  data.forEach(function(item) {
    let menuItem = document.createElement('li');
    menuItem.className = item.clase;
    
    let link = document.createElement('a');
    link.textContent = item.menu;
    link.href = "#";
    link.className = item.menu;
    menuItem.appendChild(link);

    // Si el elemento del menú tiene un submenú, lo creamos
    if (item.submenu) {
      let submenu = crearMenu(item.submenu, item.clase + '-submenu');
      menuItem.appendChild(submenu);
    }

    menu.appendChild(menuItem);
  });

  return menu;
}

// Crear y agregar el menú al cuerpo del documento
let header = document.createElement('header');
let nav = document.createElement('nav');
nav.appendChild(crearMenu(menuData, 'menu-principal'));
header.appendChild(nav);
document.body.appendChild(header);