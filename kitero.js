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
        jel:"masikAgazat",
        txt:"Másik Ágazat:"
    },
    {
        jel:"masikPelda",
        txt:"Másik Példa:"
    }
]
const jsForm = generateForm("jsForm",jsFormArr)
const htmlForm = document.getElementById('htmlForm')
//-----------------2. commit------------------------------------------------eventListeners----->