

import Swal from 'sweetalert2'
import {  formProduct, itemPrice, quantity, totalPrice } from "./selector";
import { sidBarProductHandler } from "./sidebarproduct";

export const calculatorHandler=(event)=>{
   
    if(event.target.innerText=="delete"){
        formProduct.reset()
       
    }else if (event.target.innerText=="Check") {
        let calculate= parseInt(quantity.value) * parseInt(itemPrice.value)
        console.log(calculate);
        totalPrice.value=calculate
     }else if(event.target.innerText=="Order"){
        

        
        // calculatePrice()
        if(quantity.value=='' || totalPrice.value == ''){
            Swal.fire({
                title: "Empty ?",
                text: "Put quantity andYou should click check ",
                icon: "question"
              });

        }else{
            sidBarProductHandler()
            formProduct.reset()
        }
       
       
       
      


     } else{
        quantity.value+=event.target.innerText

    }
  

}

