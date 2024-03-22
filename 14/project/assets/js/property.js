function propertyTemplate(property) {
  return `
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
                    src="${property.image}"
                    alt="property-image"
                  />
                </div>
              </a>
              <span class="category">${property.type}</span>
              <h6>${property.priceFormatted ? property.priceFormatted() : '-'}</h6>
              <h4>
                <a href="property-details.html"
                  >${property.title}</a
                >
              </h4>
              <ul>
                <li>Bedrooms: <span>${property.bedrooms}</span></li>
                <li>Bathrooms: <span>${property.bathrooms}</span></li>
                <li>
                  Area: <span>${property.area}m<sup>2</sup></span>
                </li>
                <li>Floor: <span>${property.floorFormatted ? property.floorFormatted() : '-'}</span></li>
              </ul>
              <div class="main-button">
                <a href="property-details.html">View Details</a>
              </div>
            </div>
          </div>`;
};