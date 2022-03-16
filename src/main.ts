// types
interface IcounterItem {
    id?: number,
    name: string,
    cant: string | number,
    calories: number,
    totalCalories: number
}

let counterItems: Array<IcounterItem> | []
let arrayDeleteEventListeners: Element[]

const $counterTable: HTMLElement = document.querySelector('.table.items') 
const $counterForm: HTMLElement = document.getElementById('table-form')
const $counterFormButton: HTMLInputElement = document.querySelector('.table-form input[type="button"]')
const $counterResults: HTMLElement = document.querySelector('.table-results')


$counterForm.addEventListener('submit', addItem)


function calculateCalories(cant: string, calories: string): number {
    return (parseInt(cant) * parseInt(calories))
}

function calculateTotalValues() {

    const $totalUnits: HTMLElement = $counterResults.querySelector('.totalUnits > span')
    const $totalCalories: HTMLElement = $counterResults.querySelector('.totalCalories > span')

    if(counterItems.length == 0) {
        $totalUnits.textContent = `0`
        $totalCalories.textContent = `0`

        return
    }

    let totalUnits = 0
    counterItems.forEach((item) => totalUnits += item.calories)
    let totalCalories = 0
    counterItems.forEach((item) => totalCalories += item.totalCalories)

    $totalUnits.textContent = `${totalUnits}`
    $totalCalories.textContent = `${totalCalories}`
    
}

function loadData(): void {
    counterItems = getDataLS()
    if(counterItems.length == 0) {
        addDataInHtml(['add items 👇'], $counterTable, 'containerWithoutItems')
        calculateTotalValues()
        return
    }


    addDataInHtml(counterItems, $counterTable, 'counterItem')
    calculateTotalValues()

    arrayDeleteEventListeners = counterItems.map(element => $counterTable.querySelector(`[data-iditem="${element.id}"]`))
    addEventListeners(arrayDeleteEventListeners, 'click', deleteItem)

}

function addItem(e): void {
    e.preventDefault()
    const $name: HTMLInputElement = $counterForm.querySelector('[data="name"]')
    const $cant: HTMLInputElement = $counterForm.querySelector('[data="cant"]')
    const $calories: HTMLInputElement = $counterForm.querySelector('[data="calories"]')

    const totalCalories = calculateCalories($cant.value, $calories.value)
    
    const newData: IcounterItem = {
        name: $name.value,
        cant: parseInt($cant.value),
        calories: parseInt($calories.value),
        totalCalories: totalCalories
    }

    addDataLS(newData)
    loadData()

}

function deleteItem(e): void {
    removeDataLS(counterItems, e.target.dataset.iditem)

    loadData()
}

function init(): void {
    loadData()
} 

init()
