import { propertiesOnSale, rentalProperties } from "./venta_alquiler.js";

const propertyOnSaleRow = document.querySelector("#venta");
const rentalPropertyRow = document.querySelector("#alquiler");

function generateCardRow(property, ele) {
  for (let i = 0; i < 3; ++i) {
    ele.innerHTML += `<div class="property-card">
        <div class="card-img">
        <img
        src=${property[i].src} 
            alt="property"
            />
            </div>
            <div class="card-body p-2">
            <h5>${property[i].nombre}</h5>
            <p>${property[i].descripcion}</p>
            <p>
            <i class="fas fa-map-marker-alt"></i>
            ${property[i].ubicacion}
            </p>
            <p>
            <i class="fas fa-bed"></i> ${property[i].habitaciones}  |
            <i class="fas fa-bath"></i> ${property[i].baños}
            </p>
            <p><i class="fas fa-dollar-sign"></i>
            ${property[i].costo.toLocaleString("es-CL")}</p>
             ${
               property[i].smoke
                 ? `<p class="text-success">
            <i class="fas fa-smoking"></i> Permitido fumar
            </p>`
                 : `<p class="text-danger">
            <i class="fa-solid fa-smoking-ban"></i> No se permite fumar
            </p>`
             } 
             ${
               property[i].pets
                 ? `<p class="text-success">
            <i class="fas fa-paw"></i> Mascotas permitidas
            </p>`
                 : `<p class="text-danger">
            <i class="fa-solid fa-ban"></i> No se permiten mascotas
            </p>`
             }
           
            </div>
            </div>`;
  }
}

generateCardRow(propertiesOnSale, propertyOnSaleRow);
generateCardRow(rentalProperties, rentalPropertyRow);
