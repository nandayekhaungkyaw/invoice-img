import { cardControl } from "./Card";


export const items=[
    {
        
        item:"strawberry",
        link:'https://i.pinimg.com/564x/49/95/04/49950406155e21ab044d3d1cf8b371a0.jpg',
        price:2000
    },
    {
        
        item:"orange",
        link:'./img/orange.jpg',
        price:1100
    },
    {
        
        item:"apple",
        link:'./img/apple.jpg',
        price:1300
    },
    {
       
        item:"banana",
        link:'./img/banana.jpg',
        price:200
    },
    {
       
        item:"pineapple",
        link:'./img/pineapple.jpg',
        price:2200
    },
    {
        
        item:"watermelon",
        link:'./img/durain.jpg',
        price:1300
    }
]
items.forEach((item)=>{
    cardControl(item.link,item.item,item.price)
    
})


