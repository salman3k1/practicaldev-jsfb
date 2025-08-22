/**
 * Returns a markup template string for property items.
 * @returns {string} A markup template string for property items.
*/
function PropertyItemsTemplate() {
  var propertiesTemplate = '';
  propertyStore.properties.forEach(function (property) {
    propertiesTemplate += PropertyTemplate(property);
  });
  return propertiesTemplate;
}

/**
 * Renders property items to an element with an id of properties-box. 
*/
function renderProperties() {
  var propertiesBox = document.getElementById('properties-box');
  propertiesBox.innerHTML = PropertyItemsTemplate();
}

renderProperties();


