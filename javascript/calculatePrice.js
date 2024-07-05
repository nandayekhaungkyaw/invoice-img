import { productGroup, total, totalTax } from "./selector"

export const calculatePrice=()=>{
    total.innerText=0
    
    let all=productGroup.querySelectorAll('.cards')
    all.forEach((one)=>{
        
        console.log(one);
        let onePrice=one.querySelector(".productTotalPrice")
        console.log(onePrice.innerText);
       
 total.innerText  =  parseFloat(total.innerText)   +    parseInt(onePrice.innerText)
       
       
    })
    taxCalculate(total.innerText)
    totalTaxCalculator(total.innerText,tax.innerText)

}

export const taxCalculate=(total,percentage=5)=>{
    let calculateTax=parseFloat(total) *(percentage/100)
    tax.innerText=calculateTax

}
export const totalTaxCalculator=(total,tax)=>{
    let calculate= parseFloat(total) +parseFloat(tax)
    totalTax.innerText=calculate

}

