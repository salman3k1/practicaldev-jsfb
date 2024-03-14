var propertiesBox = document.getElementById('properties-box');
var propertiesTemplate = `
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
          </div>
          <div
            class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 str"
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
                    src="assets/images/property-02.jpg"
                    alt="property-image"
                  />
                </div>
              </a>
              <span class="category">Luxury Villa</span>
              <h6>$1,180,000</h6>
              <h4>
                <a href="property-details.html"
                  >54 New Street Florida, OR 27001</a
                >
              </h4>
              <ul>
                <li>Bedrooms: <span>6</span></li>
                <li>Bathrooms: <span>5</span></li>
                <li>
                  Area: <span>450m<sup>2</sup></span>
                </li>
                <li>Floor: <span>3</span></li>
              </ul>
              <div class="main-button">
                <a href="property-details.html">View Details</a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv rac"
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
                    src="assets/images/property-03.jpg"
                    alt="property-image"
                  />
                </div>
              </a>
              <span class="category">Luxury Villa</span>
              <h6>$1,460,000</h6>
              <h4>
                <a href="property-details.html"
                  >26 Mid Street Portland, OR 38540</a
                >
              </h4>
              <ul>
                <li>Bedrooms: <span>5</span></li>
                <li>Bathrooms: <span>4</span></li>
                <li>
                  Area: <span>225m<sup>2</sup></span>
                </li>
                <li>Floor: <span>3</span></li>
              </ul>
              <div class="main-button">
                <a href="property-details.html">View Details</a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 str"
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
                    src="assets/images/property-04.jpg"
                    alt="property-image"
                  />
                </div>
              </a>
              <span class="category">Apartment</span>
              <h6>$584,500</h6>
              <h4>
                <a href="property-details.html"
                  >12 Hope Street Portland, OR 12650</a
                >
              </h4>
              <ul>
                <li>Bedrooms: <span>4</span></li>
                <li>Bathrooms: <span>3</span></li>
                <li>
                  Area: <span>125m<sup>2</sup></span>
                </li>
                <li>Floor: <span>25th</span></li>
              </ul>
              <div class="main-button">
                <a href="property-details.html">View Details</a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac str"
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
                    src="assets/images/property-05.jpg"
                    alt="property-image"
                  />
                </div>
              </a>
              <span class="category">Penthouse</span>
              <h6>$925,600</h6>
              <h4>
                <a href="property-details.html"
                  >34 Hope Street Portland, OR 42680</a
                >
              </h4>
              <ul>
                <li>Bedrooms: <span>4</span></li>
                <li>Bathrooms: <span>4</span></li>
                <li>
                  Area: <span>180m<sup>2</sup></span>
                </li>
                <li>Floor: <span>38th</span></li>
              </ul>
              <div class="main-button">
                <a href="property-details.html">View Details</a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv"
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
                    src="assets/images/property-06.jpg"
                    alt="property-image"
                  />
                </div>
              </a>
              <span class="category">Modern Condo</span>
              <h6>$450,000</h6>
              <h4>
                <a href="property-details.html"
                  >22 Hope Street Portland, OR 16540</a
                >
              </h4>
              <ul>
                <li>Bedrooms: <span>3</span></li>
                <li>Bathrooms: <span>2</span></li>
                <li>
                  Area: <span>165m<sup>2</sup></span>
                </li>
                <li>Floor: <span>26th</span></li>
              </ul>
              <div class="main-button">
                <a href="property-details.html">View Details</a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac str"
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
                    src="assets/images/property-03.jpg"
                    alt="property-image"
                  />
                </div>
              </a>
              <span class="category">Luxury Villa</span>
              <h6>$980,000</h6>
              <h4>
                <a href="property-details.html"
                  >14 Mid Street Miami, OR 36450</a
                >
              </h4>
              <ul>
                <li>Bedrooms: <span>8</span></li>
                <li>Bathrooms: <span>8</span></li>
                <li>
                  Area: <span>550m<sup>2</sup></span>
                </li>
                <li>Floor: <span>3</span></li>
              </ul>
              <div class="main-button">
                <a href="property-details.html">View Details</a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv"
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
                    src="assets/images/property-02.jpg"
                    alt="property-image"
                  />
                </div>
              </a>
              <span class="category">Luxury Villa</span>
              <h6>$1,520,000</h6>
              <h4>
                <a href="property-details.html"
                  >26 Old Street Miami, OR 12870</a
                >
              </h4>
              <ul>
                <li>Bedrooms: <span>12</span></li>
                <li>Bathrooms: <span>15</span></li>
                <li>
                  Area: <span>380m<sup>2</sup></span>
                </li>
                <li>Floor: <span>3</span></li>
              </ul>
              <div class="main-button">
                <a href="property-details.html">View Details</a>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv"
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
              <h6>$3,145,000</h6>
              <h4>
                <a href="property-details.html"
                  >34 New Street Miami, OR 24650</a
                >
              </h4>
              <ul>
                <li>Bedrooms: <span>10</span></li>
                <li>Bathrooms: <span>12</span></li>
                <li>
                  Area: <span>860m<sup>2</sup></span>
                </li>
                <li>Floor: <span>3</span></li>
              </ul>
              <div class="main-button">
                <a href="property-details.html">View Details</a>
              </div>
            </div>
          </div>
`;
propertiesBox.innerHTML = propertiesTemplate;
// console.log(propertiesBox.innerText);