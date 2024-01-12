import './App.css';
import Productmap from './productmap';

function App() {
   

  return (
    <div style={{display:"flex" , gap: "25px", margin:"5vh 8vw" }}>
        
     <div style={{width:"50vw" , textAlign:"center", border:"10px solid gray" , padding:"10px"}}>
        <h1 >Products</h1>
           <Productmap/>
     </div>

      <div style={{width:"34vw" , textAlign:"center", border:"10px solid gray" , padding:"10px"}}>
            <h1>Cart</h1>
      </div>

    </div>
  );
}

export default App;
