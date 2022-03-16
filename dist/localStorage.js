var storageName = "counterApp";
function getDataLS() {
    var data = localStorage.getItem(storageName);
    if (data == null) {
        localStorage.setItem(storageName, JSON.stringify([]));
        return [];
    }
    var parseData = JSON.parse(data);
    return parseData;
}
function clearDataLS() {
    localStorage.setItem(storageName, "[]");
    return;
}
function addDataLS(data) {
    var currentData = getDataLS();
    currentData.length === 0 ? data.id = 1 : data.id = currentData.length + 1;
    currentData.push(data);
    localStorage.setItem(storageName, JSON.stringify(currentData));
    return;
}
function removeDataLS(data, id) {
    var newData = data.filter(function (items) { return items.id != id; });
    counterItems = newData;
    localStorage.setItem(storageName, JSON.stringify(newData));
    return;
}
