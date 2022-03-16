var templates = {
    counterItem: function (data) {
        var id = data.id, name = data.name, cant = data.cant, calories = data.calories, totalCalories = data.totalCalories;
        return "\n            <div class=\"table-item--row\" data-idItem=".concat(id, ">\n                <p>").concat(name, "</p>\n                <p>").concat(cant, "</p>\n                <p>").concat(calories, "</p>\n                <p>").concat(totalCalories, "</p>\n                <span>\n                    <input class=\"button-delete\" data-idItem=").concat(id, " type=\"button\" value=\"delete\">\n                </span>\n            \n            </div>\n        ");
    },
    containerWithoutItems: function (data) {
        return "\n            <p class=\"table-item--message\" >Add new items using the form \uD83D\uDC47</p>\n        \n        ";
    }
};
function chooseTemplate(template) {
    switch (template) {
        case 'counterItem':
            return templates.counterItem;
            break;
        case 'containerWithoutItems':
            return templates.containerWithoutItems;
            break;
        default:
            break;
    }
}
function addDataInHtml(data, container, template) {
    var choosedTemplate = chooseTemplate(template);
    var parsedData = '';
    data.forEach(function (element) { return parsedData += choosedTemplate(element); });
    container.innerHTML = parsedData;
}
function addTextInHtml(text, container) {
    container.textContent = text;
}
function addEventListeners(data, listener, fn) {
    data.forEach(function (element) { return element.addEventListener(listener, fn); });
}
