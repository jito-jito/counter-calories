const storageName = "counterApp"

function getDataLS( ): Array<IcounterItem> | [] {
    const data: string | null = localStorage.getItem(storageName)
    if( data == null) {
        localStorage.setItem(storageName, JSON.stringify([]))
        return []
    }

    const parseData: Array<IcounterItem>  = JSON.parse(data)
    return parseData
}

function clearDataLS(): void {
    localStorage.setItem(storageName, "[]")
    return
}

function addDataLS(data: IcounterItem): void {
    const currentData: Array<IcounterItem>  = getDataLS()
    
    currentData.length === 0 ? data.id = 1 : data.id = currentData.length + 1
    currentData.push(data)
    localStorage.setItem(storageName,  JSON.stringify(currentData))
   
    return 
}

function removeDataLS(data: Array<IcounterItem>, id: number | string): void {
    const newData = data.filter(items => items.id != id )
    counterItems = newData
    localStorage.setItem(storageName, JSON.stringify(newData))

    return
}