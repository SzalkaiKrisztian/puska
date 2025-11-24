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
generateFrame("jsSection","jsTableRow",["Ókori település","Ágazat","Példa"])
generateTableBody(TableRowArr)
const tablaValasztoCheckBox = document.getElementById('tablaValaszto')
hideIfChecked(tablaValasztoCheckBox)
tablaValasztoCheckBox.addEventListener('change',valtozas)