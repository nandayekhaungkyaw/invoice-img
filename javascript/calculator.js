import { calculatePrice } from "./calculatePrice";
import { form, itemPrice, quantity, totalPrice } from "./selector";
import { sidBarProductHandler } from "./sidebarproduct";

export const calculatorHandler=(event)=>{
   
    if(event.target.innerText=="delete"){
        form.reset()
       
    }else if (event.target.innerText=="Check") {
        let calculate= parseInt(quantity.value) * parseInt(itemPrice.value)
        console.log(calculate);
        totalPrice.value=calculate
     }else if(event.target.innerText=="Order"){

        sidBarProductHandler()
        calculatePrice()
       
       form.reset()


     } else{
        quantity.value+=event.target.innerText

    }
  

}