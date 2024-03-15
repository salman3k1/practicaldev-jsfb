var propertiesBox = document.getElementById('properties-box');
var propertyTemplate = `
<div
            class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv"
          >
            <div class="item">
              <button class="action-button edit-action-button">
                <i class="fa fa-pencil"></i>
              </button>
              <button class="action-button delete-action-button">
                <i class="fa fa-trash"></i>
              </button>
              <a href="property-details.html">
                <div class="image-container">
                  <img
                    src="assets/images/property-01.jpg"
                    alt="property-image"
                  />
                </div>
              </a>
              <span class="category">Luxury Villa</span>
              <h6>$2,264,000</h6>
              <h4>
                <a href="property-details.html"
                  >18 Old Street Miami, OR 97219</a
                >
              </h4>
              <ul>
                <li>Bedrooms: <span>8</span></li>
                <li>Bathrooms: <span>8</span></li>
                <li>
                  Area: <span>545m<sup>2</sup></span>
                </li>
                <li>Floor: <span>3</span></li>
              </ul>
              <div class="main-button">
                <a href="property-details.html">View Details</a>
              </div>
            </div>
          </div>`;

var propertiesData = [{}, {}, {}, {}];
var propertiesTemplate = '';
propertiesData.forEach(function (property) {
  propertiesTemplate += propertyTemplate;
});

console.log(propertiesTemplate);

propertiesBox.innerHTML = propertiesTemplate;
