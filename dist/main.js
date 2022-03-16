var counterItems;
var arrayDeleteEventListeners;
var $counterTable = document.querySelector('.table.items');
var $counterForm = document.getElementById('table-form');
var $counterFormButton = document.querySelector('.table-form input[type="button"]');
var $counterResults = document.querySelector('.table-results');
$counterForm.addEventListener('submit', addItem);
function calculateCalories(cant, calories) {
    return (parseInt(cant) * parseInt(calories));
}
function calculateTotalValues() {
    var $totalUnits = $counterResults.querySelector('.totalUnits > span');
    var $totalCalories = $counterResults.querySelector('.totalCalories > span');
    if (counterItems.length == 0) {
        $totalUnits.textContent = "0";
        $totalCalories.textContent = "0";
        return;
    }
    var totalUnits = 0;
    counterItems.forEach(function (item) { return totalUnits += item.calories; });
    var totalCalories = 0;
    counterItems.forEach(function (item) { return totalCalories += item.totalCalories; });
    $totalUnits.textContent = "".concat(totalUnits);
    $totalCalories.textContent = "".concat(totalCalories);
}
function loadData() {
    counterItems = getDataLS();
    if (counterItems.length == 0) {
        addDataInHtml(['add items 👇'], $counterTable, 'containerWithoutItems');
        calculateTotalValues();
        return;
    }
    addDataInHtml(counterItems, $counterTable, 'counterItem');
    calculateTotalValues();
    arrayDeleteEventListeners = counterItems.map(function (element) { return $counterTable.querySelector("[data-iditem=\"".concat(element.id, "\"]")); });
    addEventListeners(arrayDeleteEventListeners, 'click', deleteItem);
}
function addItem(e) {
    e.preventDefault();
    var $name = $counterForm.querySelector('[data="name"]');
    var $cant = $counterForm.querySelector('[data="cant"]');
    var $calories = $counterForm.querySelector('[data="calories"]');
    var totalCalories = calculateCalories($cant.value, $calories.value);
    var newData = {
        name: $name.value,
        cant: parseInt($cant.value),
        calories: parseInt($calories.value),
        totalCalories: totalCalories
    };
    addDataLS(newData);
    loadData();
}
function deleteItem(e) {
    removeDataLS(counterItems, e.target.dataset.iditem);
    loadData();
}
function init() {
    loadData();
}
init();
