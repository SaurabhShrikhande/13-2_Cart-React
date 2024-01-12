import './App.css';
import Productmap from './productmap';
import { useState } from 'react';

function App() {
   let [updatedarr , setarr] = useState([]);
   let [total , settotal] = useState(0);

   function cartfun (uparr){
    console.log(uparr)  
    // setarr(uparr);
    function abc(){
      setarr(() =>  updatedarr = uparr);
    }
    abc();
    let tot = 0;
       updatedarr.map((item) => {
         tot = tot + parseInt(item.price) * parseInt(item.initval);
         settotal(() => total = tot);
    })
   }

  return (
    <div style={{display:"flex" , gap: "25px", margin:"5vh 8vw" }}>
        
     <div style={{width:"50vw" , textAlign:"center", border:"10px solid gray" , padding:"10px"}}>
        <h1 >Products</h1>
           <Productmap cart = {cartfun}  />
     </div>

      <div style={{width:"34vw" , textAlign:"center", border:"10px solid gray" , padding:"10px"}}>
           
            <h1>Cart</h1>

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

            <div style={{ display: "flex", color: "white", justifyContent: "space-between", padding: "20px 15px", backgroundColor: "#a6a6a6", margin: "20px 10px"}}>
               <h1>Total:</h1>
               <h1>{total}</h1>
            </div>
      </div>

    </div>
  );
}

export default App;
