const propertyOnSaleContainter = document.querySelector(".sale-property-cont");
const rentalPropertyContainer = document.querySelector(".rental-property-cont");
const propertiesOnSale = [
  {
    nombre: "Casa de lujo",
    src: "./assets/img/onsale-property-1.avif",
    alt: "property on sale",
    descripcion: "Esta casa es solo para aquellos amantes de la riqueza",
    ubicacion: "3 VLY Road, Apt 1, Colonie, NY 12205",
    habitaciones: 3,
    baños: 3,
    costo: 50000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa moderna",
    src: "./assets/img/onsale-property-2.avif",
    alt: "property on sale",
    descripcion: `Casa moderna para una familia grande que 
    busca tranquilidad y paz.`,
    ubicacion: "635 CLEARWATER DRIVE, Delta Junction, AR 99737",
    habitaciones: 5,
    baños: 3,
    costo: 100000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa alejada de la ciudad",
    src: "./assets/img/onsale-property-3.avif",
    alt: "property on sale",
    descripcion: "Casa alejada de la ciudad en una zona segura y tranquila.",
    ubicacion: "650 SW 2nd Avenue, Apt 250-E, Boca Raton, FL 33432",
    habitaciones: 3,
    baños: 2,
    costo: 20000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa con piscina",
    src: "./assets/img/onsale-property-4.avif",
    alt: "property on sale",
    descripcion: "Casa moderna con piscina grande.",
    ubicacion: "5280 N Ocean Drive, Apt 5a, Riviera Beach, FL 33404",
    habitaciones: 4,
    baños: 1,
    costo: 100000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa playera",
    src: "./assets/img/onsale-property-5.avif",
    alt: "property on sale",
    descripcion: "Casa estilo playera para familia grande. Ideal para verano.",
    ubicacion: "5053 S La Sedona Circle, Delray Beach, FL 33484",
    habitaciones: 8,
    baños: 4,
    costo: 1000000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa futurista",
    src: "./assets/img/onsale-property-6.avif",
    alt: "property on sale",
    descripcion: "Casa con estilo futurista, alejada de la ciudad.",
    ubicacion: "2320 Saratoga Bay Drive, West Palm Beach, FL 33409",
    habitaciones: 5,
    baños: 5,
    costo: 2500000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa lujosa con piscina grande",
    src: "./assets/img/onsale-property-7.avif",
    alt: "property on sale",
    descripcion: "Casa moderna con ventanales y piscina grande para los niños.",
    ubicacion: "145 Atlantis Boulevard, Apt 307, Atlantis, FL 33462",
    habitaciones: 6,
    baños: 2,
    costo: 9000000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Departamento lujoso",
    src: "./assets/img/onsale-property-8.avif",
    alt: "property on sale",
    descripcion: "Departamento de lujo con vista al centro de la ciudad",
    ubicacion: "17817 81st Lane N, Loxahatchee, FL 33470",
    habitaciones: 4,
    baños: 1,
    costo: 999000,
    smoke: false,
    pets: true,
  },
];
const rentalProperties = [
  {
    nombre: "Departamento espacioso",
    src: "./assets/img/rental-property-1.avif",
    alt: "rental department",
    descripcion: "Departamento espacioso para dos personas",
    ubicacion: "853 W Blackhawk St, Chicago, IL 60642",
    habitaciones: 3,
    baños: 2,
    costo: 5000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Departamento lujoso",
    src: "./assets/img/rental-property-2.avif",
    alt: "rental department",
    descripcion: "Departamento lujoso para personas adineradas",
    ubicacion: "2401 S State St, Chicago, IL 60616",
    habitaciones: 4,
    baños: 3,
    costo: 50000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Departamento acogedor",
    src: "./assets/img/rental-property-3.avif",
    alt: "rental department",
    descripcion: "Espacio acogedor para aquellos que trabajan sin salir",
    ubicacion: " 400 E South Water St, Chicago, IL 60601 ",
    habitaciones: 4,
    baños: 1,
    costo: 90000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa de campo",
    src: "./assets/img/rental-property-4.avif",
    alt: "rental property",
    descripcion: "Casa alejada de la ciudad con amplios espacios",
    ubicacion: " 3233 S King Dr, Chicago, IL 60616 ",
    habitaciones: 5,
    baños: 3,
    costo: 900000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento titánico",
    src: "./assets/img/rental-property-5.avif",
    alt: "rental department",
    descripcion: "Espacios grandes y altos",
    ubicacion: "1457 N Halsted St, Chicago, IL 60642",
    habitaciones: 5,
    baños: 3,
    costo: 10000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa lujosa",
    src: "./assets/img/rental-property-6.avif",
    alt: "rental property",
    descripcion: "Casa con interiores de lujo",
    ubicacion: " 14 W Superior St, Chicago, IL 60654 ",
    habitaciones: 3,
    baños: 2,
    costo: 100000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Mansión de lujo",
    src: "./assets/img/rental-property-7.avif",
    descripcion: "Mansión gigantesca con piscina de 50 metros",
    ubicacion: "625 W Division St, Chicago, IL 60610",
    habitaciones: 8,
    baños: 5,
    costo: 1000000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa europea",
    src: "./assets/img/rental-property-8.avif",
    alt: "rental property",
    descripcion: "Casa con arquitectura europea",
    ubicacion: " 100 W 31st St, New York, NY 10001 ",
    habitaciones: 3,
    baños: 1,
    costo: 10000,
    smoke: false,
    pets: true,
  },
];
const generateTemplate = (obj, ele) => {
  for (let i = 0; i < obj.length; ++i) {
    if (ele) {
      ele.innerHTML += `<div class="property-card">
    <div class="card-img">
      <img
        src=${obj[i].src} 
        alt="property"
      />
    </div>
    <div class="card-body">
      <h5>${obj[i].nombre}</h5>
      <p>${obj[i].descripcion}</p>
      <p>
        <i class="fas fa-map-marker-alt"></i>
        ${obj[i].ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${obj[i].habitaciones}  |
        <i class="fas fa-bath"></i> ${obj[i].baños}
      </p>
      <p><i class="fas fa-dollar-sign"></i>
      ${obj[i].costo.toLocaleString("es-CL")}</p>
    </div>
    </div>`;
    }
  }
};

function showPermissionStatus(obj, card) {
  for (let i = 0; i < card.length; ++i) {
    if (obj[i].smoke) {
      card[i].innerHTML += ` <p class="text-success">
        <i class="fas fa-smoking"></i> Permitido fumar
        </p>`;
    } else {
      card[i].innerHTML += `<p class="text-danger">
        <i class="fa-solid fa-smoking-ban"></i> No se permite fumar
        </p>`;
    }
    if (obj[i].pets) {
      card[i].innerHTML += `<p class="text-success">
        <i class="fas fa-paw"></i> Mascotas permitidas
        </p>`;
    } else {
      card[i].innerHTML += `<p class="text-danger">
        <i class="fa-solid fa-ban"></i> No se permiten mascotas
        </p>`;
    }
  }
}
const bodyCard = document.getElementsByClassName("card-body");
window.addEventListener("DOMContentLoaded", () => {
  if (propertyOnSaleContainter) {
    generateTemplate(propertiesOnSale, propertyOnSaleContainter);
    showPermissionStatus(propertiesOnSale, bodyCard);
  }
  if (rentalPropertyContainer) {
    generateTemplate(rentalProperties, rentalPropertyContainer);
    showPermissionStatus(rentalProperties, bodyCard);
  }
});
