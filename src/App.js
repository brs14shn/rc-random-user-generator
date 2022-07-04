import axios from "axios";
import { useState } from "react";



const App = () => {

  const [user, setUser ] = useState()
  const url="https://randomuser.me/api/";

  const getUserRandom=async()=>{
    const {data}=await axios.get(url);
    setUser(data)
  }
  // getUserRandom()
 
   console.log(user);

  return (
    <div>
      <h1></h1>
      <img src="" alt="" />

      
    </div>
  )
}

export default App