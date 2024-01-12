import { useState } from "react";

export default function Productmap (){
   
   
   let [Products , setprodinit] = useState(
        [
        {id: 1, name: "Product-1", price:100 , initval:0},
        {id: 2, name: "Product-2", price:200 , initval:0},
        {id: 3, name: "Product-3", price:300 , initval:0},
        ]
   );
    function minus(key){
      const item =  Products.map((product) =>{
            if(product.id === key && product.initval > 0){
               return { ...product , initval : product.initval + 1};
            }
        })
        return item;
    }
    function plus(key){
        
    }
   

    return (
        <div>
            {
        Products.map((product , key) =>{          
          return( <div key={product.id}>
                <div style={{display:"flex", color:"white",justifyContent:"space-between", padding:"20px 15px", backgroundColor:"#a6a6a6", margin:"20px 10px"}}>
                 <h3>{product.name}</h3>
                 <h3>{product.price}</h3>
                    <div style={{display:"flex", backgroundColor:"#3B93A9", padding:"0px 10px", borderRadius:"50px"}}>
                       <button style={{padding:"0px 20px", backgroundColor:"#3B93A9", border:"none", color:"white", fontSize:"35px", borderRadius:"50px"}}
                       onClick={() =>{ minus(key)} }>-</button>
                       <h3 style={{margin:"auto 10px"}}>{product.initval}</h3>
                       <button style={{padding:"0px 20px", backgroundColor:"#3B93A9", border:"none", color:"white", fontSize:"25px", borderRadius:"50px"}}
                       onClick={() =>{ plus(key)}}>+</button>
                    </div>
               </div>
   
             </div> )
           } ) 
          }
            </div>
         
    )
       
}