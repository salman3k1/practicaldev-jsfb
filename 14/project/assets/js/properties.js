var propertiesBox = document.getElementById('properties-box');

var propertiesTemplate = '';
propertiesData.forEach(function (property) {
  propertiesTemplate += propertyTemplate(property);
});

propertiesBox.innerHTML = propertiesTemplate;
