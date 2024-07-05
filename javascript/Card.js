import { cardGroup, itemCard } from "./selector"


export const cardControl=(link,name,price,id)=>{
    const card=itemCard.content.cloneNode(true);
    let itemImg=card.querySelector('#cardImg')
    let itemNameCard=card.querySelector('#itemNameCard')
let itemPriceCard=card.querySelector('#itemPriceCard')


itemImg.src=link





itemNameCard.innerText=name
itemPriceCard.innerText=price


cardGroup.append(card)

}

