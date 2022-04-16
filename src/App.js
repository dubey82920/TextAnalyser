
import './App.css';

import Navbar from './components/Navbar'; 
import Textform from './components/TextForm';
import React,{useState} from 'react';

function App() {
  const  [mode, setmode] = useState('light');
  
const togglemode =()=>{
if(mode==='light'){
  setmode('dark');
  document.body.style.backgroundColor='#0a3069';

}
else{
  setmode('light');
  document.body.style.backgroundColor='white';

}
}
  return (
 <>
 <Navbar  title="TextUtils" AboutText="About Us" mode={mode} togglemode={togglemode}/>
 
 <div className="container">
<Textform heading="Enter Text To Analyze Below" mode={mode}/>
</div>
  </>
  );
}

export default App;
