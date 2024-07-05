import { calculatorHandler } from "./calculator"
import { cardHandler, deletHandler, manageInventoryHandler } from "./handler"
import { newproductHandler } from "./newitem"
import { addBtn, cardGroup, closeBtn, manageInventory, numberGroup, productGroup } from "./selector"

const listeners=()=>{
   
   
    cardGroup.addEventListener('click',cardHandler)
    numberGroup.addEventListener('click',calculatorHandler)
    productGroup.addEventListener('dblclick',deletHandler)
    addBtn.addEventListener('click',newproductHandler)
}

export default listeners