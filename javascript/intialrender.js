import { obseverCalculate } from "./calculatePrice"
import { cardControl } from "./Card"
import { productGroup } from "./selector"
import Swal from 'sweetalert2'

const intialRender=()=>{
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