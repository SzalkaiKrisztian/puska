//--------------------------------------------------------------------------Table------->
/**
 * letrehoz egy obj-os Arry-t a tablanak
 * @type {TableRowObj[]}
 */
const TableRowArr =[
    {
        telepules:"Athén",
        agazat1:"politika",
        pelda1:"demokrácia",
        agazat2:"tudomány",
        pelda2:"filozófia"
    },
    {
        telepules:"Egyiptom",
        agazat1:"mezőgazdaság",
        pelda1:"csatornák"
    },
    {
        telepules:"Spárta",
        agazat1:"neveléstudomány",
        pelda1:"agogé",
        agazat2:"harcászat",
        pelda2:"hoplita"
    }
]
generateFrame("jsSection","jsBody",["Ókori település","Ágazat","Példa"])
generateTableBody(TableRowArr)
//---------------------------------------------------------------------------Checkbox------>
const tablaValasztoCheckBox = document.getElementById('tablaValaszto')
hideIfChecked(tablaValasztoCheckBox)
tablaValasztoCheckBox.addEventListener('change',valtozas)
//-----------------1. commit-----------------------------------------------Form------>
/**
 * @type {jsFormObj[]} 
 */
const jsFormArr = [
    {
        jel:"telep",
        txt:"Ókori település:"
    },
    {
        jel:"agazat",
        txt:"Ágazat:"
    },
    {
        jel:"pelda",
        txt:"Példa:"
    },
    {
        jel:"agazat2",
        txt:"Másik Ágazat:"
    },
    {
        jel:"pelda2",
        txt:"Másik Példa:"
    }
]
const jsForm = generateForm("jsForm",jsFormArr)
const htmlForm = document.getElementById('htmlForm')
//-----------------2. commit------------------------------------------------eventListeners----->
htmlForm.addEventListener("submit",addToHtmlTable)
jsForm.addEventListener('submit',function(e){
    e.preventDefault()
    /**@type {HTMLFormElement} */
    const target = e.target

    /**
     * @type {TableRowObj}
     */
    const obj ={}

    /**@type {HTMLInputElement} */
    const telepInput = target.querySelector('#telep')
    /**@type {HTMLInputElement} */
    const agazatInput = target.querySelector('#agazat')
    /**@type {HTMLInputElement} */
    const peldaInput = target.querySelector('#pelda')
    /**@type {HTMLInputElement} */
    const agazat2Input = target.querySelector('#agazat2')
    /**@type {HTMLInputElement} */
    const pelda2Input = target.querySelector('#pelda2')

    if(validateFields(telepInput,agazatInput,peldaInput)){
        /**@type {string} */
        const telepString=telepInput.value
        /**@type {string} */
        const agazatString=agazatInput.value
        /**@type {string} */
        const peldaString=peldaInput.value
        /**@type {string} */
        const agazat2String=agazat2Input.value
        /**@type {string} */
        const pelda2String=pelda2Input.value

        obj.telepules=telepString
        obj.agazat1=agazatString
        obj.pelda1=peldaString
        agazat2String == '' ? obj.agazat2=undefined : obj.agazat2=agazat2String
        pelda2String == '' ? obj.pelda2=undefined : obj.pelda2=pelda2String

        TableRowArr.push(obj)
        generateTableBody(TableRowArr)
    }
})
//-----------------3. commit--------------------------------------------------------