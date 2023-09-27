import {
  propertiesOnSale,
  rentalProperties,
  generateTemplate,
} from "./venta_alquiler.js";

const propertyOnSaleRow = document.querySelector("#venta");
const rentalPropertyRow = document.querySelector("#alquiler");
const threePropertiesOnSale = propertiesOnSale.slice(0, 3);
const threeRentalProperties = rentalProperties.slice(0, 3);
console.log(threePropertiesOnSale);

generateTemplate(threePropertiesOnSale, propertyOnSaleRow);
generateTemplate(threeRentalProperties, rentalPropertyRow);

