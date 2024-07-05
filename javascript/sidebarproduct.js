import { itemCard, itemOrderName, itemPrice, productGroup, quantity, sideBarProduct, totalPrice } from "./selector"

export const sidBarProductHandler=()=>{
    let sidebar=sideBarProduct.content.cloneNode(true)

  let  productName=sidebar.querySelector('.productName')
  let  productPrice=sidebar.querySelector('.productPrice')
  let  productTotalPrice=sidebar.querySelector('.productTotalPrice')
  let  productQuantity=sidebar.querySelector('.productQuantity')

  productName.innerText=itemOrderName.value
  productPrice.innerText=itemPrice.value
  productTotalPrice.innerText =totalPrice.value
  productGroup.append(sidebar)
  productQuantity.innerText=quantity.value
  console.log(sidebar);
    console.log(productName,productPrice,productTotalPrice);


}