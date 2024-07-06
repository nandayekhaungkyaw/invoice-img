import { cardControl } from "./Card";


export const items=[
    {
        
        item:"strawberry",
        link:'https://i.pinimg.com/564x/49/95/04/49950406155e21ab044d3d1cf8b371a0.jpg',
        price:2000
    },
    {
        
        item:"orange",
        link:'https://i.pinimg.com/564x/5b/c3/3e/5bc33e6521b149588e3bfa277a3eee6b.jpg',
        price:1100
    },
    {
        
        item:"apple",
        link:'https://i.pinimg.com/564x/2b/28/18/2b2818db5b1c317ff497b0447d9b89d6.jpg',
        price:1300
    },
    {
       
        item:"banana",
        link:'https://i.pinimg.com/564x/e3/1e/fc/e31efc84ab8537107d12b2c5d73f2395.jpg',
        price:200
    },
    {
       
        item:"pineapple",
        link:'https://i.pinimg.com/564x/7d/dc/08/7ddc085cedaad649a4134b05abbfd188.jpg',
        price:2200
    },
    {
        
        item:"watermelon",
        link:'https://i.pinimg.com/564x/f3/f7/2e/f3f72e6978d9db5e1dadf4d6e0f0efe7.jpg',
        price:1300
    }
]
items.forEach((item)=>{
    cardControl(item.link,item.item,item.price)
    
})


