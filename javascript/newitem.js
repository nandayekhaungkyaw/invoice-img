
import { cardControl } from "./Card";

import { cardGroup, newForm, newPrice, newProduct, Url } from "./selector";
import Swal from 'sweetalert2'

export const newproductHandler=(event)=>{
    

    let url=Url.value
    if (url.startsWith('http://') || url.startsWith('https://' ) && url.endsWith('jpg') || url.endsWith('png') ) {
        // Ensure the URL starts with http:// or https://
      
        console.log(url);
        if(url.value=='' || newPrice.value=='' || newProduct.value==''){
          Swal.fire({
            title: "Empty",
            text: "You should put all input",
            icon: "question"
          });

        }else{

          cardControl(Url.value,newProduct.value,newPrice.value)
          newForm.reset()

      
      }} else {
       
        Swal.fire({
            title: "Url?",
            text: "You should put img url link start-with https and end-with jpg or png",
            icon: "question"
          });
      }
    }


