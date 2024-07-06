import { obseverCalculate } from "./calculatePrice"
import { cardControl } from "./Card"
import { items } from "./items"

import Swal from 'sweetalert2'

const intialRender=()=>{
     
  items.forEach((item)=>{
    cardControl(item.link,item.item,item.price)

  })

  window.addEventListener('load',()=>{
    Swal.fire({
      title: "Instruction",
      text: "Double-Click to delet Card And Item",
      icon: "info"
    });
   
  })
  obseverCalculate()
   
   

}

export default intialRender