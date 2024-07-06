import { productGroup, total, totalTax } from "./selector"

export const obseverCalculate=()=>{
   
    const config = { attributes: true, childList: true, subtree: true };
    
    
    const watchDo=()=>{
        total.innerText=0
        console.log('obsever');
    
        let all=productGroup.querySelectorAll('.cards')
        all.forEach((one)=>{
            
           
            let onePrice=one.querySelector(".productTotalPrice")
           
           
     total.innerText  =  parseFloat(total.innerText)   +    parseInt(onePrice.innerText)
           
           
        })
        taxCalculate(total.innerText)
        totalTaxCalculator(total.innerText,tax.innerText)
    
    }
    
    let observer=new MutationObserver(watchDo)
    observer.observe(productGroup, config);
    
    
    }
    

// export const calculatePrice=()=>{
//     total.innerText=0
    
//     let all=productGroup.querySelectorAll('.cards')
//     all.forEach((one)=>{
        
//         console.log(one);
//         let onePrice=one.querySelector(".productTotalPrice")
//         console.log(onePrice.innerText);
       
//  total.innerText  =  parseFloat(total.innerText)   +    parseInt(onePrice.innerText)
       
       
//     })
//     taxCalculate(total.innerText)
//     totalTaxCalculator(total.innerText,tax.innerText)

// }

export const taxCalculate=(total,percentage=5)=>{
    let calculateTax=parseFloat(total) *(percentage/100)
    tax.innerText=calculateTax

}
export const totalTaxCalculator=(total,tax)=>{
    let calculate= parseFloat(total) +parseFloat(tax)
    totalTax.innerText=calculate

}

export const mutationObsever=()=>{
   
const config = { attributes: true, childList: true, subtree: true };


const watchDo=()=>{

}

let observer=new mutationObsever(watchDo)
observer.observe(productGroup, config);


}

