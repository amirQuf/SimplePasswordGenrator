import { useState } from 'react'

import './App.css'

function App() {
  const [password,setPassword] = useState("Amir");
  const [len,setLen] = useState(10);
  const [numb,setNumb] = useState(false);
  const [cap,setCap] = useState(false);
  const [sc,setSc] = useState(false);
  const [action,actionSet]= useState("copy")
  const [level,levelSet]= useState(1)
  const [msg,setMsg]= useState("copy")
  const handleLen = (event)=>{
    setLen(event.target.value);
  };
  const log = ()=>{
    console.log("len:" + len);
    console.log("numb:"+ numb);
    console.log("cap:"+ cap);
    console.log("sc:"+ sc);
  };
  
  const SetString = ()=>{
    let chars = "qwertyuiopasdfghjklzxcvbnm"
    if (numb){
      chars+="1234567890"
    }
    if (cap){
      chars+= chars.toUpperCase();
    }
    if (sc)
     chars +="!@#$%^&*()_+-=|:';?/><{]}]"
    console.log(chars);
    return chars;
  }

  const genrate = (event)=>{
    log();
    let chars = SetString();
    let temp = ''
    let i = 0;
    for(;i<len ; i++){
     var rnam =Math.floor(Math.random() * chars.length);
     temp  +=chars[rnam];
    }
    console.log(temp);
    setPassword(temp);
  };
  const copy =() => {
    navigator.clipboard.writeText(password);
    actionSet("copied!")
    actionSet("copy")
  }

  const handleNumb = (event)=>{
    setNumb(!numb);
  };
  const handleCap = (event)=>{
    
    setCap(!cap);
  };

  const handleSc = (event)=>{
    
    setSc(!sc);
  };

  
  return (
   <>
   <div className="container">
   <h1>Password Generator</h1>
  
    <div className="form-control">
    <p>{password}
    
    <button className= "btn btn-secondary mx-3 float-right" onClick= {copy}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg></button>
    </p>
    <br />
    <label htmlFor ="length">length:</label>
    <input type="number" name="length" id="length" value={len} onChange={handleLen} />
    <br />
    <p>
    <input type="checkbox" className="form-check-input" name="number" id="number" onChange={handleNumb}/>
    <label htmlFor="number" className="form-check-label">Use numbers</label>
    
    <br />
    <input type="checkbox"  className="form-check-input" name="sc" id="sc" onChange={handleSc}/>
    <label className="form-check-label" htmlFor="sc">Use special charcters</label>
    <br />
    <input type="checkbox" className="form-check-input" name="captal" id="sc" onChange={handleCap}/>
    <label className="form-check-label" htmlFor="captal">Use captal charcters</label>
    </p>
    <span className="badge badge-sucess">{level}</span>
    <br />
    <button className="btn btn-success" onClick={genrate}>Genrate</button>
    <br />
    {/* <span className="alert alert-success mt-4">{msg}</span> */}
    </div>
    
   </div>
    
    </>

  )
      
    
}

export default App
