import { itemOrderName, itemPrice, sideBar } from "./selector"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import '../node_modules/sweetalert2/dist/sweetalert2.all'

export const manageInventoryHandler=()=>{
 
    sideBar.classList.toggle("translate-x-full")
}
export const closeBtnHandler=()=>{
    
    sideBar.classList.toggle("translate-x-full")
}

export const cardHandler=(event)=>{
    let itemName=event.target.closest('.card')
  let price=itemName.querySelector("#itemPriceCard").innerText
   
itemPrice.value=parseFloat(price)
itemOrderName.value=itemName.querySelector("#itemNameCard").innerText

}

export const deletHandler=(event)=>{

    let itemName=event.target.closest('.cards')
    console.log(itemName);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            itemName.remove()
          
        }
      });

 

}



