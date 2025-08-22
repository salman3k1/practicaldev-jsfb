/**
 * @typedef PropertyData
 * @type {object}
 * @property {string} id Unique identifier for the property.
 * @property {string} title Title of the property.
 * @property {string} description Description of the property. Can be a html template string.
 * @property {string} image Source link of the property.
 * @property {'Luxury Villa'|'Penthouse'|'Apartment'|'Modern Condo'} type Type of the property.
 * @property {number} price Price of the property.
 * @property {number} bedrooms Number of bedrooms in the property.
 * @property {number} bathrooms Number of bathrooms in the property.
 * @property {number} area Area of the property in sq. meters.
 * @property {number} floor Floor on which the property resides.
 */

var PropertyTypes = {
    villa: "Luxury Villa",
    penthouse: "Penthouse",
    apartment: "Apartment",
    condo: "Modern Condo"
}
var dummyDescription = `
<p>
                Lorem <strong>ipsum dolor sit amet,</strong> Consectetur
                adipisicing elit. In fugit, quaerat excepturi culpa quidem
                obcaecati? Corrupti, praesentium?
                <a href="#.">at enim totam amet</a> placeat vero quaerat. maxime
                cumque unde soluta, eligendi officia dolore et saepe atque
                voluptatem distinctio assumenda, harum ipsam odit nostrum magnam
                odio voluptates. Cloud bread kogi bitters pitchfork shoreditch
                tumblr yr succulents single-origin coffee schlitz enamel pin you
                probably haven't heard of them ugh hella. <br /><br />Molestias
                fugiat doloribus maiores? Fuga rerum vel explicabo asperiores ad
                autem veritatis cupiditate qui. Ipsum esse a quaerat, enim,
                illum sed fuga, porro placeat repellendus sit commodi? Pariatur,
                architecto quas iste debitis, laudantium quaerat perspiciatis
                dolores optio delectus, hic vero. Iste suscipit saepe, adipisci,
                quidem temporibus cum expedita quasi, in at consequatur ipsum
                dolores delectus cupiditate perferendis? Voluptas, eligendi!
                Perferendis amet aliquam mollitia. Recusandae error voluptate
                laboriosam, aut totam officia.
              </p>
              `


/**
 * Raw data representing a list of property items.
 * @type {PropertyData[]}
 */
var propertiesDataRaw = [
    {
        id: "1",
        title: "18 Old Street Miami, OR 97219",
        description: dummyDescription,
        image: "assets/images/property-01.jpg",
        type: PropertyTypes.villa,
        price: 2264000,
        bedrooms: 8,
        bathrooms: 8,
        area: 545,
        floor: 3,
    },
    {
        id: "2",
        title: "54 New Street Florida, OR 27001",
        description: dummyDescription,
        image: "assets/images/property-02.jpg",
        type: PropertyTypes.villa,
        price: 1180000,
        bedrooms: 6,
        bathrooms: 5,
        area: 450,
        floor: 1,
    },
    {
        id: "3",
        title: "26 Mid Street Portland, OR 38540",
        description: dummyDescription,
        image: "assets/images/property-03.jpg",
        type: PropertyTypes.villa,
        price: 1460000,
        bedrooms: 5,
        bathrooms: 4,
        area: 225,
        floor: 2,
    },
    {
        id: "4",
        title: "12 Hope Street Portland, OR 12650",
        description: dummyDescription,
        image: "assets/images/property-04.jpg",
        type: PropertyTypes.apartment,
        price: 584500,
        bedrooms: 4,
        bathrooms: 3,
        area: 125,
        floor: 25
    },
    {
        id: "5",
        title: "34 Hope Street Portland, OR 42680",
        description: dummyDescription,
        image: "assets/images/property-05.jpg",
        type: PropertyTypes.penthouse,
        price: 925600,
        bedrooms: 4,
        bathrooms: 4,
        area: 180,
        floor: 38
    },
    {
        id: "6",
        title: "22 Hope Street Portland, OR 16540",
        description: dummyDescription,
        image: "assets/images/property-06.jpg",
        type: PropertyTypes.condo,
        price: 450000,
        bedrooms: 3,
        bathrooms: 2,
        area: 165,
        floor: 26
    },
    {
        id: "7",
        title: "14 Mid Street Miami, OR 36450",
        description: dummyDescription,
        image: "assets/images/property-03.jpg",
        type: PropertyTypes.villa,
        price: 980000,
        bedrooms: 8,
        bathrooms: 8,
        area: 550,
        floor: 3
    },
    {
        id: "8",
        title: "26 Old Street Miami, OR 12870",
        description: dummyDescription,
        image: "assets/images/property-02.jpg",
        type: PropertyTypes.villa,
        price: 1520000,
        bedrooms: 12,
        bathrooms: 15,
        area: 380,
        floor: 3
    },
    {
        id: "9",
        title: "34 New Street Miami, OR 24650",
        description: dummyDescription,
        image: "assets/images/property-01.jpg",
        type: PropertyTypes.villa,
        price: 3145000,
        bedrooms: 10,
        bathrooms: 12,
        area: 650,
        floor: 3
    },
];

/**
 * @constructor
 * @param {PropertyData} propertyData Raw data object representing a property item.
 */
function Property(propertyData) {
    this.id = propertyData.id;
    this.title = propertyData.title;
    this.description = propertyData.description;
    this.image = propertyData.image;
    this.type = propertyData.type;
    this.price = propertyData.price;
    this.bedrooms = propertyData.bedrooms;
    this.bathrooms = propertyData.bathrooms;
    this.area = propertyData.area;
    this.floor = propertyData.floor;

    this.priceFormatted = function () {
        return numeral(this.price).format('$0,0');
    }
    this.floorFormatted = function () {
        return numeral(this.floor).format('0o');
    }
}

/**
 * @constructor
 * Creates a new instance of the Property Data Store
 */
function PropertyStore() {
    this.properties = propertiesDataRaw.map(function (property) {
        return new Property(property);
    })

    /**
     * Finds and returns a property by its id.
     * @param {string} propertyId Unique Id of the property to find.
     * @returns {Property}
     */
    this.findProperty = function (propertyId) {
        for (var index = 0; index < this.properties.length; index++) {
            if (this.properties[index].id === propertyId) {
                return this.properties[index];
            }
        }
    }
}

var propertyStore = new PropertyStore();