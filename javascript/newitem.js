
import { cardControl } from "./Card";
import { items } from "./items";
import { cardGroup, newForm, newPrice, newProduct, Url } from "./selector";
import Swal from 'sweetalert2'

export const newproductHandler=(event)=>{
    

    let url=Url.value
    if (url.startsWith('http://') || url.startsWith('https://' ) && url.endsWith('jpg')) {
        // Ensure the URL starts with http:// or https://
      
        console.log(url);
        if(url.value=='' || newPrice.value=='' || newProduct.value==''){
          Swal.fire({
            title: "Empty",
            text: "You should put all input",
            icon: "question"
          });

        }else{
          items.push({
            item:`${newProduct.value}`,
        link:`${Url.value}`,
        price:`${newPrice.value}`
        })
        Url.value=null
        newProduct.value=null
        newPrice.value=null
       
          
        }

        let card=cardGroup.querySelectorAll('.card')
        card.forEach((oneCard)=>{
         oneCard.remove()
 
        })
       
        
        items.forEach((item)=>{
          cardControl(item.link,item.item,item.price)

        })


     
        
      
       
      } else {
       
        Swal.fire({
            title: "Url?",
            text: "You should put img url link start-with https and end-with jpg",
            icon: "question"
          });
      }
    }


