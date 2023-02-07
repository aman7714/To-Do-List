import { createElement } from 'react';
import './App.css';

function App() {
  const add = () => {
    const what = document.getElementById("whatToDo").value;
    if(what == ""){
      document.getElementById("error").innerHTML = "*Please Enter ToDo"
    }else{
   const box = document.createElement("div")
   const para1 = document.createElement("li");
   para1.innerText = what ;
 
   const btn = document.createElement("button");
   btn.innerText = "delete" ;
   
   document.getElementById("col").appendChild(box);
  //  document.getElementById("col1").appendChild(para1);
   box.appendChild(para1);
   para1.appendChild(btn);
  //  document.getElementById("col1").appendChild(btn);


    btn.addEventListener('click', () =>{
        btn.parentElement.remove();
    });
  }
  //  delete function 
  // let delbtn = document.getElementById("delbtn")
  // delbtn.addEventListener('click', (e) => {
  //   let col1 = document.getElementById("col1")
  //   col1.removeChild(para1);   
  //   alert("button is clicked") 
  //    });

   document.getElementById("whatToDo").value = "";
  }
    


  return (
    <div id='main'> 
    <h1>TO DO LIST</h1>
    {/* input  */}
    <div id='inputs'>
    <h5 id='error'></h5>
    <input id="whatToDo"  type="text" placeholder='Enter your ToDo here...' />
    </div>
    {/* button-div  */}
    <div id='buttons'>
    <button onClick={add}>ADD</button>
   
    </div>
    {/* todobox  */}
    <div id='content'>
    
    <div id='col' className='col'>
    
    </div>

    </div>
    </div> 
  );

  
}

export default App;
