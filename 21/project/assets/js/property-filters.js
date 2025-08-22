var filterValues = {
    minArea: 0,
    maxArea: 0,
    bedrooms: 0,
    bathrooms: 0,
    type: "All"
};

/**
 * Binds change events on input fields from the filter form.
*/
function bindFilterChangeEvents() {
    var maxAreaInputField = document.getElementById("filterMaxArea");
    var bedroomsInputField = document.getElementById("filterBedrooms");
    var bathroomsInputField = document.getElementById("filterBathrooms");
    var propertyTypeInputFields = document.querySelectorAll(".property-types-radio input");


    maxAreaInputField.oninput = handleFilterFieldInput;
    bedroomsInputField.addEventListener("input", handleFilterFieldInput)
    bathroomsInputField.addEventListener("input", handleFilterFieldInput)
    propertyTypeInputFields.forEach(function (inputField) {
        inputField.addEventListener("input", handleFilterFieldInput)
    })
}

bindFilterChangeEvents();

/**
 * Input event handler for input fields in the filters section.
 * @param {Event} e Event.
*/
function handleFilterFieldInput(e) {
    filterValues[e.target.name] = e.target.value;
    var valuePlaceholder = e.target.parentNode.querySelector(".value-placeholder");
    if (valuePlaceholder) {
        valuePlaceholder.value = e.target.value;
    }
}