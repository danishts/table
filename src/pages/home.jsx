
import React, {useRef} from "react";

import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore"
import { fireEvent } from "@testing-library/react";


export default function Home() {
  const messageRef = useRef();
  const ref =collection(firestore,"messages");


  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);
    
    let data ={
      message :messageRef.current.value,
    }
  try{
      addDoc(ref,data);
    }
     catch (e){
      console.log(e);
    }

  };

return (  
  <div>
    <form onSubmit={handleSave}>
   <tale>
    <tr>  
      <label>Enter Message</label>
      <input type="text" ref={messageRef}/>
      <button type="Submit" >Save</button>
      </tr>
      </tale>
    </form>
    
    
    </div>
);
  
}
