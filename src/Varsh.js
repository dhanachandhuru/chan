
import {useState} from "react";
function Varsh(){
  var [num,num1, setNum]= useState(0);
  function Varshsec(){
      setNum(num+1);
  }
  function Varshmin(){
    if(num/60==0);
    {
      setNum(num1 + 1);
    }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }
   return(
    <>
    <button><input type="text" value={num}/></button>
  
    <button onClick={decNum}></button>

    <button onClick={Varshsec}><span>{handleChange}</span></button>
   </>
  );
}
export default Varsh;