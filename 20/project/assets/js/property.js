/** 
 * Returns a markup template string for a single property item.
 * @param {Property} property Data object representing a single property item.
 * @returns {string} A markup template string for the property item.
*/
function PropertyTemplate(property) {
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
              <a href="property-details.html?id=${property.id}">
                <div class="image-container">
                  <img
                    src="${property.image ? property.image : "assets/images/properteez-placeholder.jpg"}"
                    alt="property-image"
                  />
                </div>
              </a>
              <span class="category">${property.type ? property.type : "-"}</span>
              <h6>${property.price ? property.priceFormatted() : "-"}</h6>
              <h4>
                <a href="property-details.html?id=${property.id}"
                  >${property.title ? property.title : "-"}</a
                >
              </h4>
              <ul>
                <li>Bedrooms: <span>${property.bedrooms ? property.bedrooms : "-"}</span></li>
                <li>Bathrooms: <span>${property.bathrooms ? property.bathrooms : "-"}</span></li>
                <li>
                  Area: <span>${property.area ? `${property.area}m<sup>2</sup>` : "-"}</span>
                </li>
                <li>Floor: <span>${property.floor ? property.floorFormatted() : "-"}</span></li>
              </ul>
              <div class="main-button">
                <a href="property-details.html?id=${property.id}">View Details</a>
              </div>
            </div>
          </div>`;
};