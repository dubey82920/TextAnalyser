import React,{useState} from 'react'

export const Textform = (props) => {
  const handleUpClick = ()=>{
   // console.log("upperCase was clicked");
    setText(text.toUpperCase());
  }
 
  const handleLowClick = ()=> {
   // console.log("you have clicked on lowerCase");
    setText(text.toLowerCase());
  }
  const handleClearClick = ()=> {
    // console.log("you have clicked on lowerCase");
    let newText='';
     setText(newText);
   }
   const handleCopy =()=>{
     var text=document.getElementById("mybox");
     text.select();
     navigator.clipboard.writeText(text.value);
   }
  const handleOnChange = (event) =>{
   // console.log("on change");
    setText(event.target.value);
  }
  

    const [text, setText] = useState(' ');
   
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#0a3069'}} >
      <h1>{props.heading}</h1>
  <div className="mb-3" >
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#0a3069':'white', color:props.mode==='dark'?'white':'#0a3069'}} id="mybox" rows="8">{text}</textarea>
  </div>
  <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Change to Uppercase</button>
  <button type="button" className="btn btn-primary mx-2" onClick={handleLowClick}>Change to lowercase</button>
  <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
  <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
 <div className= "container my-3 style={{color:props.mode==='dark'?'white':'#0a3069'}}  ">
   <h2>your text summary</h2>
   <p>{text.split(" ").length} words and {text.length} charecter</p>
   <p>{0.008*text.split(" ").length} minutes to read</p>
   <h2>Preview</h2>
   <p>{text.length===0?"Write Somthing in above box to preview":text}</p>
 </div>
  
  </div>
  </>
  )
}
export default Textform;  