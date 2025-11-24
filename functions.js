/**
 * @typedef {{telepules:string,agazat1:string,pelda1:string,agazat2?:string,pelda2?:string}} TableRowObj
 * @typedef {{jel:string,txt:string}} jsFormObj
 */
/**
 * letrahoza egy sornak a celláját
 * @param {"td"|"th"} cellType 
 * @param {string} tartalom 
 * @param {HTMLTableRowElement} parentTr 
 * @returns {HTMLTableCellElement}
 */
function generateTableCell(cellType,tartalom,parentTr){
    const tdvth = document.createElement(cellType)
    tdvth.innerText=tartalom
    parentTr.appendChild(tdvth)
    return tdvth
}
/**
 * létrehozza a keretRendszert a tablenek headerrel és egy bodyval
 * @param {string} sectionId 
 * @param {string} tbodyId
 * @param {string[]} fejlec
 * @returns {void} 
 */
function generateFrame(sectionId,tbodyId,fejlec){
    
    const divTableSelector = document.getElementById('tableSelector')

    const divJsSection = document.createElement('div')
    divJsSection.id = sectionId
    divJsSection.classList.add('hide')
    divTableSelector.appendChild(divJsSection)

    const table = document.createElement('table')
    divJsSection.appendChild(table)

    const thead=document.createElement('thead')
    table.appendChild(thead)

    const cimSorTr = document.createElement('tr')
    thead.appendChild(cimSorTr)

    for(const cim of fejlec){
        generateTableCell("th",cim,cimSorTr)
    }

    const tbody = document.createElement('tbody')
    tbody.id = tbodyId
    table.appendChild(tbody)
}
/**
 * létrehozza a a tbodynak egy sorát
 * @param {HTMLTableSectionElement} parentBodyId 
 * @param {TableRowObj} obj 
 * @returns {void}
 */
function generateTableRow(parentBodyId,obj){
    const trAlap =document.createElement('tr')
    parentBodyId.appendChild(trAlap)

    const tdT=generateTableCell("td",obj.telepules,trAlap)
    generateTableCell("td",obj.agazat1,trAlap)
    generateTableCell("td",obj.pelda1,trAlap)
    if(obj.agazat2 && obj.pelda2){
        tdT.rowSpan=2
        const trHozza = document.createElement('tr')
        parentBodyId.appendChild(trHozza)
        generateTableCell("td",obj.agazat2,trHozza)
        generateTableCell("td",obj.pelda2,trHozza)
    }
}
/**
 * létrehozza ailletve feltölti a table-nak a body-jat
 * @param {TableRowObj[]} arr 
 * @returns {void}
 */
function generateTableBody(arr){
    const tbody = document.getElementById('jsBody')

    for(const obj of arr){
        generateTableRow(tbody,obj)
    }
}
/**
 * atvaltoztatja jelölés esetén a masikra
 * @param {HTMLInputElement} negyzet 
 * @returns {void}
 */
function hideIfChecked(negyzet){
    pipaltakE=negyzet.checked
    const tableSelectorDiv = negyzet.parentElement
    if(pipaltakE){
        const htmlDiv = tableSelectorDiv.querySelector('#htmlSection')
        htmlDiv.classList.add('hide')
        const jsDiv = tableSelectorDiv.querySelector('#jsSection')
        jsDiv.classList.remove('hide')
    }else{
        const htmlDiv = tableSelectorDiv.querySelector('#htmlSection')
        htmlDiv.classList.remove('hide')
        const jsDiv = tableSelectorDiv.querySelector('#jsSection')
        jsDiv.classList.add('hide')
    }
}
/**
 * eseménykezelésre meghivja a hideifcheccked fuggvenyt
 * @param {Event} e 
 * @returns {void}
 */
function valtozas(e){
    e.preventDefault()
    /**@type {Event} */
    const target = e.target
    hideIfChecked(target)
}
//-------------------------------------1. Commit------------------------------------------
/**
 *  a sortörés szokásos sorait kiszervezem egy fuggvenybe mert 3x hivom meg
 * @param {HTMLDivElement} parentDiv 
 * @returns {void}
 */
function bR(parentDiv){
    const br = document.createElement('br')
    parentDiv.appendChild(br)
}
/**
 *  létrehooza a html form deveket, it még nem különböznek
 * @param {HTMLFormElement} parentForm 
 * @param {string} labinpId 
 * @param {string} labContent 
 * @returns {void}
 */
function generateFormDiv(parentForm,labinpId,labContent){
    const div = document.createElement('div')
    parentForm.appendChild(div)

    const label = document.createElement('label')
    label.htmlFor=labinpId
    label.innerText=labContent
    div.appendChild(label)
    bR(div)

    const input = document.createElement('input')
    input.type="text"
    input.id=labinpId
    input.name=labinpId
    div.appendChild(input)
    bR(div)

    const span = document.createElement('span')
    span.classList.add('error')
    div.appendChild(span)
    bR(div)
}
/**
 * itt már különböznek itt 5 beviteli mező van és arryból visszük be az adatokat
 * @param {string} formId 
 * @param {jsFormObj[]} arrForm 
 * @returns {HTMLFormElement}
 */
function generateForm(formId,arrForm){
    const jsSection= document.getElementById('jsSection')

    const form = document.createElement('form')
    form.id=formId
    jsSection.appendChild(form)
    
    for(const cim of arrForm){
        generateFormDiv(form,cim.jel,cim.txt)
    }

    const button = document.createElement('button')
    button.innerText="Hozzáadás"
    form.appendChild(button)
    return form
}
//------------------------------------2. commit------------------------------------------
