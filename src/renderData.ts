const templates =  {

    counterItem: (data) => {
        const {id, name, cant, calories, totalCalories } = data
        return `
            <div class="table-item--row" data-idItem=${id}>
                <p>${name}</p>
                <p>${cant}</p>
                <p>${calories}</p>
                <p>${totalCalories}</p>
                <span>
                    <input class="button-delete" data-idItem=${id} type="button" value="delete">
                </span>
            
            </div>
        `
    },

    containerWithoutItems: (data) => {
        return `
            <p class="table-item--message" >Add new items using the form 👇</p>
        
        `
    }
  
}

function chooseTemplate(template: string): Function {
    switch (template) {
        case 'counterItem':
            return templates.counterItem
            break;
        case 'containerWithoutItems':
            return templates.containerWithoutItems
            break;
        default:
            break;
    }
}

function addDataInHtml(data: [string] | IcounterItem[], container: HTMLElement, template: string): void {

    let choosedTemplate = chooseTemplate(template)
    let parsedData = ''

    data.forEach((element) => parsedData += choosedTemplate(element) )
    
    container.innerHTML = parsedData

}

function addTextInHtml(text: string, container:HTMLElement): void {
    container.textContent = text
}

function addEventListeners(data: Element[], listener: string, fn): void {
    data.forEach(element => element.addEventListener(listener, fn))
}