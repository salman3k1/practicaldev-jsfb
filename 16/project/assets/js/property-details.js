/**
 * Returns a markup template string for property details heading section.
 * @param {Property} propertyData Data accepted by the template.
 * @returns {string} A markup template string for property details heading section.
 */
function SinglePropertyHeadingTemplate(propertyData) {
    return `
        <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <span class="breadcrumb"
              ><a href="#">Home</a> / ${propertyData.title}</span
            >
            <h3>${propertyData.title}</h3>
          </div>
        </div>
      </div>
    `
}

/**
 * Returns a markup template string for property details main section.
 * @param {Property} propertyData Data accepted by the template.
 * @returns {string} A markup template string for property details heading section.
*/
function SinglePropertyDetailsTemplate(propertyData) {
    return `
          <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="main-image">
              <img src="${propertyData.image}" alt="Property Image" />
            </div>
            <div class="main-content">
              <div class="tag-container d-flex justify-content-between">
                <div>
                  <span class="tag type">${propertyData.type}</span>
                  <span class="tag price">${propertyData.priceFormatted()}</span>
                </div>
                <div>
                  <button
                    id="delete-property-button"
                    class="main-action-button btn btn-secondary btn-sm"
                  >
                    Delete<i class="fa fa-trash ms-1"></i>
                  </button>
                  <button
                    id="edit-property-button"
                    class="main-action-button btn btn-secondary btn-sm"
                  >
                    Edit<i class="fa fa-pencil ms-1"></i>
                  </button>
                </div>
              </div>

              <h4>${propertyData.title}</h4>
              ${propertyData.description}
            </div>
          </div>
          <div class="col-lg-4">
            <div class="info-table">
              <ul>
                <li>
                  <img src="assets/images/scale-svgrepo-com.svg" alt="" />
                  <h4>${propertyData.area} m<sup>2</sup><br /><span>Total Space</span></h4>
                </li>
                <li>
                  <img
                    src="assets/images/bedroom-sleeping-svgrepo-com.svg"
                    alt=""
                  />
                  <h4>${propertyData.bedrooms}<br /><span>Bedrooms</span></h4>
                </li>
                <li>
                  <img src="assets/images/bath-svgrepo-com.svg" alt="" />
                  <h4>${propertyData.bathrooms}<br /><span>Bathrooms</span></h4>
                </li>
                <li>
                  <img src="assets/images/floor-plan-svgrepo-com.svg" alt="" />
                  <h4>${propertyData.floorFormatted()}<br /><span>Floor</span></h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
}

/**
 * Renders dynamic sections on the property-details page. 
*/
function renderProperty() {
    var pageHeading = document.querySelector(".page-heading");
    pageHeading.innerHTML = SinglePropertyHeadingTemplate(propertiesData[1]);
    var propertyDetails = document.querySelector(".single-property");
    propertyDetails.innerHTML = SinglePropertyDetailsTemplate(propertiesData[1]);
}

renderProperty();


