import './App.css';
import Productmap from './productmap';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
   let [updatedarr , setarr] = useState([]);
   let [total , settotal] = useState(0);
  let [empty, setempty] = useState(true);

   function tot(){
    let tot = 0;
      updatedarr.map((item) => {
      tot = tot + parseInt(item.price) * parseInt(item.initval);
       settotal(tot);
        return 0;
    })
    
    if(tot === 0){
      setempty(true);
    }
    else{
      setempty(false);
    }
   }


useEffect(()=>{
  tot();
},[updatedarr])

   function cartfun (uparr){
    console.log(uparr); 
    // setarr(uparr);
    
     setarr(uparr);

    
   }

  return (
    <div style={{display:"flex" , gap: "25px", margin:"5vh 8vw" }}>
        
     <div style={{width:"50vw" , textAlign:"center", border:"10px solid gray" , padding:"10px"}}>
        <h1 >Products</h1>
           <Productmap cart = {cartfun}  />
     </div>

      <div style={{width:"34vw" , textAlign:"center", border:"10px solid gray" , padding:"10px", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
           <div>
            <h1>Cart</h1>
             {
              empty && <h3>Cart is Empty</h3>
             }

            <div>
              {
                updatedarr.map((item, idx) => {
                  return <div key = {idx}>
                  {
                  item.initval !== 0  && <div style={{ display: "flex", color: "white", justifyContent: "space-between", padding: "20px 15px", backgroundColor: "#a6a6a6", margin: "20px 10px"}}>
                    <h3>{item.name} </h3>
                    <h3>{item.price} X {item.initval}</h3>
                    </div> 
                  } 
                  
                  </div>
                })
              }
            </div>
            </div>

            <div style={{ display: "flex", color: "white", justifyContent: "space-between", padding: "20px 15px", backgroundColor: "#a6a6a6", margin: "20px 10px"}}>
               <h1>Total:</h1>
               <h1>{total}</h1>
            </div>
      </div>

    </div>
  );
}

export default App;
