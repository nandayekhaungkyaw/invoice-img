import { calculatorHandler } from "./calculator"
import { cardDelet, cardHandler, deletHandler, manageInventoryHandler } from "./handler"
import { newproductHandler } from "./newitem"
import { addBtn, cardGroup, closeBtn, formProduct, manageInventory, numberGroup, productGroup } from "./selector"

const listeners=()=>{
   
   
    cardGroup.addEventListener('click',cardHandler)
    cardGroup.addEventListener('dblclick',cardDelet)
    numberGroup.addEventListener('click',calculatorHandler)
    productGroup.addEventListener('dblclick',deletHandler)
    addBtn.addEventListener('click',newproductHandler)
    
   
}

export default listeners